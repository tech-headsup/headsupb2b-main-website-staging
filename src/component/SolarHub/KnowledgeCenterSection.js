import Image from "next/image";

function formatDate(value) {
  if (!value) return null;
  const d = new Date(value);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function KnowledgeCenterSection({ knowledgeArticles = [] }) {
  return (
    <section className="section section-no-top kc-section">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8">
        <div className="kc-wrap !max-w-none">
          <div className="kc-head">
            <div className="sec-header">
              <h2>Knowledge Center</h2>
              <p>
                Learn before you specify
              </p>
            </div>
          </div>
          <div className="kc-grid">
            {knowledgeArticles.map((a) => {
              const dateLabel = formatDate(a.date);
              return (
                <a key={`${a.tag}-${a.href}`} href={a.href} className="kc-card">
                  <div className={`kc-img ${a.image ? "has-image" : ""}`}>
                    {a.image ? (
                      <Image
                        src={a.image}
                        alt={a.title}
                        width={a.width || 1200}
                        height={a.height || 630}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    ) : (
                      <span className="kc-img-label">article image</span>
                    )}
                  </div>
                  <div className="kc-body">
                    <div className="kc-meta">
                      <span className={`kc-chip ${a.tag === "Research" ? "kc-chip-research" : "kc-chip-blog"}`}>
                        {a.tag}
                      </span>
                      {dateLabel && <span className="kc-date">{dateLabel}</span>}
                    </div>
                    <h4 className="kc-title">{a.title}</h4>
                    <span className="kc-read">Read more</span>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="kc-footer">
            <a href="/research" className="kc-more">
              Research →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
