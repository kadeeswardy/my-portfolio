import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from"./components/projects.jsx";
import Contact from"./components/Contact.jsx";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900 selection:text-cyan-300">
      {/* Background */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
