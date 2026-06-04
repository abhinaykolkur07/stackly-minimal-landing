import React from "react";

import customerImg from "../assets/customer.png";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const CustomerSection = () => {
  return (
    <section className="w-full bg-[#F5F7FA] py-8">
      <div className="max-w-[1440px] mx-auto px-[144px] flex items-center gap-[78px]">

        {/* Left Image */}
        <div className="w-[326px] h-[326px] flex-shrink-0">
          <img
            src={customerImg}
            alt="Customer"
            className="w-full h-full object-cover rounded-[8px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-8">

          <p className="text-[16px] leading-[24px] font-medium text-[#717171]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
            elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales.
            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
            potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat
            eget. Quisque vulputate odio neque, eget efficitur libero
            condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
            amet magna.
          </p>

          <div>
            <h4 className="text-[20px] leading-[28px] font-semibold text-[#4CAF4F]">
              Tim Smith
            </h4>

            <p className="text-[16px] leading-[24px] font-normal text-[#89939E]">
              British Dragon Boat Racing Association
            </p>
          </div>

          <div className="flex items-center gap-8 flex-wrap">

            <img src={logo1} alt="logo1" className="w-10 h-10 object-contain" />
            <img src={logo2} alt="logo2" className="w-10 h-10 object-contain" />
            <img src={logo3} alt="logo3" className="w-10 h-10 object-contain" />
            <img src={logo4} alt="logo4" className="w-10 h-10 object-contain" />
            <img src={logo5} alt="logo5" className="w-10 h-10 object-contain" />
            <img src={logo6} alt="logo6" className="w-10 h-10 object-contain" />

            <button className="flex items-center gap-2 text-[#4CAF4F] text-[20px] leading-[28px] font-semibold">
              Meet all customers
              <span>→</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomerSection;