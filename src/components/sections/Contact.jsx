import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-20" style={{ opacity: 1 }}>
          <div className="inline-block" style={{ opacity: 1, transform: 'none' }}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
              <span className="tracking-wider">GET IN TOUCH</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ opacity: 1, transform: 'none' }}>
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Let's Create </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed" style={{ opacity: 1, transform: 'none' }}>
            Have a project in mind? I'm available for freelance work and exciting opportunities. Let's turn your ideas
            into reality.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column: Contact Information */}
          <div className="lg:col-span-5 space-y-8" style={{ opacity: 1 }}>
            <div
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-gray-800/60 backdrop-blur-md border border-gray-800/80 shadow-[0_0_25px_rgba(0,0,0,0.3)] transition-all duration-500"
              style={{ opacity: 1, transform: 'none' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-teal-600/3 to-cyan-600/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -top-[250%] -left-[50%] w-[500px] h-[500px] bg-emerald-800/5 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-1000 z-0"></div>
              <div className="absolute -bottom-[200%] -right-[50%] w-[400px] h-[400px] bg-cyan-800/5 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-1000 z-0"></div>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100 ease-out"></div>
              <div className="absolute right-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100 ease-out"></div>
              <div className="p-6 md:p-8 relative z-10">
                <div className="relative mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center">
                    <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                      Contact Information
                    </span>
                  </h3>
                  <div
                    className="h-px w-0 bg-gradient-to-r from-emerald-400/50 via-teal-400/50 to-cyan-400/50 mt-3"
                    style={{ width: '100%' }}></div>
                </div>
                <div className="space-y-2 mt-3">
                  <div
                    className="relative overflow-hidden group/item flex items-start space-x-4 transition-all duration-300 p-3 pl-0 rounded-xl hover:bg-gray-800/40 border border-transparent hover:border-gray-700/40"
                    style={{ transform: 'none' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-900/50 to-emerald-700/10 rounded-xl flex items-center justify-center border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)] group-hover/item:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300">
                      {/* Email SVG */}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-emerald-400 group-hover/item:text-emerald-300 transition-colors duration-300"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-0.5 group-hover/item:text-emerald-400/80 transition-colors duration-300">
                        Email
                      </p>
                      <a
                        href="mailto:noorullahraza07@gmail.com"
                        className="text-white text-base font-medium hover:text-emerald-400 transition-colors duration-300 flex items-center">
                        <span>noorullahraza07@gmail.com</span>
                        <svg
                          className="w-4 h-4 ml-2 opacity-0 group-hover/item:opacity-100 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex space-x-3 pl-4">
                    <a
                      href="https://linkedin.com/in/mnraza1907"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800/80 border border-gray-700 hover:border-teal-500/50 hover:bg-gray-800 transition-all duration-300 group/social">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="text-gray-400 group-hover/social:text-teal-400 transition-colors duration-300"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/noorullahraza1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800/80 border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300 group/social">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-gray-400 group-hover/social:text-cyan-400 transition-colors duration-300"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column: Placeholder for form or other content */}
          <div className="lg:col-span-7" style={{ opacity: 1, transform: 'none' }}>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-gray-800 shadow-xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-cyan-600/5 opacity-50 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                <form className="space-y-6" style={{ opacity: 1 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-sm text-gray-400">Full Name</label>
                      <div className="relative group">
                        <input id="name" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all duration-300" placeholder="John Doe" name="name" />
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-sm text-gray-400">Email Address</label>
                      <div className="relative group">
                        <input id="email" type="email" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all duration-300" placeholder="john@example.com" name="email" />
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
               
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm text-gray-400">Message</label>
                    <div className="relative group">
                      <textarea id="message" name="message" rows={4} className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within:w-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500"></div>
                    </div>
                  </div>
                  <button type="submit" className="w-full relative overflow-hidden group rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-6 py-4 text-white font-medium transition-all duration-300" tabIndex={0} style={{ transform: 'none' }}>
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"></path></svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </form>
              </div>
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-emerald-500/5 blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-cyan-500/5 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
