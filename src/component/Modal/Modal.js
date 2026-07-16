import React, { useState } from 'react';
import UploadQuote from '../UploadQuote';

export default function Modal({ show, setShow, data, title, categoryName, maxHeight }) {
    const [activeTab, setActiveTab] = useState("new"); // "new" or "upload"

    const handleCloseFun = () => {
        setShow('');
    };

    return (
        <div
            id="modal6"
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8 backdrop-filter backdrop-blur-md bg-opacity-12 show overflow-y-auto"
            role="dialog"
            onClick={handleCloseFun}
        >
            <div className="absolute inset-0 bg-slate-900/60"></div>
            
            <div 
                className="relative flex w-full max-w-xs sm:max-w-sm md:max-w-2xl flex-col overflow-hidden rounded-lg sm:rounded-xl bg-white dark:bg-navy-700 my-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Section */}
                <div className="">
                    {/* Title and Close Button */}
                    <div className="flex items-start sm:items-center justify-between gap-2 p-2.5 sm:p-3 pb-1 sm:pb-0">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium dark:text-navy-100 flex-1 break-words">
                            {categoryName ? `Raise a Request for ${categoryName}` : title}
                        </h3>
                        <button
                            className=" rounded-full p-1 focus:bg-slate-300/20 active:bg-slate-300/25 flex-shrink-0 transition-colors"
                            onClick={handleCloseFun}
                            aria-label="Close modal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Tab Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 px-2 sm:px-4 py-2.5 sm:py-3">
                        <button
                            className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all ${
                                activeTab === "new"
                                    ? " shadow-md"
                                    : " bg-slate-200 hover:bg-opacity-90"
                            }`}
                            onClick={() => setActiveTab("new")}
                        >
                            New Quote
                        </button>
                        <button
                            className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all ${
                                activeTab === "upload"
                                    ? " shadow-md"
                                    : " bg-slate-200 hover:bg-opacity-90"
                            }`}
                            onClick={() => setActiveTab("upload")}
                        >
                            Upload Quote
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div
                    className="overflow-y-auto px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-5"
                    style={{ 
                        maxHeight: maxHeight || 'calc(100vh - 200px)',
                        scrollBehavior: 'smooth'
                    }}
                >
                    {activeTab === "upload" ? (
                        <div className="w-full flex justify-center">
                            <UploadQuote autoOpen={true} />
                        </div>
                    ) : (
                        <div className="w-full">
                            {data}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}