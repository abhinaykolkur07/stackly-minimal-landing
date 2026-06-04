import React from "react";

import membersIcon from "../assets/members.png";
import clubsIcon from "../assets/clubs.png";
import bookingsIcon from "../assets/bookings.png";
import paymentsIcon from "../assets/payments.png";

const HelpingBusinessSection = () => {
  const members = membersIcon;
  const clubs = clubsIcon;
  const bookings = bookingsIcon;
  const payments = paymentsIcon;

  const stats = [
    {
      icon: members,
      count: "2,245,341",
      label: "Members",
    },
    {
      icon: clubs,
      count: "46,328",
      label: "Clubs",
    },
    {
      icon: bookings,
      count: "828,867",
      label: "Event Bookings",
    },
    {
      icon: payments,
      count: "1,926,436",
      label: "Payments",
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-16">
      <div className="max-w-[1440px] mx-auto px-[144px] flex justify-between items-center">
        
        {/* Left Content */}
        <div className="w-[540px] h-[120px] flex flex-col gap-2">
          <h2 className="text-[36px] leading-[44px] font-semibold text-[#4D4D4D]">
            Helping a local
            <br />
            <span className="text-[#4CAF4F]">
              business reinvent itself
            </span>
          </h2>

          <p className="text-[16px] leading-[24px] font-normal text-[#18191F]">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Stats */}
        <div className="w-[540px] h-[160px] flex flex-col gap-10">
          
          {/* Row 1 */}
          <div className="h-[60px] flex gap-[30px]">
            {stats.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 flex-1"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 object-contain"
                />

                <div>
                  <h3 className="text-[28px] font-bold text-[#4D4D4D]">
                    {item.count}
                  </h3>

                  <p className="text-[14px] text-[#717171]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="h-[60px] flex gap-[30px]">
            {stats.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 flex-1"
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 object-contain"
                />

                <div>
                  <h3 className="text-[28px] font-bold text-[#4D4D4D]">
                    {item.count}
                  </h3>

                  <p className="text-[14px] text-[#717171]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HelpingBusinessSection;