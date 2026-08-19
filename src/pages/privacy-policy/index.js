import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { NextSeo } from 'next-seo';

const contactLinks = {
  phone1: <a href="tel:+917210199772" className="text-headupb2b font-medium hover:underline">+91 72101 99772</a>,
  phone2: <a href="tel:+919313306060" className="text-headupb2b font-medium hover:underline">+91 93133 06060</a>,
  phone3: <a href="tel:+919911902943" className="text-headupb2b font-medium hover:underline">+91 99119 02943</a>,
  email: <a href="mailto:info@headsupb2b.com" className="text-headupb2b font-medium hover:underline">info@headsupb2b.com</a>,
  linkedin: <a href="https://www.linkedin.com/company/headsupb2b" target="_blank" rel="noopener noreferrer" className="text-headupb2b font-medium hover:underline">LinkedIn</a>,
};

function Index() {
  const { t } = useTranslation();

  const acceptableUseItems = t("privacyTerms.terms.acceptableUseItems", { returnObjects: true }) || [];
  const generalPolicyItems = t("privacyTerms.pricing.generalPolicyItems", { returnObjects: true }) || [];
  const pricingFactors = t("privacyTerms.pricing.factors", { returnObjects: true }) || [];

  return (
    <div className="bg-gray-100 pt-16 pb-10 md:pt-[72px] md:pb-12 lg:pt-[72px] lg:pb-16">
      <NextSeo canonical="https://www.headsupb2b.com/privacy-policy" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
        <section className="mb-12">
          <h1 className="text-3xl font-bold mb-4">{t("privacyTerms.terms.title")}</h1>
          <p className="mb-6">{t("privacyTerms.terms.intro")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.whoCanUseTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.whoCanUseBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.coverageTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.coverageBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.acceptableUseTitle")}</h2>
          <ul className="list-disc list-inside mb-6">
            {Array.isArray(acceptableUseItems) && acceptableUseItems.map((item, i) => (
              <li key={i} className="mb-2">{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.ipTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.ipBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.disclaimerTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.disclaimerBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.liabilityTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.liabilityBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.indemnificationTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.indemnificationBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.termTerminationTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.termTerminationBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.governingLawTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.governingLawBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.generalProvisionsTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.terms.generalProvisionsBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.terms.contactTitle")}</h2>
          <p>
            <Trans
              i18nKey="privacyTerms.terms.contactBody"
              components={contactLinks}
            />
          </p>
        </section>

        <hr className="my-8" />

        <section>
          <h1 className="text-3xl font-bold mb-4">{t("privacyTerms.privacy.title")}</h1>
          <p className="mb-6">{t("privacyTerms.privacy.intro")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.collectTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.privacy.collectBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.useTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.privacy.useBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.sharingTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.privacy.sharingBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.securityTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.privacy.securityBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.choicesTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.privacy.choicesBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.cookiesTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.privacy.cookiesBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.thirdPartyTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.privacy.thirdPartyBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.changesTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.privacy.changesBody")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.privacy.contactTitle")}</h2>
          <p>
            <Trans
              i18nKey="privacyTerms.privacy.contactBody"
              components={contactLinks}
            />
          </p>
        </section>

        <hr className="my-8" />

        <section>
          <h1 className="text-3xl font-bold mb-4">{t("privacyTerms.pricing.title")}</h1>
          <p className="mb-6">{t("privacyTerms.pricing.intro")}</p>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.pricing.generalPolicyTitle")}</h2>
          <ul className="list-disc list-inside mb-6">
            {Array.isArray(generalPolicyItems) && generalPolicyItems.map((item, i) => (
              <li key={i} className="mb-2">{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.pricing.obtainingTitle")}</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">{t("privacyTerms.pricing.obtainingItem1")}</li>
            <li className="mb-2">{t("privacyTerms.pricing.obtainingItem2")}</li>
            <ul className="list-disc list-inside mb-6 ml-6">
              {Array.isArray(pricingFactors) && pricingFactors.map((item, i) => (
                <li key={i} className="mb-2">{item}</li>
              ))}
            </ul>
          </ul>

          <h2 className="text-xl font-bold mb-2">{t("privacyTerms.pricing.revisionsTitle")}</h2>
          <p className="mb-6">{t("privacyTerms.pricing.revisionsBody")}</p>
        </section>
      </div>
    </div>
  );
}

export default Index;
