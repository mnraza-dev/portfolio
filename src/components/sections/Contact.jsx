import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // service_xiwh1do
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_xiwh1do",
        "template_fhbrubp",
        {
          from_name: form.name,
          to_name: "MNRaza",
          from_email: form.email,
          to_email: "mnraza1907@gmail.com",
          message: form.message,
        },
        "9mmncuC_t6GRai78w"
      );
      toast.success("Email sent successfully !");
      console.log(form);
      
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);

      toast.dark("Something went wrong !");
    }

    formRef.current.reset();
    setLoading(false);
  };
  return (
    <section id="contact" className="c-space my-20 ">
      <div className="w-full textwhite-600 mb-6">
        <h3 className="head-text">Contact Me</h3>
      </div>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {/* <h3 className="head-text ">Contact Me</h3> */}

        <img
          className="mt-0 absolute inset-0 min-h-screen"
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
              cols={40}
              value={form.message}
              name="message"
              placeholder="Message Here"
              onChange={handleChange}
              className="field-input"
              id=""
            ></textarea>

           
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending Message " : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="Arrow Image"
                className="field-btn_arrow"
              />
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;
