"use strict";exports.id=1670,exports.ids=[1670],exports.modules={4718:(e,s)=>{Object.defineProperty(s,"l",{enumerable:!0,get:function(){return function e(s,a){return a in s?s[a]:"then"in s&&"function"==typeof s.then?s.then(s=>e(s,a)):"function"==typeof s&&"default"===a?s:void 0}}})},5670:(e,s,a)=>{var n=a(5184);let t=a(2167),i=a(2316);a(7147),a(1017);let o=e=>{if("string"==typeof e){let s=e.trim();if(s)return s}else if(null!=e&&""!==e)return e;return"optional input user didn't fill it"},p=(e,s)=>{let a="true"===String(process.env.DEMO_CHECK||"").toLowerCase();return a||"0123456789"===e?(a&&console.log("[emailUtils] DEMO_CHECK=true — routing to test recipients"),"vishal@headsupcorporation.com, raviranjan@headsupb2b.com,hitesh@headsupcorporation.com"):"addWithUs"===s?"sumit@headsupb2b.com, info@headsupb2b.com, raviranjan@headsupb2b.com,tanshi@headsupcorporation.com,hitesh@headsupcorporation.com":"uploadQuote"===s?"sumit@headsupb2b.com, rajesh@headsupb2b.com, rizwan@headsupb2b.com, rishabh@headsupb2b.com, ravi@headsupb2b.com, raviranjan@headsupb2b.com, info@headsupb2b.com":"vendorOnboarding"===s?"sumit@headsupb2b.com, raviranjan@headsupb2b.com, info@headsupb2b.com, tanshi@headsupcorporation.com":"sumit@headsupb2b.com, rajesh@headsupb2b.com, rizwan@headsupb2b.com, rishabh@headsupb2b.com, ravi@headsupb2b.com, raviranjan@headsupb2b.com, info@headsupb2b.com"},l=e=>{let s=i.getClientIp(e);return s?s.replace(/^::ffff:/,""):null},d=async e=>{if(!e||"::1"===e||"127.0.0.1"===e||"localhost"===e)return{status:"localhost",country:"Local Environment",countryCode:"LOCAL",region:"Development",regionName:"Local Development",city:"localhost",zip:"N/A",isp:"Local Development Environment",query:e||"localhost"};try{return(await t.get(`http://ip-api.com/json/${e}`)).data}catch(s){return console.error("Error fetching IP information:",s),{status:"error",country:"Unknown",countryCode:"N/A",region:"Unknown",regionName:"Unknown",city:"Unknown",zip:"N/A",isp:"Unknown",query:e}}},r=(e,s,a)=>`
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
                <h2 style="margin: 0; font-size: 18px;">HeadsupB2B ${({getInTouch:"Contact Form",sell:"Sell Inquiry",buy:"Buy Inquiry",addWithUs:"Add with Us Inquiry",DownloadBrochure:"Brochure Download Request",uploadQuote:"Quote Upload Request",vendorOnboarding:"Vendor Onboarding (Services Page)"})[e]}</h2>
            </div>

            <div style="padding: 20px; background-color: #ffffff;">
                ${(s=>{let a=`
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            padding: 8px 0; 
            border-bottom: 1px solid #eee; 
            font-family: Arial, sans-serif; 
            font-size: 14px;
        `,n=`
            font-weight: bold; 
            color: #333; 
            margin-right: 10px;
            min-width: 100px; 
        `,t=`
            color: #555; 
            text-align: left;
        `,i=`
    <div style="${a}">
        <span style="${n}">Lead Source:</span>
        <span style="${t}">${s.adsSource}</span>
    </div>
    <div style="${a}">
        <span style="${n}">Page Source:</span>
        <span style="${t}">${o(s.source)}</span>
    </div>
    `;return"getInTouch"===e?`
                <div style="${a}">
                    <span style="${n}">Name:</span>
                    <span style="${t}">${o(s.name)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Contact:</span>
                    <span style="${t}">${o(s.contactNo)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Email:</span>
                    <span style="${t}">${o(s.email)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Address:</span>
                    <span style="${t}">${o(s.address)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Message:</span>
                    <span style="${t}">${o(s.message)}</span>
                </div>
                 <div style="${a}">
                    <span style="${n}">Ads Source:</span>
                    <span style="${t}">${o(s.adsSource)}</span>
                </div>
            `:"addWithUs"===e?`
                <div style="${a}">
                    <span style="${n}">Name:</span>
                    <span style="${t}">${o(s.name)}</span>
                </div>
                 <div style="${a}">
                    <span style="${n}">Email:</span>
                    <span style="${t}">${o(s.email)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Contact:</span>
                    <span style="${t}">${o(s.contactNo)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Budget:</span>
                    <span style="${t}">${o(s.budget)}</span>
                </div>
                 <div style="${a}">
                    <span style="${n}">Product:</span>
                    <span style="${t}">${o(s.product)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Additional Comments :</span>
                    <span style="${t}">${o(s.additionalComments)}</span>
                </div>
            `:"DownloadBrochure"===e?`
        <div style="${a}">
            <span style="${n}">Name:</span>
            <span style="${t}">${o(s.name)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Contact:</span>
            <span style="${t}">${o(s.contactNo)}</span>
        </div>
    `:"loanWithUs"===e?`
                <div style="${a}">
                    <span style="${n}">Name:</span>
                    <span style="${t}">${o(s.name)}</span>
                </div>
                 <div style="${a}">
                    <span style="${n}">Email:</span>
                    <span style="${t}">${o(s.email)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Contact:</span>
                    <span style="${t}">${o(s.contactNo)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Company Name:</span>
                    <span style="${t}">${o(s.companyName)}</span>
                </div>
                 <div style="${a}">
                    <span style="${n}">GST Number:</span>
                    <span style="${t}">${o(s.gstNumber)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Requirements :</span>
                    <span style="${t}">${o(s.requirement)}</span>
                </div>

                <div style="${a}">
                    <span style="${n}">Ads Source:</span>
                    <span style="${t}">${s.adsSource}</span>
                </div>
            `:"uploadQuote"===e?`
        <div style="${a}">
            <span style="${n}">Message:</span>
            <span style="${t}">${o(s.message)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Uploaded File:</span>
            <span style="${t}">${s.fileName?`${s.fileName} (attached)`:"No file uploaded"}</span>
        </div>
      `:"vendorOnboarding"===e?`
        <div style="${a}">
            <span style="${n}">Business Name:</span>
            <span style="${t}">${o(s.businessName)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Contact Person:</span>
            <span style="${t}">${o(s.contactPerson)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Phone:</span>
            <span style="${t}">${o(s.contactNo)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Email:</span>
            <span style="${t}">${o(s.email)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">City / Region:</span>
            <span style="${t}">${o(s.city)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Service Area:</span>
            <span style="${t}">${o(s.serviceArea)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Vendor Type:</span>
            <span style="${t}">${o(s.vendorType)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Service Category:</span>
            <span style="${t}">${o(s.serviceCategory)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Team Size:</span>
            <span style="${t}">${o(s.teamSize)}</span>
        </div>
        <div style="${a}">
            <span style="${n}">Experience / Notable Projects:</span>
            <span style="${t}">${o(s.experience)}</span>
        </div>
      `:`
                <div style="${a}">
                    <span style="${n}">Name:</span>
                    <span style="${t}">${o(s.name)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Contact:</span>
                    <span style="${t}">${o(s.contactNo)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Pincode:</span>
                    <span style="${t}">${o(s.pincode)}</span>
                </div>
                 <div style="${a}">
                    <span style="${n}">GST Number:</span>
                    <span style="${t}">${o(s.gstNumber)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Category:</span>
                    <span style="${t}">${o(s.category)}</span>
                </div>
                <div style="${a}">
                    <span style="${n}">Product:</span>
                    <span style="${t}">${o(s.product)}</span>
                </div>
                 ${i}
            `})(s)}
            </div>

            <div style="
                padding: 15px 20px; 
                background-color: #f9f9f9; 
                border-top: 1px solid #ddd; 
                text-align: center; 
                font-size: 12px; 
                color: #555;">
                Submitted on: ${(()=>{let e=new Date;return new Intl.DateTimeFormat("en-IN",{timeZone:"Asia/Kolkata",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).format(e)})()}<br/>
            </div>

            <div style="
                text-align: center; 
                padding: 10px; 
                font-size: 11px; 
                color: #aaa;">
                <em>This email is auto-generated by HeadsupB2B.</em>
            </div>
        </div>
    `,y=()=>n.createTransport({host:"smtp.gmail.com",port:465,secure:!0,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}}),$=async(e,s,a,n)=>{let t=y(),i=l(e),o=await d(i),{name:$,contactNo:c,adsSource:u,source:m}=e.body,v={name:$,contactNo:c,adsSource:u||"Organic Lead",source:m};if("getInTouch"===a){let{email:s,address:a,message:n}=e.body;v={...v,email:s,address:a,message:n}}else if("addWithUs"===a){let{email:s,budget:a,product:n,additionalComments:t}=e.body;v={...v,email:s,budget:a,product:n,additionalComments:t}}else if("sell"===a||"buy"===a){let{category:s,gstNumber:a,product:n,pincode:t}=e.body;v={...v,category:s,gstNumber:a,product:n,pincode:t}}else if("DownloadBrochure"===a){let{name:s,contactNo:a}=e.body;v={...v,name:s,contactNo:a}}else if("loanWithUs"===a){console.log("loanWithUs----",a);let{name:s,email:n,contactNo:t,companyName:i,gstNumber:o,requirement:p}=e.body;console.log("emailData----",v={...v,name:s,email:n,contactNo:t,companyName:i,gstNumber:o,requirement:p})}else if("uploadQuote"===a){let{message:s}=e.body;v={message:s,fileName:e.file?e.file.originalname:null}}else if("vendorOnboarding"===a){let{businessName:s,contactPerson:a,email:n,city:t,serviceArea:i,vendorType:o,serviceCategory:p,teamSize:l,experience:d}=e.body;v={...v,businessName:s,contactPerson:a,email:n,city:t,serviceArea:i,vendorType:o,serviceCategory:p,teamSize:l,experience:d}}try{return"uploadQuote"===a&&e.file?await t.sendMail({from:"info@headsupcorporation.com",to:p(c||null,a),subject:n,html:r(a,v,o),attachments:[{filename:e.file.originalname,content:e.file.buffer,contentType:e.file.mimetype}]}):await t.sendMail({from:"info@headsupcorporation.com",to:p(c,a),subject:n,html:r(a,v,o)}),s.status(200).json({success:"Mail Sent"})}catch(e){return s.status(500).json({error:e.message||e.toString()})}};e.exports={handleUndefined:o,getRecipientList:p,getClientIp:l,getIpInfo:d,createEmailTemplate:r,createTransporter:y,sendEmail:$}},6059:(e,s)=>{var a;Object.defineProperty(s,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},9762:(e,s,a)=>{e.exports=a(145)}};