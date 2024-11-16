import illustrationfeaturestab1 from "../../../assets/images/illustration-features-tab-1.svg";

import ButtonMoreInfo from "../../Buttons/ButtonMoreInfo";

const SimpleBookMarkingSection = () => {
  return (
    <div className="flex items-center gap-6 mt-5 max-md:flex-col">
      <div className="flex flex-col">
        <img className="w-[370px]" src={illustrationfeaturestab1} alt="illustration-features-tab-1" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-3xl max-md:text-center">Bookmark in one click</h1>
        <h2 className="text-[16px] text-gray-400">
          Organize you bookmarks however you like. Our <br />
          simple drag-and-drop interface gives you complete <br />
          control over how you manage your favourite sites.
        </h2>
        <ButtonMoreInfo/>
      </div>
    </div>
  );
};

export default SimpleBookMarkingSection;
