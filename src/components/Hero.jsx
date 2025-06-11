import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/hero1.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900">
      <div className="flex flex-col-reverse lg:flex-row flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="pb-1 text-4xl sm:text-5xl lg:text-6xl font-thin tracking-tight lg:mt-10">
              Kadees Wardy
            </h1>
            <span className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-pink-300 via-slate-700 to-purple-700 bg-clip-text text-transparent tracking-tight">
              Front End Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-neutral-300">
              {HERO_CONTENT}
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end  lg:mt-0">
          <img
            src={profilepic}
            alt="kadees wardy"
            className="w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
