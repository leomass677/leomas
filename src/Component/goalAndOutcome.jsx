import React from "react";
const goalAndOutcome = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-9 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20 md:px-6 lg:px-10 xl:px-20 w-full">
      <div className="bg-dark rounded-md p-6 sm:p-8 lg:p-10 mb-14 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#878789] mb-3">
            My Goal
          </p>
          <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.72]">
            To design a Web App experience for businesses to accept global
            payments from customers easily and seamlessly.
          </p>
        </div>
        <div className="">
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#878789] mb-3">
            Outcome
          </p>
          <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.72]">
            Designed and launched the first version of Bani Web and SDK, serving
            over 300,000 businesses and customers globally. Bani successfully
            processed over 100k transactions and a total of 293M Naira (GBP
            532k) in total transaction volume over three months.
          </p>
        </div>
      </div>
    </div>
  );
};

export default goalAndOutcome;
