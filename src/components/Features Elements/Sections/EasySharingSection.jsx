import illustrationfeaturestab3 from "../../../assets/images/illustration-features-tab-3.svg";

import ButtonMoreInfo from "../../Buttons/ButtonMoreInfo";

const EasySharingSection = () => {
  return (
    <div className="flex items-center gap-6 mt-5 max-md:flex-col">
      <div className="flex flex-col">
        <img className="w-[370px]" src={illustrationfeaturestab3} alt="illustration-features-tab-2" />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h1 className="font-semibold text-3xl">Share your Bookmarkings</h1>
        <h2 className="text-[16px] text-gray-400">
            Easily share your bookmarks and collections with <br />
            others. Create a shareably link that you can send at <br /> 
            the click of a button.
        </h2>
        <ButtonMoreInfo/>
      </div>
    </div>
  );
};

export default EasySharingSection;
