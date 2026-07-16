/**
 * Sets CORS headers to allow all origins
 * @param {Object} res - Next.js response object
 */
function allowCors(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

/**
 * Higher-order function to wrap API handlers with CORS support
 * @param {Function} handler - The API handler function
 * @returns {Function} Wrapped handler with CORS support
 */
function withCors(handler) {
    return async (req, res) => {
        // Set CORS headers
        allowCors(res);

        // Handle preflight request
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }

        // Call the original handler
        return handler(req, res);
    };
}

module.exports = { allowCors, withCors };
