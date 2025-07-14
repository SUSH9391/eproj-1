import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          toast.success("Thanks for your submission!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Something went wrong. Please try again.");
          console.error(error);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="bg-gray-50 px-6 py-20 sm:px-12 lg:px-32">
      <Toaster position="top-center" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
        Request a <span className="underline decoration-blue-500">Quote</span>
      </h1>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto text-center">
        Ready to get started? Fill out the form below and we’ll get back to you
        with a quote.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto text-left text-gray-700 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="tel"
              name="phone"
              placeholder="+91 123 456 7890"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Service Type</label>
            <select
              className="w-full border border-gray-300 rounded-lg py-3 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="service"
              required
            >
              <option value="">Select a service</option>
              <option value="web-design">Home Automation</option>
              <option value="development">Commercial Services</option>
              <option value="marketing">
                Industrial Wiring with Detailed Diagrams
              </option>
              <option value="consulting">
                Lightning Arrester Installation
              </option>
              <option value="consulting">
                11kv- HT Transformer Installation
              </option>
              <option value="consulting">
                Electrical Inspectorate Services
              </option>
              <option value="consulting">BESCOM Power Sanction Services</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Project Details</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg py-3 px-4 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="details"
            placeholder="Tell us more about your project..."
            required
          ></textarea>
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={sending}
            className={`${
              sending
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md`}
          >
            {sending ? "Sending..." : "Get a Quote"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
