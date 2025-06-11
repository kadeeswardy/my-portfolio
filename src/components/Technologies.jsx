import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const Technology = () => {
  return (
    <div className="border-b border-neutral-500 py-24">
      <h2 className="my-20 text-center text-4xl">Technology</h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-cyan-500 transition-all duration-300">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-cyan-500 transition-all duration-300">
          <TbBrandNextjs className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-cyan-500 transition-all duration-300">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-cyan-500 transition-all duration-300">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
