// src/pages/api/sendEmailToSell.js
const { sendEmail } = require('../../Utils/emailUtils');

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    sendEmail(req, res, 'sell', 'HeadsupB2B: New Sell Inquiry');
}