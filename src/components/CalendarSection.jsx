import React from "react";
import calendarImg from "../assets/calendar.png";

const CalendarSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] h-[433px] mx-auto flex items-center justify-between">
        
        {/* Left Image */}
        <div className="w-[441.53px] h-[433.4px]">
          <img
            src={calendarImg}
            alt="Calendar"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-[661px] h-[308px] flex flex-col gap-8">
          
          <h2
            className="
              text-[36px]
              leading-[44px]
              font-semibold
              text-[#4D4D4D]
            "
          >
            How to design your site footer like we did
          </h2>

          <p
            className="
              text-[14px]
              leading-[20px]
              font-normal
              text-[#717171]
            "
          >
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>

          <button
            className="
              w-[151px]
              h-[52px]
              rounded-[4px]
              bg-[#4CAF4F]
              text-white
              px-[32px]
              py-[14px]
              text-[16px]
              font-medium
            "
          >
            Learn More
          </button>

        </div>
      </div>
    </section>
  );
};

export default CalendarSection;