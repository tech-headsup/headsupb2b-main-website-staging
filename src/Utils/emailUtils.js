// src/utils/emailUtils.js


var nodemailer = require("nodemailer");
const axios = require("axios");
const requestIp = require("request-ip");
const fs = require("fs");
const path = require("path");

// Helper function to handle undefined values
const handleUndefined = (value) => {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed) return trimmed;
  } else if (value !== undefined && value !== null && value !== "") {
    return value;
  }
  return "optional input user didn't fill it";
};


// Helper function to get recipient list based on contact number
const getRecipientList = (contactNo, formType) => {
  const demoMode = String(process.env.DEMO_CHECK || "").toLowerCase() === "true";
  const isTriggerMatch = contactNo === "0123456789";
  const isTest = demoMode || isTriggerMatch;
  if (isTest) {
    if (demoMode) {
      console.log("[emailUtils] DEMO_CHECK=true — routing to test recipients");
    }
    return `vishal@headsupcorporation.com, raviranjan@headsupb2b.com,hitesh@headsupcorporation.com`;
  }
  if (formType === "addWithUs") {
    return "sumit@headsupb2b.com, info@headsupb2b.com, raviranjan@headsupb2b.com,tanshi@headsupcorporation.com,hitesh@headsupcorporation.com";
  }
  if (formType === "uploadQuote") {
    return "sumit@headsupb2b.com, rajesh@headsupb2b.com, rizwan@headsupb2b.com, rishabh@headsupb2b.com, ravi@headsupb2b.com, raviranjan@headsupb2b.com, info@headsupb2b.com";
  }
  if (formType === "vendorOnboarding") {
    return "sumit@headsupb2b.com, raviranjan@headsupb2b.com, info@headsupb2b.com, tanshi@headsupcorporation.com";
  }
  return "sumit@headsupb2b.com, rajesh@headsupb2b.com, rizwan@headsupb2b.com, rishabh@headsupb2b.com, ravi@headsupb2b.com, raviranjan@headsupb2b.com, info@headsupb2b.com";
};

// Function to get clean IP address
const getClientIp = (req) => {
  const clientIp = requestIp.getClientIp(req);
  if (clientIp) {
    return clientIp.replace(/^::ffff:/, "");
  }
  return null;
};

// Function to get IP information
const getIpInfo = async (ip) => {
  if (!ip || ip === "::1" || ip === "127.0.0.1" || ip === "localhost") {
    return {
      status: "localhost",
      country: "Local Environment",
      countryCode: "LOCAL",
      region: "Development",
      regionName: "Local Development",
      city: "localhost",
      zip: "N/A",
      isp: "Local Development Environment",
      query: ip || "localhost",
    };
  }

  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching IP information:", error);
    return {
      status: "error",
      country: "Unknown",
      countryCode: "N/A",
      region: "Unknown",
      regionName: "Unknown",
      city: "Unknown",
      zip: "N/A",
      isp: "Unknown",
      query: ip,
    };
  }
};

const createEmailTemplate = (formType, data, ipInfo) => {
  const formTypeLabels = {
    getInTouch: "Contact Form",
    sell: "Sell Inquiry",
    buy: "Buy Inquiry",
    addWithUs: "Add with Us Inquiry",
    DownloadBrochure: "Brochure Download Request",
    uploadQuote: "Quote Upload Request",
    vendorOnboarding: "Vendor Onboarding (Services Page)",
  };

  // Helper to format date in IST
  const formatDateInIST = () => {
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-IN", options).format(now);
  };

  // Get form details based on type
  const getDetailsHTML = (data) => {
    const rowStyle = `
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            padding: 8px 0; 
            border-bottom: 1px solid #eee; 
            font-family: Arial, sans-serif; 
            font-size: 14px;
        `;
    const labelStyle = `
            font-weight: bold; 
            color: #333; 
            margin-right: 10px;
            min-width: 100px; 
        `;
    const valueStyle = `
            color: #555; 
            text-align: left;
        `;

    const sourceRow = `
    <div style="${rowStyle}">
        <span style="${labelStyle}">Lead Source:</span>
        <span style="${valueStyle}">${data.adsSource}</span>
    </div>
    <div style="${rowStyle}">
        <span style="${labelStyle}">Page Source:</span>
        <span style="${valueStyle}">${handleUndefined(data.source)}</span>
    </div>
    `;

    if (formType === "getInTouch") {
      return `
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Name:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.name
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Contact:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.contactNo
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Email:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.email
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Address:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.address
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Message:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.message
      )}</span>
                </div>
                 <div style="${rowStyle}">
                    <span style="${labelStyle}">Ads Source:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.adsSource
      )}</span>
                </div>
            `;
    } else if (formType === "addWithUs") {
      return `
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Name:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.name
      )}</span>
                </div>
                 <div style="${rowStyle}">
                    <span style="${labelStyle}">Email:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.email
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Contact:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.contactNo
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Budget:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.budget
      )}</span>
                </div>
                 <div style="${rowStyle}">
                    <span style="${labelStyle}">Product:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.product
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Additional Comments :</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.additionalComments
      )}</span>
                </div>
            `;
    } else if (formType === "DownloadBrochure") {
      return `
        <div style="${rowStyle}">
            <span style="${labelStyle}">Name:</span>
            <span style="${valueStyle}">${handleUndefined(data.name)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Contact:</span>
            <span style="${valueStyle}">${handleUndefined(
        data.contactNo
      )}</span>
        </div>
    `;
    } 
    else if(formType==="loanWithUs"){
      return `
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Name:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.name
      )}</span>
                </div>
                 <div style="${rowStyle}">
                    <span style="${labelStyle}">Email:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.email
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Contact:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.contactNo
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Company Name:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.companyName
      )}</span>
                </div>
                 <div style="${rowStyle}">
                    <span style="${labelStyle}">GST Number:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.gstNumber
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Requirements :</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.requirement
      )}</span>
                </div>

                <div style="${rowStyle}">
                    <span style="${labelStyle}">Ads Source:</span>
                    <span style="${valueStyle}">${data.adsSource}</span>
                </div>
            `;

    }
    else if (formType === "uploadQuote") {
      return `
        <div style="${rowStyle}">
            <span style="${labelStyle}">Message:</span>
            <span style="${valueStyle}">${handleUndefined(data.message)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Uploaded File:</span>
            <span style="${valueStyle}">${data.fileName ? `${data.fileName} (attached)` : 'No file uploaded'}</span>
        </div>
      `;
    }
    else if (formType === "vendorOnboarding") {
      return `
        <div style="${rowStyle}">
            <span style="${labelStyle}">Business Name:</span>
            <span style="${valueStyle}">${handleUndefined(data.businessName)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Contact Person:</span>
            <span style="${valueStyle}">${handleUndefined(data.contactPerson)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Phone:</span>
            <span style="${valueStyle}">${handleUndefined(data.contactNo)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Email:</span>
            <span style="${valueStyle}">${handleUndefined(data.email)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">City / Region:</span>
            <span style="${valueStyle}">${handleUndefined(data.city)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Service Area:</span>
            <span style="${valueStyle}">${handleUndefined(data.serviceArea)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Vendor Type:</span>
            <span style="${valueStyle}">${handleUndefined(data.vendorType)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Service Category:</span>
            <span style="${valueStyle}">${handleUndefined(data.serviceCategory)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Team Size:</span>
            <span style="${valueStyle}">${handleUndefined(data.teamSize)}</span>
        </div>
        <div style="${rowStyle}">
            <span style="${labelStyle}">Experience / Notable Projects:</span>
            <span style="${valueStyle}">${handleUndefined(data.experience)}</span>
        </div>
      `;
    }
    else {
      return `
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Name:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.name
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Contact:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.contactNo
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Pincode:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.pincode
      )}</span>
                </div>
                 <div style="${rowStyle}">
                    <span style="${labelStyle}">GST Number:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.gstNumber
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Category:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.category
      )}</span>
                </div>
                <div style="${rowStyle}">
                    <span style="${labelStyle}">Product:</span>
                    <span style="${valueStyle}">${handleUndefined(
        data.product
      )}</span>
                </div>
                 ${sourceRow}
            `;
    }
  };

  return `
        <div style="
            font-family: Arial, sans-serif; 
            max-width: 600px; 
            margin: 0 auto; 
            border: 1px solid #ddd; 
            border-radius: 8px; 
            overflow: hidden; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <div style="
                padding: 20px; 
                background-color: #4caf50; 
                color: #fff; 
                text-align: center;">
                <h2 style="margin: 0; font-size: 18px;">HeadsupB2B ${
                  formTypeLabels[formType]
                }</h2>
            </div>

            <div style="padding: 20px; background-color: #ffffff;">
                ${getDetailsHTML(data)}
            </div>

            <div style="
                padding: 15px 20px; 
                background-color: #f9f9f9; 
                border-top: 1px solid #ddd; 
                text-align: center; 
                font-size: 12px; 
                color: #555;">
                Submitted on: ${formatDateInIST()}<br/>
            </div>

            <div style="
                text-align: center; 
                padding: 10px; 
                font-size: 11px; 
                color: #aaa;">
                <em>This email is auto-generated by HeadsupB2B.</em>
            </div>
        </div>
    `;
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

// Generic email sending function
const sendEmail = async (req, res, formType, subjectText) => {
  const transporter = createTransporter();
  const clientIp = getClientIp(req);
  const ipInfo = await getIpInfo(clientIp);

  // Extract common fields
  const { name, contactNo, adsSource, source } = req.body;

  // Set default adsSource if not provided
  const finalAdsSource = adsSource || "Organic Lead";

  // Create data object based on form type
  let emailData = { name, contactNo, adsSource: finalAdsSource, source };

  // Add form-specific fields
  if (formType === "getInTouch") {
    const { email, address, message } = req.body;
    emailData = { ...emailData, email, address, message };
  } else if (formType === "addWithUs") {
    const { email, budget, product, additionalComments } = req.body;
    emailData = { ...emailData, email, budget, product, additionalComments };
  } else if (formType === "sell" || formType === "buy") {
    const { category, gstNumber, product, pincode } = req.body;
    emailData = { ...emailData, category, gstNumber, product, pincode };
  } else if (formType === "DownloadBrochure") {
    const { name, contactNo } = req.body;
    emailData = { ...emailData, name, contactNo };
  }
  else if (formType === "loanWithUs") {
    console.log("loanWithUs----",formType );
    
    const { name,email,contactNo, companyName,gstNumber, requirement } = req.body;
    emailData = { ...emailData, name,email,contactNo, companyName,gstNumber, requirement };

    console.log("emailData----",emailData);
    
  }
  else if (formType === "uploadQuote") {
    const { message } = req.body;
    const fileName = req.file ? req.file.originalname : null;
    emailData = { message, fileName };
  }
  else if (formType === "vendorOnboarding") {
    const { businessName, contactPerson, email, city, serviceArea, vendorType, serviceCategory, teamSize, experience } = req.body;
    emailData = { ...emailData, businessName, contactPerson, email, city, serviceArea, vendorType, serviceCategory, teamSize, experience };
  }



  try {
    if (formType === "uploadQuote" && req.file) {
      await transporter.sendMail({
        from: "info@headsupcorporation.com",
        to: getRecipientList(contactNo||null, formType),
        subject: subjectText,
        html: createEmailTemplate(formType, emailData, ipInfo),
        attachments: [{
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype
        }]
      });
    } else {
      await transporter.sendMail({
        from: "info@headsupcorporation.com",
        to: getRecipientList(contactNo, formType),
        subject: subjectText,
        html: createEmailTemplate(formType, emailData, ipInfo),
      });
    }
    
    return res.status(200).json({ success: "Mail Sent" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

module.exports = {
  handleUndefined,
  getRecipientList,
  getClientIp,
  getIpInfo,
  createEmailTemplate,
  createTransporter,
  sendEmail,
};
