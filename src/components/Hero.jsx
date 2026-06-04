import React from "react";
import Container from "../layouts/Container";
import HeroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-[#F5F7FA] py-[96px]">
      <Container>

        <div className="flex items-center justify-between">

          <div className="max-w-[657px]">

            <h1 className="text-[64px] font-bold leading-[76px] text-[#4D4D4D]">
              Lessons and insights
            </h1>

            <h1 className="text-[64px] font-bold leading-[76px] text-[#4CAF4F]">
              from 8 years
            </h1>

            <p className="mt-4 text-[#717171]">
              Where to grow your business as a photographer:
              site or social media?
            </p>

            <button className="mt-8 bg-[#4CAF4F] text-white px-8 py-4 rounded">
              Register
            </button>

          </div>

          <div>
            <img
              src={HeroImage}
              alt=""
              className="w-[391px]"
            />
          </div>

        </div>

      </Container>
    </section>
  );
};

export default Hero;