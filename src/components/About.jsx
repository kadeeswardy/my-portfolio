import aboutImg from "../assets/hero.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-40 md:w-60 lg:w-72"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg leading-relaxed text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
