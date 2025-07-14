import React from "react";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-800 w-full overflow-hidden text-white "
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          {/**<img src={assets.logo_dark} alt="logo" /> */}
           <p className="text-gray-400">No. 263, 14th cross, 2nd stage, Indiranagar, Bengaluru - 560038</p>
          <p className="text-gray-400">Phone: +91 9448478725</p>
          <p className="text-gray-400">Email: adithyaelectricals1@gmail.com</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              <li className="mb-2">Home</li>
            </a>
            <a href="#About" className="hover:text-white">
              <li className="mb-2">About Us</li>
            </a>
            <a href="#Contact" className="hover:text-white">
              <li className="mb-2">Contact Us</li>
            </a>
            <a href="#" className="hover:text-white">
              <li className="mb-2">Privacy Policy</li>
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Find Us</h3>
            <div className="rounded overflow-hidden shadow-lg pb-5 pr-5">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.99485301308388!2d77.63551308279894!3d12.977118880028678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a3777f8149%3A0x5fac8f5dd7081570!2s263%2C%2014th%20Cross%20Rd%2C%20Stage%202%2C%20Hoysala%20Nagar%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1752493955608!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
