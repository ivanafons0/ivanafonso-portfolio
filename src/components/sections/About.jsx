import {RevealScroll} from "../RevealScroll"

export const About = () => {

    const skills = [
        "Java",
        "C",
        "C#",
        "Python",
        "JavaScript"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 text-center bg-clip-text text-transparent">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-black/10 border hover:-translate-y-1 transition-all">
                    <p className="text-black mb-6">
                        Passionate developer from Galicia, Spain. Actually studying Computer Engineering at UDC,
                        in the specialization of Software Engineering. I have experience with different technologies,
                        languages and frameworks, including Java, C, C#, Python and JavaScript. I'm always eager to 
                        learn new things and take on new challenges, and I'm excited to continue growing as a developer 
                        and making an impact in the tech industry.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-black text-xl font-bold mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((tech,key) => (
                                    <span 
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition"
                                    key={key}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="text-black p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-black text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Bachelor's Degree in Computer Engineering</strong> - University of A Coruña (UDC), Spain (2022 - Present)
                            </li>
                            <li>
                                <strong>Relevant Coursework</strong> - Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-black text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-black">
                            <div>
                                <h4 className="font-semibold">Internship at XYZ Company (2024-2025)</h4>
                                <p>Developing and maintaining blablabla</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Software Engineer at XYZ Company (2025-present)</h4>
                                <p>Developing and maintaining blablabla</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealScroll>
        </section>
    ); 

};