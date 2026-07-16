// const baseURL = "http://45.194.46.98:80/api/";

const baseURL =
  (process.env.NEXT_PUBLIC_BASE_URL || "https://api-dev.headsupb2b.com/api").replace(/\/?$/, "/");

// const baseURL = 'http://localhost:3002/api/'

const crmBaseURL =
  (process.env.NEXT_PUBLIC_CRM_URL || "https://api-crm.headsupb2b.com").replace(/\/?$/, "/") +
  "api/";
 
// const sendEmailToGetInTouch = baseURL + 'sendEmailToGetInTouch'
// const sendEmailToBuy = baseURL + 'sendEmailToBuy'
// const sendEmailToSell = baseURL + 'sendEmailToSell'
// const sendEmailtoGetInTouch = baseURL + 'sendEmailToGetInTouch'

const sendEmailToGetInTouch = "/api/sendEmailToGetInTouch";
const sendEmailToBuy = "/api/sendEmailToBuy";
const sendEmailToSell = "/api/sendEmailToSell";
const adsWithUs = "/api/adsWithUs";
const addWebsiteLead = crmBaseURL + "addWebsiteLead";
const getCategoryPDF = baseURL + "getCategoryPDF";
const downloadBrochure = "api/DownloadBrochure";
const sendVendorOnboarding = "/api/sendVendorOnboarding";

const getCategoryData = baseURL + "categories/slug";
const getAllCategoryData = baseURL + "categories";
const getAllCategoryAndNameData = baseURL + "categories/names-slugs";

const getAllCategoryProductOptionsData = baseURL + "categories/with-products";

const regexBasedProductSearch = baseURL + "categories/products-regex";

// const getAllSubCategories = baseURL + "getAllSubCategories"
// const getSubCategoryBySlug = baseURL + "getSubCategoryBySlug"

const getAllProducts = baseURL + "products";

export {
  sendEmailToBuy,
  sendEmailToSell,
  sendEmailToGetInTouch,
  adsWithUs,
  addWebsiteLead,
  getAllCategoryData,
  getCategoryData,
  getCategoryPDF,
  downloadBrochure,
  getAllProducts,
  getAllCategoryProductOptionsData,
  regexBasedProductSearch,
  getAllCategoryAndNameData,
  sendVendorOnboarding,
};
