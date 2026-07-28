const BannerButtons = ({ icon, text, onClick, bg, subText, ...props }) => {
    return (
        <div className={`opacity-1 w-full md:w-auto ${bg ? bg : "bg-[#80EBF7]"} rounded-full px-4 sm:px-5 md:px-6 lg:px-4 xl:px-6 py-2.5 sm:py-3 md:py-3 hover:shadow-xl transition-all duration-200 flex items-center justify-center h-14 sm:h-15 md:h-16`}
        {...props}
        >
            <button onClick={onClick} className="w-full">
                <div className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-2 xl:gap-x-4 justify-center px-2 sm:px-3 md:px-5 lg:px-2 xl:px-5">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 flex items-center justify-center flex-shrink-0">
                        {icon}
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="text-[#4A3772] font-semibold text-sm sm:text-base md:text-lg lg:text-base xl:text-xl whitespace-nowrap">
                            {text}
                        </div>
                        {subText && (
                            <div className="text-[#4A3772] text-xs sm:text-sm font-normal whitespace-nowrap">
                                {subText}
                            </div>
                        )}
                    </div>
                </div>
            </button>
        </div>
    )
}

export default BannerButtons