import { useState } from "react";
import { RevealScroll } from "../RevealScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Ups! Something went wrong. Please try it again"));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 text-center bg-clip-text text-transparent">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                className="w-full bg-black/5 border border/black/10 rounded px-4 py-3 text-black  transition focus:outline-none focus:border-purple-500 focus:bg-blue-500/5"
                placeholder="Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                className="w-full bg-black/5 border border/black/10 rounded px-4 py-3 text-black  transition focus:outline-none focus:border-purple-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                rows={10}
                value={formData.message}
                className="w-full bg-black/5 border border/black/10 rounded px-4 py-3 text-black  transition focus:outline-none focus:border-purple-500 focus:bg-blue-500/5"
                placeholder="Leave your message here"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(148, 31, 179, 4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealScroll>
    </section>
  );
};
