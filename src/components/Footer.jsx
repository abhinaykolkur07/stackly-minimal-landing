import React from "react";

import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import dribbble from "../assets/dribbble.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import send from "../assets/send.png";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <div className="w-full bg-[#F5F7FA] py-[32px]">
        <div className="max-w-[1440px] mx-auto h-[300px] flex flex-col items-center justify-center gap-[32px]">
          <h2 className="w-[887px] text-[64px] leading-[76px] font-semibold text-[#263238] text-center">
            Pellentesque suscipit fringilla libero eu.
          </h2>

          <button className="h-[52px] px-[32px] py-[14px] rounded-[4px] bg-[#4CAF4F] text-white text-[16px] font-medium flex items-center gap-[8px]">
            Get a Demo
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-[#263238]">
        <div className="max-w-[1440px] mx-auto px-[165px] py-[64px] flex justify-between">

          {/* Company Info */}
          <div className="w-[350px] flex flex-col gap-[40px]">

            {/* Logo + Nexcent */}
            <div className="flex items-center gap-[9.89px]">
              <img
                src={logo}
                alt="Logo"
                className="w-[35px] h-[25px] object-contain"
              />

              <h3 className="text-white text-[25.54px] leading-[25.54px] font-semibold">
                Nexcent
              </h3>
            </div>

            {/* Copyright */}
            <div className="flex flex-col gap-[8px]">
              <p className="text-[14px] leading-[20px] text-[#F5F7FA]">
                Copyright © 2020 Nexcent ltd.
              </p>

              <p className="text-[14px] leading-[20px] text-[#F5F7FA]">
                All rights reserved
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-[16px]">
              <img
                src={instagram}
                alt="Instagram"
                className="w-[32px] h-[32px] cursor-pointer"
              />

              <img
                src={dribbble}
                alt="Dribbble"
                className="w-[32px] h-[32px] cursor-pointer"
              />

              <img
                src={twitter}
                alt="Twitter"
                className="w-[32px] h-[32px] cursor-pointer"
              />

              <img
                src={youtube}
                alt="Youtube"
                className="w-[32px] h-[32px] cursor-pointer"
              />
            </div>
          </div>

          {/* Right Columns */}
          <div className="flex gap-[30px]">

            {/* Company */}
            <div className="w-[160px] h-[200px] flex flex-col gap-[24px]">
              <h3 className="text-[20px] font-semibold text-white">
                Company
              </h3>

              <div className="flex flex-col gap-[12px] text-[#F5F7FA] text-[14px]">
                <p>About us</p>
                <p>Blog</p>
                <p>Contact us</p>
                <p>Pricing</p>
                <p>Testimonials</p>
              </div>
            </div>

            {/* Support */}
            <div className="w-[160px] h-[200px] flex flex-col gap-[24px]">
              <h3 className="text-[20px] font-semibold text-white">
                Support
              </h3>

              <div className="flex flex-col gap-[12px] text-[#F5F7FA] text-[14px]">
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy policy</p>
                <p>Status</p>
              </div>
            </div>

            {/* Stay up to date */}
            <div className="w-[255px] h-[92px] flex flex-col gap-[24px]">
              <h3 className="text-[20px] font-semibold text-white">
                Stay up to date
              </h3>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="
                    w-[255px]
                    h-[40px]
                    bg-[#515B60]
                    rounded-[8px]
                    pl-[16px]
                    pr-[45px]
                    text-white
                    placeholder:text-[#D9DBE1]
                    outline-none
                  "
                />

                <img
                  src={send}
                  alt="Send"
                  className="
                    absolute
                    right-[12px]
                    top-1/2
                    -translate-y-1/2
                    w-[18px]
                    h-[18px]
                    cursor-pointer
                  "
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;