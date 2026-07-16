// src/pages/api/sendEmailToBuy.js
const { sendEmail } = require('../../Utils/emailUtils');

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    sendEmail(req, res, 'buy', 'HeadsupB2B: New Buy Inquiry');
}