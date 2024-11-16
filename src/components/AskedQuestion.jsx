import arrow from "../assets/images/icon-arrow.svg"

import ButtonMoreInfo from "./Buttons/ButtonMoreInfo";

const AskedQuestion = () => {
  const askedQuestions = [
    { asked: "What is Bookmark?" },
    { asked: "How can I request a new browser?" },
    { asked: "Is there a mobile app?" },
    { asked: "What about other Chromium browsers?" },
  ];
  return (
    <div className="flex flex-col items-center gap-6 justify-center w-full my-[5rem]">
      <h1 className="font-semibold text-3xl">Frequently Asked Questions</h1>
      <h2 className="text-[16px] text-gray-400 text-center">
        Here are some of our FAQs. If you have any other questions <br />
        you d like answered please feel free to email us.
      </h2>
      <div className="flex flex-col gap-2 w-[400px]">
        {askedQuestions.map((question, index) => (
          <div key={index} className="flex items-center border-b border-t py-5 px-6 justify-between">{question.asked} <img className="w-[15px] cursor-pointer" src={arrow} /></div>
        ))}
      </div>
        <ButtonMoreInfo/>
    </div>
  );
};

export default AskedQuestion;
