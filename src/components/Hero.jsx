import HeroIllustration from "../assets/images/illustration-hero.svg";
import ButtonGetInChrome from "./Buttons/ButtonGetInChrome";
import ButtonGetInFirefox from "./Buttons/ButtonGetInFirefox";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center mt-10 px-4 md:mt-20 md:px-0 relative">
      <div className="relative w-full max-w-[500px]">
        <img
          src={HeroIllustration}
          alt="Hero Illustration"
          className="w-full"
        />
        <div className="absolute -z-10 w-[400px] h-[350px] bg-Blue rounded-full top-10 left-1/2 transform -translate-x-1/2 max-md:w-[300px] max-md:h-[250px]"></div>
      </div>

      <div className="mt-10 md:mt-14 max-w-[600px]">
        <h1 className="text-4xl font-semibold md:text-5xl">
          A Simple Bookmark Manager
        </h1>
        <h2 className="mt-4 text-gray-400 text-base md:text-lg">
          A clean and simple interface to organize your favourite websites.
          <br />
          Open a new browser tab and see your sites load instantly. Try it for
          free.
        </h2>
      </div>

      <div className="mt-8 flex gap-4">
        <ButtonGetInChrome />
        <ButtonGetInFirefox />
      </div>
    </div>
  );
};

export default Hero;
