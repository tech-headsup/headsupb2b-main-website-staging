import { sendEmailToBuy } from "@/Contants/APIEndpoint";
import CommonFormForHome from '../../component/Form/CommonFormForHome'
import GenericForm from "./GenericForm";

const MediaKitCTA = ({ productOptions }) => {
  return (
    <section className="bg-headupb2b text-white px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16 ll:px-16 ll:py-14 rounded-2xl md:rounded-3xl max-w-[1200px] ll:max-w-[1200px] mt-8 md:mt-10 -mx-4 md:mx-auto ll:mx-auto">
      <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-6 md:gap-8 lg:gap-12 ll:gap-16">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 flex flex-col lg:justify-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl ll:text-[52px] font-bold mb-3 md:mb-5 lg:mb-6 ll:mb-8 leading-tight">
            Want high-quality leads without any wasted spend?
          </h2>

          <p className="text-sm md:text-base lg:text-lg ll:text-xl mb-5 md:mb-6 lg:mb-8 leading-relaxed">
           Partner with us to reach procurement heads, project managers and industrial buyers— right where they're already looking.
          </p>

          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-[#80EBF7] p-2.5 md:p-3 rounded-xl flex-shrink-0">
                <img
                  src="/Sponsored articles.png"
                  alt="Sponsored Articles"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg lg:text-xl ll:text-2xl font-bold mb-1 md:mb-2">Sponsored Articles</h3>
                <p className="text-sm md:text-base ll:text-lg leading-relaxed">
                  Earn over a <strong>2-minute</strong> average read time and sustain organic growth.
                </p>
              </div>
            </div>

             <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-[#80EBF7] p-2.5 md:p-3 rounded-xl flex-shrink-0">
                <img
                  src="/Targeted Ads.png"
                  alt="Targeted Ads"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg lg:text-xl ll:text-2xl font-bold mb-1 md:mb-2">
                  Targeted Ads
                </h3>
                <p className="text-sm md:text-base ll:text-lg leading-relaxed">
                   Drive a <strong>96%</strong> engagement rate through precisely segmented campaigns.
                </p>
              </div>
            </div>

            {/* Commented out third option - uncomment and add PNG if needed
            <div className="flex items-start gap-4">
              <div className="bg-green-500 p-3 rounded-xl flex-shrink-0">
                <img
                  src="/custom-proposal-icon.png"
                  alt="Custom Proposal"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Proposal</h3>
                <p className="text-gray-400">
                  Tailored advertising strategy for your specific goals
                </p>
              </div>
            </div>
            */}
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-1/2 bg-white p-4 md:p-5 lg:p-6 ll:p-8 rounded-xl md:rounded-2xl shadow-md text-black">
          <GenericForm productOptions={productOptions}/>
        </div>
      </div>
    </section>
  );
};

export default MediaKitCTA;
//Sponsored articles,Targeted Ads