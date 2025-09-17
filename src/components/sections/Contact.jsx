import React, { useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending message...");
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICEID,
      import.meta.env.VITE_EMAILJS_TEMPLATEID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLICKEY
    )
      .then(
        () => {
          toast.success("Message sent successfully ✅", {
            id: toastId,
            duration: 3000
          });
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong ❌ Please try again!", {
            id: toastId,
            duration: 3000
          });
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        className="mb-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
            <span className="tracking-wider">GET IN TOUCH</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Create{" "}
            </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Have a project in mind? I'm available for freelance work and exciting
            opportunities. Let's turn your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-gray-800/60 backdrop-blur-md border border-gray-800/80 shadow-[0_0_25px_rgba(0,0,0,0.3)] p-6 md:p-8 relative">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 text-sm mb-4">Email</p>
              <a
                href="mailto:noorullahraza07@gmail.com"
                className="text-white text-base font-medium hover:text-emerald-400"
              >
                noorullahraza07@gmail.com
              </a>

              <div className="flex space-x-3 mt-6">
                <a
                  href="https://linkedin.com/in/mnraza19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/80 border border-gray-700 hover:border-teal-500/50 hover:bg-gray-800"
                >
                  <IconBrandLinkedin className="h-8 w-8 text-neutral-300" />
                </a>
                <a
                  href="https://twitter.com/mnraza_codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/80 border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800"
                >
                  <IconBrandX className="h-6 w-6 text-neutral-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-gray-800 shadow-xl p-8 relative">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400">Full Name</label>
                    <input
                      name="name"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-6 py-4 text-white font-medium transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;