import React from "react";

import MembershipIcon from "../assets/member.png";
import NationalIcon from "../assets/national.png";
import ClubIcon from "../assets/club.png";

const Community = () => {
  return (
    <section className="w-full py-[24px]">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D]">
            Manage your entire community
            <br />
            in a single system
          </h2>

          <p className="mt-2 text-[16px] leading-[24px] text-[#717171]">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/* Cards */}
        <div className="mt-4 flex justify-center gap-[127px]">

          {/* Card 1 */}
          <div className="w-[299px] h-[260px] rounded-[8px] px-[32px] py-[24px] text-center shadow-sm bg-white">
            <img
              src={MembershipIcon}
              alt=""
              className="mx-auto mb-4"
            />

            <h3 className="text-[28px] font-bold text-[#4D4D4D] leading-[36px]">
              Membership
              <br />
              Organisations
            </h3>

            <p className="mt-2 text-[14px] leading-[20px] text-[#717171]">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[299px] h-[280px] rounded-[8px] px-[32px] py-[24px] text-center shadow-sm bg-white">
            <img
              src={NationalIcon}
              alt=""
              className="mx-auto mb-4"
            />

            <h3 className="text-[28px] font-bold text-[#4D4D4D] leading-[36px]">
              National
              <br />
              Associations
            </h3>

            <p className="mt-2 text-[14px] leading-[20px] text-[#717171]">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[299px] h-[260px] rounded-[8px] px-[32px] py-[24px] text-center shadow-sm bg-white">
            <img
              src={ClubIcon}
              alt=""
              className="mx-auto mb-4"
            />

            <h3 className="text-[28px] font-bold text-[#4D4D4D] leading-[36px]">
              Clubs And
              <br />
              Groups
            </h3>

            <p className="mt-2 text-[14px] leading-[20px] text-[#717171]">
              Our membership management software provides full automation of membership renewals and payments
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Community;