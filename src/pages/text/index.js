import React from "react";

export default function Test() {
  return (
    <div className="p-10 mt-32">
      <div>This is a test page</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        <div className="bg-green-100 rounded-2xl ">
          <div className="flex justify-evenly">
            <div className="p-3">
              <div>
                <p className="text-center"> Primary TMT </p>
              </div>
              <div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/headsupb2b-v2.appspot.com/o/category%2F1764148780414webpPrimary%20TMT.webp?alt=media"
                  className="w-full  h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-2 gap-4">
              <div>key</div>
              <div>value</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>key</div>
              <div>value</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>key</div>
              <div>value</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>key</div>
              <div>value</div>
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between">
              <div>
                <button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 bg-[#80EBF7] text-[#4A3772] text-[12px] ll:text-[14px] w-10/12 font-bold py-1.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5">
                  Get Instant Quote
                </button>
              </div>
              <div>
                <button class="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 bg-[#80EBF7] text-[#4A3772] text-[12px] ll:text-[14px] w-10/12 font-bold py-1.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5">
                  Get Instant Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100">2</div>
        <div className="bg-gray-100">3</div>
        <div className="bg-gray-100">4</div>
      </div>
    </div>
  );
}
