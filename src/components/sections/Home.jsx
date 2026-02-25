import { RevealScroll } from "../RevealScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center realtive">
      <RevealScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right">
            Hi, I'm Iván Afonso Cerdeira
          </h1>
          <p className="text-black text-2xl mb-8 max-w-xl mx-auto">
            I'm a Computer Science student at the University of A Coruña, Spain.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(164, 48, 230)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-black text-black py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(164, 48, 230)]  hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealScroll>
    </section>
  );
};
