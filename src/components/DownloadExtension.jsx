import ChromeLogo from "../assets/images/logo-chrome.svg";
import FirefoxLogo from "../assets/images/logo-firefox.svg";
import OperaLogo from "../assets/images/logo-opera.svg";

import ButtonAddExtension from "./Buttons/ButtonAddExtension";

const DownloadExtension = () => {
  const cardsDetails = [
    { nameExtension: "Chrome", logo: ChromeLogo, version: "62", mt: "mt-0" },
    { nameExtension: "Firefox", logo: FirefoxLogo, version: "55", mt: "mt-12" },
    { nameExtension: "Opera", logo: OperaLogo, version: "46", mt: "mt-[6rem]" },
  ];

  return (
    <div
      className="flex flex-col items-center gap-6 justify-center w-full my-[5rem]"
      id="extensions"
    >
      <h1 className="font-semibold text-3xl">Download the Extension</h1>
      <h2 className="text-[16px] text-gray-400 text-center">
        We’ve got more browsers in the pipeline. Please do let us know if <br />
        you’ve got a favourite you’d like us to prioritize.
      </h2>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-5">
        {cardsDetails.map((card) => (
          <div
            key={card.nameExtension}
            className={`flex flex-col rounded-md max-h-[270px] shadow-[0px_5px_43px_0px_#cbd5e0] ${card.mt}`}
          >
            <div className="flex flex-col px-7 py-8 items-center justify-center gap-4 border-b-2 border-dotted border-gray-200">
              <img
                className="w-[70px]"
                src={card.logo}
                alt={`logo-${card.nameExtension}`}
              />
              <h1 className="font-semibold text-1xl">
                Add to {card.nameExtension}
              </h1>
              <h2 className="text-[12px] text-gray-400">
                Minimum version {card.version}
              </h2>
            </div>

            <div className="flex p-3">
              <ButtonAddExtension />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadExtension;
