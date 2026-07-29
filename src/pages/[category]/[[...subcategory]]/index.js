import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { SearchPostsOfPublicationDocument } from "@/generated/graphql";
import request from "graphql-request";

import SEO from "@/Contants/SEO/SEO";
import WhatAreYouLookingFor from "@/component/CTA/WhatAreYouLookingFor";
import FAQs from "@/component/FAQ/FAQs";
import LoadingSpinner from "@/component/Loader/LoadingSpinner";
import {
  getAllCategoryData,
  getAllCategoryProductOptionsData,
  getCategoryData,
  sendEmailToBuy,
} from "@/Contants/APIEndpoint";
import DownloadBrochure from "@/component/DownloadBrochure";
import UploadQuote from "@/component/UploadQuote";
import LoanBanner from "@/component/Form/LoanBanner";
import ProductCardv2 from "@/component/Card/ProductCardv2";
import BundleCarousel from "@/component/Carousel/BundleCarousel";
import CallAndChat from "@/component/CTA/CallAndChat";
import CreditForm from "@/component/Form/CreditForm";
import CommonForm from "@/component/Form/CommonForm";
import ReliableSupplyPartnerCarousel from "@/component/Carousel/ReliableSupplyPartnerCarousel";
import GetInstantQuoteSVG from "@/assets/images/svg/GetInstantQuoteSVG";
import BannerButtons from "@/components/ui/bannerbuttons";
import CommonModal from "@/component/Modal/CommonModal";
import UploadQuoteSVG from "@/assets/images/svg/UploadQuoteSVG";
import DownloadSVG from "@/assets/images/svg/DownloadSVG";
import CustomSearch from "@/component/Form/Search/CustomSearch";
import {
  ExpertConsultationIcon,
  PremiumQualityIcon,
  ComprehensiveRangeIcon,
  RelationshipOfTrustIcon,
} from "@/Contants/WhyChooseUsIcon";

const endpoint = "https://gql.hashnode.com";

export default function CategoryPage({
  contentForSeo,
  categoryData,
  dataOfFilterPost,
  canonicalUrl,
  categoryProductOptions,
  breadcrumbSchema,
  initialSeo,
}) {
  const router = useRouter();
  const [formVisible, setFormVisible] = useState(false);
  const params = useParams();
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");
  const [showUploadQuoteForm, setshowUploadQuoteForm] = useState(false);
  const [showDownloadBrochureForm, setshowDownloadBrochureForm] =
    useState(false);

  // ✅ Ref to scroll categories section into view
  const categorySectionRef = useRef(null);

  const [selectedSubCategory, setSelectedSubCategory] = useState(
    categoryData?.subCategories?.at(0),
  );

  const [seoTitle, setSeoTitle] = useState(initialSeo?.title);
  const [seoDescription, setSeoDescription] = useState(initialSeo?.description);
  const [seoCanonicalUrl, setSeoCanonicalUrl] = useState(canonicalUrl);
  const [seoImage, setSeoImage] = useState(initialSeo?.image);

  const defaultOgImage = "https://www.headsupb2b.com/og-homepage.jpg";

  useEffect(() => {
    if (!router.isReady) return;
    const { subcategory } = router.query;
    const subcategorySlug =
      Array.isArray(subcategory) && subcategory.length > 0
        ? subcategory[0]
        : null;

    if (subcategorySlug && categoryData?.subCategories) {
      const foundSubCategory = categoryData.subCategories.find(
        (subCat) => subCat.slug === subcategorySlug,
      );
      if (foundSubCategory) {
        setSelectedSubCategory(foundSubCategory);
        updateSEO(foundSubCategory);

        // ✅ Scroll categories section into view when visiting a subcategory URL
        setTimeout(() => {
          const el = categorySectionRef.current;
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY + 350; // 80px = navbar height, adjust as needed
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      setSelectedSubCategory(categoryData?.subCategories?.at(0));
      resetSEO();
    }
  }, [router.isReady, router.query, categoryData?.subCategories]);

  const updateSEO = (subCategory) => {
    setSeoTitle(
      subCategory?.metaName
        ? subCategory.metaName
        : `${subCategory?.name} - ${categoryData?.name}`,
    );
    setSeoDescription(
      subCategory?.metaDescription
        ? subCategory.metaDescription
        : subCategory?.description?.slice(0, 160) ||
            `Explore ${subCategory?.name} in ${categoryData?.name}. Quality products and expert solutions.`,
    );
    setSeoCanonicalUrl(
      `https://www.headsupb2b.com/${categoryData?.slug}/${subCategory?.slug}`,
    );
    setSeoImage(
      subCategory?.image?.url || categoryData?.image?.url || defaultOgImage,
    );
  };

  const resetSEO = () => {
    setSeoTitle(
      categoryData?.metaName
        || contentForSeo?.title
        || categoryData?.name,
    );
    setSeoDescription(
      categoryData?.metaDescription
        || contentForSeo?.description
        || `Buy ${categoryData?.name} at best prices from Headsup B2B — trusted B2B supplier of ${categoryData?.name} across India.`,
    );
    setSeoCanonicalUrl(`https://www.headsupb2b.com/${categoryData?.slug}`);
    setSeoImage(categoryData?.image?.url || defaultOgImage);
  };

  const AVAILABLE_BROCHURES = [
    "electrical-solutions",
    "industrial-solutions",
    "metal-solutions",
  ];
  const localBrochureUrl = AVAILABLE_BROCHURES.includes(categoryData?.slug)
    ? `/brochures/${categoryData.slug}.pdf`
    : null;

  const handleNavigate = () => setShow(true);
  const handleClick = () => setSelected(categoryData?.name);
  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    updateSEO(subCategory);
    router.push(`/${categoryData?.slug}/${subCategory?.slug}`, undefined, {
      shallow: true,
    });
  };

  if (router.isFallback) return <LoadingSpinner />;

  const visionText =
    "At Headsup B2B, we supply products that empowers India's infrastructure and its industries. We realise every sector's unique needs and our wide range of products ensures that we deliver the right solution for every project.";

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          key="Breadcrumb"
        />
      </Head>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonicalUrl}
        openGraph={{
          type: "website",
          url: seoCanonicalUrl,
          title: seoTitle,
          description: seoDescription,
          site_name: "Headsup B2B",
          images: [
            {
              url: seoImage || defaultOgImage,
              alt: `${seoTitle} - Headsup B2B`,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@headsupb2b",
          handle: "@headsupb2b",
        }}
      />

      {/* ── Hero Banner ── */}
      <section
        style={{
          backgroundImage: `url(${categoryData?.image?.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="h-full opacity-90 overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #402A6F 0%, #1D0946 59.13%)",
          }}
        >
          <div className="pt-20 md:pt-24 lg:pt-28 xl:pt-[120px] py-8 md:py-12 lg:py-16 xl:py-20 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
            {/* ── Search bar ── */}
            <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-1 text-center mt-4 md:mt-6 lg:mt-8 xl:mt-10">
              <CustomSearch variant="hero" />
            </div>

            {/* Title */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold opacity-1 text-center mt-4 md:mt-6 lg:mt-8 xl:mt-10">
              {categoryData?.title}
            </h1>

            {/* Slogan */}
            <div className="text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-3 md:mt-4 lg:mt-5 px-4">
              {categoryData?.slogan}
            </div>

            {/* Stats */}
            {categoryData?.stats?.length > 0 && (
              <div className="bg-white shadow-3xl rounded-2xl px-4 sm:px-6 md:px-10 lg:px-14 py-4 md:py-5 lg:py-6 mt-6 md:mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
                  {categoryData?.stats?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center w-full sm:w-auto"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A3772]">
                        {item?.value}
                      </div>
                      <div className="mt-1 text-[#4A3772] text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center">
                        {item?.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Loan banner */}
            <button
              onClick={() => setFormVisible(true)}
              className="flex items-center justify-center w-full mt-4 md:mt-5"
            >
              <LoanBanner />
            </button>

            {/* Action buttons */}
            <div className="flex flex-col l:flex-row items-center gap-4 md:gap-6 lg:gap-2 xl:gap-8 justify-center mt-6 md:mt-8 lg:mt-10">
              <BannerButtons
                bg={"bg-white hover:bg-gray-200"}
                icon={<GetInstantQuoteSVG />}
                text="Get Instant Quote"
                onClick={() => {
                  handleNavigate();
                  handleClick();
                }}
              />
              <BannerButtons
                bg={"bg-[#80EBF7] hover:bg-[#6dd9e5]"}
                icon={<UploadQuoteSVG />}
                text="Upload Quote"
                subText={"To Unlock Better Pricing "}
                onClick={() => setshowUploadQuoteForm(true)}
              />
              {localBrochureUrl ? (
                <BannerButtons
                  icon={<DownloadSVG />}
                  text="Download Brochure"
                  bg={"bg-white hover:bg-gray-200"}
                  onClick={() => setshowDownloadBrochureForm(true)}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Categories Section — ref attached here */}
      <section
        ref={categorySectionRef}
        className="secion_V_padding bg-[#D9D9D96B]"
      >
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8">
        <h2 className="section_heading">{`${categoryData?.name}`}</h2>
        {categoryData?.serviceDescriptor?.map((item) => (
          <div
            key={item}
            dangerouslySetInnerHTML={{ __html: item }}
            className={`section_sub_text mt-8 ll:mt-7 break-words ${
              categoryData?.slug === "high-mast-poles"
                ? "[&_p+p]:mt-6 [&_p:empty]:hidden"
                : ""
            }`}
          />
        ))}
         <h2 className="section_heading mt-14">{`Our Products`}</h2>

        <div className="mt-8 ll:mt-[70px] flex flex-wrap gap-2 justify-center">
          {categoryData?.subCategories?.map((item) => {
            const selectedClass =
              selectedSubCategory?.name === item?.name
                ? "bg-[#4A3772] text-white"
                : "bg-[#4A377236] text-[#4A3772]";
            return (
              <button
                key={item?.name}
                onClick={() => handleSubCategoryClick(item)}
                className={`px-7 ll:px-9 py-3 rounded-full text-base ll:text-xl font-semibold hover:bg-[#4A3772] hover:text-white transition-colors ${selectedClass}`}
              >
                <h3 className="inline-block">{item?.name}</h3>
              </button>
            );
          })}
        </div>

        <div className="bg-white flex flex-col px-2 ll:px-10 py-8 pb-20 mt-5 rounded-2xl">
          <div className="w-full flex justify-between items-center">
            <span className="text-base font-semibold capitalize text-gray-800 truncate">
              {`Home > ${categoryData?.name} > ${selectedSubCategory?.name}`}
            </span>
            <span className="text-base hidden sm:inline font-semibold text-gray-600">
              {selectedSubCategory?.products?.length === 1
                ? `1 Product`
                : `${selectedSubCategory?.products?.length || 0} Products`}
            </span>
          </div>
          <hr className="border-b mt-6 border-[#B6B6B6] w-full" />
          <div className="w-full mt-5">
            {categoryData?.subCategories?.map((subCat) => {
              const isVisible = selectedSubCategory?.name === subCat?.name;
              const products = subCat?.products || [];
              return (
                <React.Fragment key={`section-${subCat.name}`}>
                  {products.length > 0 ? (
                    <div
                      className={
                        !isVisible
                          ? "hidden"
                          : "grid grid-cols-1 t:grid-cols-2 l:grid-cols-3 4k:grid-cols-5 gap-2 sm:gap-5"
                      }
                    >
                      {products.map((item) => (
                        <ProductCardv2
                          key={item?.name}
                          product={item}
                          categoryName={categoryData?.name}
                          categoryProductOptions={categoryProductOptions}
                        />
                      ))}
                    </div>
                  ) : (
                    isVisible && (
                      <div className="w-full py-6 sm:py-8 text-center">
                        <p className="text-xs sm:text-sm md:text-base text-gray-500">
                          No products available in {subCat.name}
                        </p>
                      </div>
                    )
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <label className="section_sub_text mt-10">
          Each product and category comes with specifications, varying size
          dimensions, and expert-backed recommendations. So whether you are an
          engineer, contractor or procurement manager - we've got you covered!
        </label>
      </div>
      </section>

      {/* Reliable Supply Partners */}
      <section className="secion_V_padding bg-white">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8">
          <ReliableSupplyPartnerCarousel
            tabText1="Reliable Supply Partners"
            twoRows={false}
            partnerCompanyList={categoryData?.rsp}
            visionText={visionText}
          />
        </div>
      </section>

      {/* Bundles */}
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8">
        <div className="flex flex-col w-full">
          <h2 className="section_heading mt-20 pl-0">Supporting Every Build</h2>
          <p className="section_sub_text w-full mt-5">
            Explore our Customised Bundles, combining all your project needs for
            better rates!
          </p>
        </div>
      </div>
      <section className="secion_V_padding pt-0 bg-white">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8">
          <BundleCarousel bundles={categoryData?.bundles?.bundles} equalSlides={true} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="secion_V_padding bg-[#D9D9D96B]">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8 flex flex-col items-center">
          <h6 className="section_heading">Why Choose Us?</h6>
          <p className="section_sub_text w-full mt-5">
            Choosing the right partner for your projects ensures that you never
            face unnecessary delays or compromises. At Headsup B2B, our focus is
            on supplying more than materials - we focus on solving all of your
            procurement challenges.
          </p>
          <div className="w-full grid grid-cols-1 t:grid-cols-2 l:grid-cols-3 ll:grid-cols-4 4k:grid-cols-4 gap-2 sm:gap-5 justify-items-center mt-5">
            {[
              { icon: <ExpertConsultationIcon />, label: "Expert Consultation" },
              { icon: <PremiumQualityIcon />, label: "Premium Quality Products" },
              { icon: <ComprehensiveRangeIcon />, label: "Comprehensive Range" },
              {
                icon: <RelationshipOfTrustIcon />,
                label: "Relationship of Trust",
              },
            ].map((item) => (
              <span
                key={item.label}
                className="flex flex-col items-center justify-center bg-white border border-[#B6B6B6] w-[273px] ll:w-full h-[218px] rounded-2xl"
              >
                <span className="w-24 h-24">{item.icon}</span>
                <p className="px-16 pt-5 text-center text-[17px] font-bold">
                  {item.label}
                </p>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What are you looking for */}
      <section className="secion_V_padding bg-white">
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8">
          <WhatAreYouLookingFor categoryProductOptions={categoryProductOptions} />
        </div>
      </section>

      {/* Call and Chat */}
      <section className="secion_V_padding pt-0 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <CallAndChat />
      </section>

      {/* FAQ */}
      <section className="secion_V_padding pt-0 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        {categoryData?.faqs?.schemaMarkup && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: categoryData?.faqs?.schemaMarkup,
            }}
            key="FAQ"
          />
        )}
        <FAQs FAQData={categoryData?.faqs?.faqs} />
      </section>

      {/* Modals */}
      {formVisible && (
        <CommonModal
          isOpen={formVisible}
          onClose={() => setFormVisible(false)}
          title={"Want to Avail Collateral Free Credit* for upto 61 Days?"}
          subTitle={"*T&C apply"}
          size="xl"
        >
          <CreditForm close={() => setFormVisible(false)} />
        </CommonModal>
      )}

      {showUploadQuoteForm && (
        <CommonModal
          title={"Have an Existing Product Quote?"}
          subTitle={"Upload Below and Unlock Better Pricing!"}
          isOpen={showUploadQuoteForm}
          onClose={() => setshowUploadQuoteForm(false)}
          size="md"
        >
          <UploadQuote />
        </CommonModal>
      )}

      {show && (
        <CommonModal
          isOpen={show}
          title={`Raise a Request for ${categoryData?.name}`}
          onClose={() => setShow(false)}
          size="xl"
        >
          <CommonForm
            setShow={setShow}
            endPoint={sendEmailToBuy}
            categoryName={categoryData?.name}
            productName={selected}
            categorySlug={categoryData?.slug}
            productSlug={categoryData?.slug}
            categoryProductOptions={categoryProductOptions}
          />
        </CommonModal>
      )}

      {showDownloadBrochureForm && (
        <CommonModal
          isOpen={showDownloadBrochureForm}
          title={`Download Brochure`}
          subTitle={`Please provide your details to download the brochure for ${categoryData?.name}`}
          onClose={() => setshowDownloadBrochureForm(false)}
          size="md"
        >
          <DownloadBrochure
            categoryName={categoryData?.name}
            cataloguePdfURL={localBrochureUrl}
            onClose={() => setshowDownloadBrochureForm(false)}
          />
        </CommonModal>
      )}
    </div>
  );
}

const transformCategoriesResponse = (categories) => {
  return categories?.map((category) => ({
    label: category?.name,
    value: category?.name,
    products: (category?.products || [])?.map((product) => ({
      label: product?.name,
      value: product?.name,
    })),
  }));
};

export async function getStaticPaths() {
  const res = await fetch(getAllCategoryData);
  const allCategories = await res.json();
  const paths = [];
  allCategories?.data?.forEach((category) => {
    paths.push({ params: { category: category?.slug, subcategory: [] } });
    category?.subCategories?.forEach((subCategory) => {
      paths.push({
        params: { category: category?.slug, subcategory: [subCategory?.slug] },
      });
    });
  });
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { category, subcategory } = params;
  const subcategorySlug =
    subcategory && subcategory.length > 0 ? subcategory[0] : null;

  if (category === `&` || !category) return { notFound: true };

  let categoryData;
  try {
    const response = await fetch(getCategoryData + `/${category}`);
    if (!response.ok) return { notFound: true };
    categoryData = await response.json();
    if (
      !categoryData ||
      !categoryData.data ||
      Object.keys(categoryData.data).length === 0
    )
      return { notFound: true };
  } catch (error) {
    console.error("Error fetching category data:", error);
    return { notFound: true };
  }

  if (subcategorySlug && categoryData?.data?.subCategories) {
    const subcategoryExists = categoryData.data.subCategories.some(
      (subCat) => subCat.slug === subcategorySlug,
    );
    if (!subcategoryExists) return { notFound: true };
  }

  let dataOfFilterPost;
  try {
    const data = await request(endpoint, SearchPostsOfPublicationDocument, {
      first: 5,
      filter: {
        query: category === "medical-equipment" ? "medical" : category,
        publicationId: "6641bd538c27052a2f463366",
      },
    });
    dataOfFilterPost = data.searchPostsOfPublication;
  } catch (error) {
    console.warn("Hashnode GraphQL fetch failed (category blog posts skipped)");
    dataOfFilterPost = null;
  }

  const seoContent = SEO?.doc?.find((obj) => obj?.url === category) || null;
  const canonicalUrl = subcategorySlug
    ? `https://www.headsupb2b.com/${category}/${subcategorySlug}`
    : `https://www.headsupb2b.com/${category}`;

  // ✅ FIXED: generateBreadcrumbSchema — only adds position 3 when on a subcategory page
  const generateBreadcrumbSchema = () => {
    const breadcrumbs = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.headsupb2b.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryData.data?.name,
        item: `https://www.headsupb2b.com/${categoryData.data?.slug}`,
      },
    ];

    // ✅ Only add position 3 when visiting a specific subcategory URL
    if (subcategorySlug && categoryData?.data?.subCategories) {
      const activeSubCat = categoryData.data.subCategories.find(
        (subCat) => subCat.slug === subcategorySlug,
      );
      if (activeSubCat) {
        breadcrumbs.push({
          "@type": "ListItem",
          position: 3,
          name: activeSubCat.name,
          item: `https://www.headsupb2b.com/${categoryData.data?.slug}/${activeSubCat.slug}`,
        });
      }
    }

    return {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs,
    };
  };

  let categoryProductOptions = [];
  try {
    const response = await fetch(getAllCategoryProductOptionsData);
    if (response.ok) {
      const categoryProductOptionsData = await response.json();
      categoryProductOptions = transformCategoriesResponse(
        categoryProductOptionsData?.data,
      );
    }
  } catch (error) {
    console.error("Error fetching category product options:", error);
  }

  const activeSubCat =
    subcategorySlug && categoryData?.data?.subCategories
      ? categoryData.data.subCategories.find(
          (subCat) => subCat.slug === subcategorySlug,
        )
      : null;

  const categoryName = categoryData?.data?.name || "";
  const defaultOgImage = "https://www.headsupb2b.com/og-homepage.jpg";
  const initialSeo = activeSubCat
    ? {
        title:
          activeSubCat?.metaName
          || `${activeSubCat?.name} - ${categoryName}`,
        description:
          activeSubCat?.metaDescription
          || activeSubCat?.description?.slice(0, 160)
          || `Explore ${activeSubCat?.name} in ${categoryName}. Quality products and expert solutions from Headsup B2B.`,
        image:
          activeSubCat?.image?.url
          || categoryData?.data?.image?.url
          || defaultOgImage,
      }
    : {
        title:
          categoryData?.data?.metaName
          || seoContent?.title
          || categoryName,
        description:
          categoryData?.data?.metaDescription
          || seoContent?.description
          || `Buy ${categoryName} at best prices from Headsup B2B — trusted B2B supplier of ${categoryName} across India.`,
        image: categoryData?.data?.image?.url || defaultOgImage,
      };

  return {
    props: {
      categoryData: categoryData.data,
      contentForSeo: seoContent,
      dataOfFilterPost: dataOfFilterPost || null,
      canonicalUrl,
      categoryProductOptions,
      breadcrumbSchema: generateBreadcrumbSchema(),
      initialSeo,
    },
    revalidate: 300,
  };
}
