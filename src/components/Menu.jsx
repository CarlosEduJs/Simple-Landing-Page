import logoBookMark from "../assets/images/logo-bookmark.svg";
import closeIcon from "../assets/images/icon-close.svg";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";

export default function Menu({ showMenu, onClose }) {
  const options = [
    { optName: "FEATURES" },
    { optName: "PRICING" },
    { optName: "CONTACT" },
  ];
  return (
    showMenu && (
      <div className="flex fixed z-10 flex-col h-screen w-screen bg-slate-900/95 p-7">
        <div className="flex items-center justify-between">
          <img
            className="w-[120px]  brightness-200"
            src={logoBookMark}
            alt="bookmark"
          />
          <img
          onClick={onClose}
            className="w-[20px] cursor-pointer"
            src={closeIcon}
            alt="bookmark"
          />
        </div>
        <div className="flex flex-col my-3">
          {options.map((opt, index) => (
            <div
              key={index}
              className="p-3 w-full flex items-center justify-center border-t border-b border-slate-800 cursor-pointer"
            >
              <h1 className="text-white text-xl font-light">{opt.optName}</h1>
            </div>
          ))}
        </div>
        <button className="border text-white p-2 rounded-lg">LOGIN</button>
        <div className="flex items-center gap-4 mt-auto">
          <img className="cursor-pointer" src={facebookLogo} alt="" />
          <img className="cursor-pointer" src={twitterLogo} alt="" />
        </div>
      </div>
    )
  );
}
