// src/pages/api/loanWithUs.js
const { sendEmail } = require('../../Utils/emailUtils');

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    sendEmail(req, res, 'loanWithUs', 'HeadsupB2B: Loan Enquiry');
}