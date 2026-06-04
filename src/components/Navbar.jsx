import React from "react";
import Container from "../layouts/Container";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="w-full h-[84px] bg-[#F5F7FA]">
      <Container>
        <div className="h-[84px] flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-[8px]">
            <img
              src={Logo}
              alt="Logo"
              className="w-[35px] h-[24px]"
            />

            <h1 className="text-[24px] font-bold text-[#263238]">
              Nexcent
            </h1>
          </div>

          {/* Menu */}
          <ul className="w-[588px] flex justify-between text-[16px] text-[#18191F]">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>

          {/* Login Section */}
          <div className="flex items-center gap-[14px]">
            <button className="text-[#4CAF4F] text-[14px]">
              Login
            </button>

            <button className="bg-[#4CAF4F] text-white px-[20px] py-[10px] rounded-[6px] text-[14px]">
              Sign up
            </button>
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;