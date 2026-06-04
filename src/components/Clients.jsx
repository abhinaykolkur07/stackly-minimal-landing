import React from "react";

import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Logo6 from "../assets/logo6.png";
import Logo7 from "../assets/logo7.png";

const Clients = () => {
  return (
    <section className="w-full py-[40px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[144px]">

        {/* Section Title */}
        <div className="w-[1110px] mx-auto text-center">
          <h2 className="text-[36px] leading-[44px] font-semibold text-[#4D4D4D]">
            Our Clients
          </h2>

          <p className="mt-2 text-[16px] leading-[24px] font-normal text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Client Logos */}
       <div className="w-full mt-8">
  <div className="max-w-[1152px] mx-auto flex justify-between items-center">
    <img src={Logo1} alt="client" className="w-auto h-auto" />
    <img src={Logo2} alt="client" className="w-auto h-auto" />
    <img src={Logo3} alt="client" className="w-auto h-auto" />
    <img src={Logo4} alt="client" className="w-auto h-auto" />
    <img src={Logo5} alt="client" className="w-auto h-auto" />
    <img src={Logo6} alt="client" className="w-auto h-auto" />
    <img src={Logo7} alt="client" className="w-auto h-auto" />
  </div>
</div>

      </div>
    </section>
  );
};

export default Clients;