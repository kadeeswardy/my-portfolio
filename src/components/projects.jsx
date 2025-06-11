import { FaExternalLinkAlt } from "react-icons/fa";
import p5 from "../assets/p5.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    link: "https://your-portfolio-link.com",
    image: p5,
  },
  {
    title: "E-commerce Store",
    description: "A simple e-commerce store with product listing and cart functionality.",
    link: "https://your-ecommerce-link.com",
    image: p2,
  },
  {
    title: "E-commerce Store",
 description: "A simple e-commerce store with product listing and cart functionality.",
    link: "https://your-blog-link.com",
    image: p3,
  },
];

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 bg-neutral-950">
      <h1 className="my-16 text-center text-4xl font-bold text-white">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="bg-neutral-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-white">
                {project.title}
              </h2>
              <p className="text-neutral-300 mb-6 flex-1 text-sm">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-auto px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
              >
                View Project <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
