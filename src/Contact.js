import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { from_name, subject, message } = formData;
    const toEmail = "jalaludeenzubair029@gmail.com";
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${from_name}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setFormData({
      from_name: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-full h-[90vh] flex items-center justify-center transition-colors duration-300 ">
      <form
        onSubmit={sendEmail}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
      >
        <div className="mb-6">
          <label
            htmlFor="from_name"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
          />
        </div>
        <div className="text-center text-base">
          <input
            type="submit"
            value="Send"
            className="w-full px-4 py-2 bg-yellow-600 dark:bg-yellow-500 text-white rounded-md hover:bg-yellow-700 dark:hover:bg-yellow-400 transition-colors duration-300 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
