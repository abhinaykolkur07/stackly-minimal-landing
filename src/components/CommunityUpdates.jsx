import React from "react";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const CommunityUpdates = () => {
  const cards = [
    {
      image: blog1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: blog2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: blog3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section className="w-full bg-white py-8">
      {/* Heading */}
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-4">
        <h2 className="text-[36px] leading-[44px] font-semibold text-[#4D4D4D] text-center">
          Caring is the new marketing
        </h2>

        <p className="max-w-[628px] text-[16px] leading-[24px] font-normal text-[#717171] text-center">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the
          community, read about how our community are increasing their
          membership income and lot's more.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-[1440px] mx-auto px-[144px] mt-4 flex justify-center gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[368px] h-[366px] relative flex-shrink-0"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-[368px] h-[286px] rounded-[8px] object-cover"
            />

            {/* Content Card */}
            <div
              className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-0
                w-[317px]
                bg-[#F5F7FA]
                rounded-[8px]
                shadow-[0px_8px_16px_rgba(171,190,209,0.4)]
                px-4
                py-4
                flex
                flex-col
                items-center
                gap-4
              "
            >
              <h3 className="w-[285px] text-[20px] leading-[28px] font-semibold text-[#717171] text-center">
                {card.title}
              </h3>

              <button className="flex items-center gap-2 text-[#4CAF4F] text-[20px] leading-[28px] font-semibold">
                Readmore
                <span className="text-[24px]">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityUpdates;