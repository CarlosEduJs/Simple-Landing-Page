import illustrationfeaturestab2 from "../../../assets/images/illustration-features-tab-2.svg";

import ButtonMoreInfo from "../../Buttons/ButtonMoreInfo";

const SpeedySearchingSection = () => {
  return (
    <div className="flex items-center gap-6 mt-5 max-md:flex-col">
      <div className="flex flex-col">
        <img className="w-[370px]" src={illustrationfeaturestab2} alt="illustration-features-tab-2" />
      </div>
      <div className="flex flex-col gap-4 max-md:text-center">
        <h1 className="font-semibold text-3xl">Intelligent Search</h1>
        <h2 className="text-[16px] text-gray-400">
            Our power full search feature will help you find saved <br />
            sites in no time at all. No need to trawl through all of <br />
            you bookmarks.
        </h2>
        <ButtonMoreInfo/>
      </div>
    </div>
  );
};

export default SpeedySearchingSection;
