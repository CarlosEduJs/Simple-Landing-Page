import { useState } from "react";

import SimpleBookMarkingSection from "./Sections/SimpleBookmarkingSection";
import SpeedySearchingSection from "./Sections/SpeedySearchingSection";
import EasySharingSection from "./Sections/EasySharingSection";

const FeatureCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  return (
    <div className="flex flex-col mt-3">
      <div className="border-b">
        <div className="hidden md:flex items-center justify-between">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer p-7 w-[220px] text-center ${
                activeTab === index ? "text-red-500 font-bold" : "hover:text-red-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div
          className="hidden md:block h-[5px] bg-red-500 transition-all duration-300 ease-in-out"
          style={{
            width: "230px",
            transform: `translateX(${activeTab * 265}px)`,
          }}
        ></div>
        <div className="flex flex-col md:hidden">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`relative cursor-pointer p-4 text-center ${
                activeTab === index ? "text-red-500 font-bold" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
              
              {activeTab === index && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-[3px] bg-red-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 0 && <SimpleBookMarkingSection />}
        {activeTab === 1 && <SpeedySearchingSection />}
        {activeTab === 2 && <EasySharingSection />}
      </div>
    </div>
  );
};

export default FeatureCard;
