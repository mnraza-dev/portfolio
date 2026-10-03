import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_edv71wh',
        'template_snkz7dd',
        form.current,
        'y0s_PRp5UXaL55H1c',
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();

          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          alert('Something went wrong.');
        },
      );
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out — I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:border-violet-400/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:border-violet-400/40 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Message</label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project..."
              className="w-full resize-none px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:border-violet-400/40 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors active:scale-95"
          >
            {sent ? 'Message Sent Successfully!' : 'Send Message'}
          </button>
        </form>

        <div className="mt-12 flex items-center gap-4">
          <p className="text-gray-400">noorullahraza007@gmail.com</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText('noorullahraza007@gmail.com');
            }}
            className="px-3 py-1 rounded text-sm text-gray-400 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors"
          >
            Copy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;