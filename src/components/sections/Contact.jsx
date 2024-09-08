import React, { useRef, useState } from "react";
import Button from "../Button";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(form);
    formRef.current.reset();
    setLoading(false);
  };
  return (
    <section className="c-space my-20 ">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
         <h3 className="head-text ">Contact Me</h3>
     
        <img
          className="mt-10 absolute inset-0 min-h-screen"
          src="/assets/terminal.png"
          alt="Terminal Background Image"
        />
        <div className="contact-container ">
          <h3 className="head-text mt-12">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you are looking to a new website, improve your existing
            platform or bring a unique project to life, I am here to help.
          </p>
          <form
            className="mt-12 flex flex-col space-y-7"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <label className="space-y-3" htmlFor="name">
              <span className="field-label">Full Name</span>
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="John Doe"
              required
              onChange={handleChange}
              className="field-input"
              id="name"
            />
            <label className="space-y-3" htmlFor="email">
              <span className="field-label">Email</span>
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="JohnDoe@example.com"
              required
              onChange={handleChange}
              className="field-input"
              id="email"
            />

            <label className="space-y-3" htmlFor="message">
              <span className="field-label">Message</span>
            </label>
            <textarea
            rows={3}
            cols={50}
              value={form.message}
              name="message"
              placeholder="Message"
              onChange={handleChange}
              className="field-input"
              id=""
            ></textarea>
            <Button containerClass={"w-full"} name={"Send Message"} isBeam />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
