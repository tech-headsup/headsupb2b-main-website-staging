// src/pages/api/DownloadBrochure.js
const { sendEmail } = require('../../Utils/emailUtils');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // For testing - log the data
        console.log('Received data:', req.body);
        
        // Check if SMTP credentials exist
        if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.log('SMTP credentials missing - would send email in production');
            return res.status(200).json({ success: 'Test mode - email would be sent' });
        }
        
        await sendEmail(req, res, 'DownloadBrochure', 'New Brochure Download Request - HeadsupB2B');
    } catch (error) {
        console.error('Error in DownloadBrochure API:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}