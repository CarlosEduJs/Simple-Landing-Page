import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import logoBookMark from "../assets/images/logo-bookmark.svg";

import ButtonContactUs from "./Buttons/ButtonContactUs";

const Footer = () => {
  return (
    <div className=" bg-Blue flex flex-col justify-center items-center">
      <div className="flex flex-col py-12">
        <h1 className="text-[10px] text-center font-semibold text-white tracking-[0.5rem]">
          35.000+ ALREADY JOINED
        </h1>
        <h1 className="text-3xl text-white font-bold text-center mt-6">
          Stay up-to-date with what <br /> we´re doing
        </h1>
        <div className="flex items-center gap-3 mt-6  max-md:flex-col">
          <input
            type="text"
            className="bg-white outline-none py-2 px-4 w-[230px] font-normal rounded-md"
            placeholder="Enter your email address"
          />
          <ButtonContactUs />
        </div>
      </div>
      <div className="bg-slate-800 mt-5 py-4 px-[8rem] w-full flex items-center justify-between max-md:flex-col max-md:py-8">
        <div className="flex items-center gap-[5rem] max-md:flex-col max-md:gap-5">
          <img src={logoBookMark} className="brightness-125" />
          <nav>
            <ul className="flex items-center gap-14 max-md:flex-col max-md:gap-6">
              <li>
                <a href="#features" className="hover:text-Red text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-Red text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-Red text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4 max-md:mt-5">
            <img className="cursor-pointer" src={facebookLogo} alt="" />
            <img className="cursor-pointer" src={twitterLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
