import React from "react";
import pixelgradeImg from "../assets/pixelgrade.png"; // import your image

const PixelgradeSection = () => {
  return (
    <section className="w-full bg-white py-[52px]">
      <div className="max-w-[1440px] mx-auto px-[144px] flex justify-between items-center">
        
        {/* Left Image */}
        <div className="w-[441.53px] h-[328.99px]">
          <img
            src={pixelgradeImg}
            alt="Pixelgrade"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-[661px] flex flex-col gap-8">
          <h2
            className="
              font-inter
              font-semibold
              text-[36px]
              leading-[44px]
              text-[#4D4D4D]
            "
          >
            The unseen of spending three years at Pixelgrade
          </h2>

          <p
            className="
              font-inter
              font-normal
              text-[14px]
              leading-[20px]
              text-[#717171]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem.
          </p>

          <button
            className="
              w-[151px]
              h-[52px]
              rounded-[4px]
              bg-[#4CAF4F]
              text-white
              text-[16px]
              font-medium
              px-8
              py-[14px]
              hover:opacity-90
              transition
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PixelgradeSection;