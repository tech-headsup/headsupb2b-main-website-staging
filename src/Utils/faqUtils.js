// ─────────────────────────────────────────────────────────────────────────────
// FAQ Extraction Utilities
//
// Supports two FAQ structures produced by the HeadsupB2B Hashnode blog:
//
//  Pattern A – ordered-list (e.g. "Key Electrical Solutions" post)
//  <ol>
//    <li>
//      <p><strong>Question text?</strong></p>
//      <p>Answer text.</p>
//    </li>
//    …
//  </ol>
//
//  Pattern B – plain paragraphs (e.g. "End-to-End Electrical Solutions" post)
//  <p>**Question text?<br />**Answer text.</p>
//  …
//
// The main export `processFAQs(htmlContent)` detects the pattern automatically
// and returns { faqs, schemaJSON, schemaMarkup } or
// { faqs: [], schemaJSON: null, schemaMarkup: null } when no FAQs are found.
// ─────────────────────────────────────────────────────────────────────────────


// ── Pattern A: <ol><li> with two <p> children ─────────────────────────────────

/**
 * Browser environment – uses DOMParser.
 * Finds a FAQ <ol> by looking for list items that each have exactly two <p>
 * children (question paragraph + answer paragraph).
 */
function extractFAQsFromList_DOM(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const faqs = [];

  doc.querySelectorAll('ol').forEach((ol) => {
    const items = ol.querySelectorAll('li');
    const candidates = [];

    items.forEach((li) => {
      const paras = li.querySelectorAll('p');
      if (paras.length >= 2) {
        const question = paras[0].textContent.trim().replace(/\s+/g, ' ');
        const answer   = paras[1].textContent.trim().replace(/\s+/g, ' ');
        if (question && answer) {
          candidates.push({ question, answer });
        }
      }
    });

    // Only treat this <ol> as a FAQ list when every item produced a pair
    if (candidates.length > 0 && candidates.length === items.length) {
      candidates.forEach((c) => faqs.push(c));
    }
  });

  return faqs;
}

/**
 * Node.js environment – regex-based.
 * Matches <li> blocks containing two <p> tags.
 */
function extractFAQsFromList_Regex(htmlContent) {
  const faqs = [];

  // Match each <li>…</li> block (non-greedy, dotall)
  const liPattern = /<li>([\s\S]*?)<\/li>/gi;
  let liMatch;

  while ((liMatch = liPattern.exec(htmlContent)) !== null) {
    const liContent = liMatch[1];

    // Extract all <p>…</p> blocks inside the <li>
    const pPattern = /<p>([\s\S]*?)<\/p>/gi;
    const paragraphs = [];
    let pMatch;
    while ((pMatch = pPattern.exec(liContent)) !== null) {
      const text = pMatch[1]
        .replace(/<[^>]*>/g, '')          // strip inner tags
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      if (text) paragraphs.push(text);
    }

    if (paragraphs.length >= 2) {
      faqs.push({ question: paragraphs[0], answer: paragraphs[1] });
    }
  }

  return faqs;
}


// ── Pattern B: plain <p>**Question<br/>**Answer paragraphs ────────────────────

/**
 * Browser environment – uses DOMParser.
 * Looks for <p> elements whose text starts with "**" (bold-markdown in HTML),
 * then splits on the <br> child to get question / answer.
 */
function extractFAQsFromParagraphs_DOM(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const faqs = [];

  doc.querySelectorAll('p').forEach((p) => {
    const innerHTML = p.innerHTML;

    // Must start with ** and contain a <br>
    if (!/^\s*\*\*/.test(innerHTML) || !/<br\s*\/?>/i.test(innerHTML)) return;

    // Split on <br> to get question part and answer part
    const parts = innerHTML.split(/<br\s*\/?>/i);
    if (parts.length < 2) return;

    const question = parts[0]
      .replace(/<[^>]*>/g, '')
      .replace(/^\*+/, '')
      .replace(/\*+$/, '')
      .trim();

    const answer = parts.slice(1).join(' ')
      .replace(/<[^>]*>/g, '')
      .replace(/^\*+/, '')
      .replace(/\*+$/, '')
      .trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  });

  return faqs;
}

/**
 * Node.js environment – regex-based.
 * Matches <p>**Question<br />**Answer</p> pattern.
 */
function extractFAQsFromParagraphs_Regex(htmlContent) {
  const faqs = [];

  // Match <p> that starts with ** (question bold marker)
  const pPattern = /<p>\s*\*\*([\s\S]*?)<br\s*\/?>\s*\*\*([\s\S]*?)<\/p>/gi;
  let match;

  while ((match = pPattern.exec(htmlContent)) !== null) {
    const question = match[1]
      .replace(/<[^>]*>/g, '')
      .replace(/\*+/g, '')
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const answer = match[2]
      .replace(/<[^>]*>/g, '')
      .replace(/\*+/g, '')
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}


// ── FAQ Schema generation ─────────────────────────────────────────────────────

/**
 * Generates a schema.org FAQPage JSON-LD object.
 * @param {Array<{question: string, answer: string}>} faqs
 * @param {Object} options - optional { url }
 * @returns {Object} JSON-LD schema object
 */
function generateFAQSchema(faqs, options = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };

  if (options.url) {
    schema.url = options.url;
  }

  return schema;
}

/**
 * Generates a <script type="application/ld+json"> HTML string.
 * @param {Array<{question: string, answer: string}>} faqs
 * @param {Object} options
 * @returns {string}
 */
function generateSchemaMarkup(faqs, options = {}) {
  const schema = generateFAQSchema(faqs, options);
  return `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
}


// ── Main export ───────────────────────────────────────────────────────────────

/**
 * Extracts FAQs from raw HTML and returns structured data + schema.
 *
 * Returns:
 *   { faqs: Array, schemaJSON: Object, schemaMarkup: string }
 * or, when no FAQs are found:
 *   { faqs: [], schemaJSON: null, schemaMarkup: null }
 *
 * @param {string} htmlContent - Raw HTML string of the blog post
 * @param {Object} options     - Optional { url } for the schema
 */
export function processFAQs(htmlContent, options = {}) {
  if (!htmlContent) {
    return { faqs: [], schemaJSON: null, schemaMarkup: null };
  }

  const isBrowser = typeof DOMParser !== 'undefined';
  let faqs = [];

  if (isBrowser) {
    // Try Pattern A (ordered list) first
    faqs = extractFAQsFromList_DOM(htmlContent);

    // Fall back to Pattern B (plain paragraphs)
    if (faqs.length === 0) {
      faqs = extractFAQsFromParagraphs_DOM(htmlContent);
    }
  } else {
    // Node.js path
    faqs = extractFAQsFromList_Regex(htmlContent);

    if (faqs.length === 0) {
      faqs = extractFAQsFromParagraphs_Regex(htmlContent);
    }
  }

  if (faqs.length === 0) {
    return { faqs: [], schemaJSON: null, schemaMarkup: null };
  }

  const schemaJSON   = generateFAQSchema(faqs, options);
  const schemaMarkup = generateSchemaMarkup(faqs, options);

  return { faqs, schemaJSON, schemaMarkup };
}


// ── CommonJS compatibility ────────────────────────────────────────────────────

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    processFAQs,
    generateFAQSchema,
    generateSchemaMarkup,
    // Internal helpers exported for testing
    extractFAQsFromList_Regex,
    extractFAQsFromParagraphs_Regex,
  };
}
