import React from "react";
import { Assets } from "../assets/Assets";

const Footer = () => {
  return (
    <div className="bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <div className="flex gap-1">
            <img src="/logo2.png" alt="logo" className="mb-4 h-8 md:h=90" />
            <h1 className=" font-bold font-playfair py-2 text-black text-lg">Wander <span className="text-red-600 font-playfair font-bold text-lg">Nest</span></h1>
          </div>

          <p className="text-sm">
            Discover the world's most extraordinary places to stay, from hotels to luxury villas and private resorts.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/*Instagram*/}
            <img src={Assets.instagramIcon} alt="instagramIcon" className="w-6" />
            {/*Facebook*/}
            <img src={Assets.facebookIcon} alt="facebookIcon" className="w-6" />
            {/*Twitter*/}
            <img src={Assets.twitterIcon} alt="twitterIcon" className="w-6" />
            {/*Linkedin*/}
            <img src={Assets.linkedinIcon} alt="linkedinIcon" className="w-6" />
          </div>
        </div>

        <div>
          <p className="font-playfair text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div>
          <p className="font-playfair text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Options</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
        <div className="max-w-80">
          <p className=" font-playfair text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">Subscribe to our NewsLetter for special offers.</p>

          <div className="flex items-center mt-4">
            <input type="text" className="bg-white rounded-1 border border-gray-300 h-9 px-3 outline-none" placeholder="Your Email" />
            <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square  rounded-r">
              <img src={Assets.arrowIcon} alt="arrowIcon" className="w-3.5 invert" />
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>@{new Date().getFullYear()}WanderNest.All Rights Reserved</p>
        <ul className="flex items-center gap-4">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">SiteMap</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
