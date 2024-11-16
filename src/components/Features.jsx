import FeatureCard from "./Features Elements/FeatureCard";

const Features = () => {
  return (
    <div
      className="flex flex-col items-center gap-3 justify-center w-full my-[5rem]"
      id="features"
    >
      <h1 className="font-semibold text-3xl">Features</h1>
      <h2 className="text-[16px] text-gray-400">
        Our main is to make it quick and easy for you to acess your <br />
        favorite websites. You bookmarks sync between you devices <br />
        so you can acess them on the go.
      </h2>
      <FeatureCard />
    </div>
  );
};

export default Features;
