import { sendEmailToBuy } from "@/Contants/APIEndpoint";
import CommonFormForHome from '../../component/Form/CommonFormForHome'
import GenericForm from "./GenericForm";

const MediaKitCTA = ({ productOptions }) => {
  return (
    <section className="bg-headupb2b text-white px-6 py-16 md:px-10 lg:px-20 rounded-2xl">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left side content */}
        <div className="lg:w-1/2">
          <h2 className="l:text-4xl text-lg md:text-5xl font-bold mb-8 leading-tight">
            Want high-quality leads without any wasted spend?
          </h2>

          <p className="l:text-lg text-base md:text-xl mb-12  leading-relaxed">
           Partner with us to reach procurement heads, project managers and industrial buyers— right where they're already looking.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#80EBF7] p-3 rounded-xl flex-shrink-0">
                <img
                  src="/Sponsored articles.png"
                  alt="Sponsored Articles"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="l:text-xl text-lg font-bold mb-2">Sponsored Articles</h3>
                <p className="">
                  Earn over a <strong>2-minute</strong> average read time and sustain organic growth.
                </p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="bg-[#80EBF7] p-3 rounded-xl flex-shrink-0">
                <img
                  src="/Targeted Ads.png"
                  alt="Targeted Ads"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="l:text-xl text-lg font-bold mb-2">
                  Targeted Ads
                </h3>
                <p className="">
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
        <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-md w-full text-black ">
          <GenericForm productOptions={productOptions}/>
        </div>
      </div>
    </section>
  );
};

export default MediaKitCTA;
//Sponsored articles,Targeted Ads