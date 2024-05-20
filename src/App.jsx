import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Navbar } from "./components/Navbar";
import { Owner } from "./components/Owner";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-800 antialiased selction:bg-cyan-300 selection:text-cyan-900">
      <div className="flixed top-0 -z-10 h-full w-full"> </div>
      <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Owner />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
