import { FaRupeeSign } from "react-icons/fa";

export default function LoanBanner() {
  return (
    <div
      className={`bg-[#F84F4F] text-white rounded-lg flex items-center justify-between shadow-md flex-wrap w-full md:w-[500px] px-3 py-1`}
    >
      <div className="flex items-center gap-1">
        <div
          className={`bg-white text-[#F84F4F] rounded-full flex items-center justify-center p-1`}
        >
          <FaRupeeSign
            className={"text-lg font-bold"}
          />
        </div>

        <span
          className={`font-normal overflow-hidden text-ellipsis text-sm ml-3`}
        >
          Avail Collateral Free Credit for upto 61 days now!
        </span>
        <span
          className={`text-white/80 whitespace-nowrap flex-shrink-0 text-[10px] ml-2`}
        >
          *TnC apply
        </span>
      </div>
    </div>

 
  );
}

