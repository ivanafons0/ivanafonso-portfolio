import { RevealScroll } from "../RevealScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealScroll>
        <div className="text-black max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 text-center bg-clip-text text-transparent">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-grey-500/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Pomodoro in C</h3>
              <p className="text-gray-600 mb-4">
                A simple Pomodoro timer built with C that works by terminal and stores user data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "Linux Terminal", "User Data"].map((tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/ivanafons0/Pomo"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors my-4"
                >
                  {" "}
                  View Project 🠚{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-grey-500/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Challenge for HackUDC-2025</h3>
              <p className="text-gray-600 mb-4">
                Interface that allows workers from a company search for other workers with required
                skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "CSS", "Python", "HTML", "DataBases"].map((tech, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/gaaelgarciia/gradiant-hackudc25"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors my-4"
                >
                  {" "}
                  View Project 🠚{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealScroll>
    </section>
  );
};
