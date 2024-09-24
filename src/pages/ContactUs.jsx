import React, { useState } from 'react';
import "./ContactUs.css";
const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    const { from_name, subject, message } = formData;
    const toEmail = 'jalaludeenzubair029@gmail.com';
    const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${from_name}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setFormData({
      from_name: '',
      subject: '',
      message: ''
    });
    setLoading(false);
  };
  return (
    <div className="contact-form-container">
      {!loading ? (
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name
            <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} />
          </label>
          <label>Subject
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
          </label>
          <label>Message
            <textarea name="message" id="message" cols={20} value={formData.message} onChange={handleChange} />
          </label>
          <input type="submit" value="Send" />
        </form>
      ) : (
        <p id="send">Sending.... </p>
      )}
    </div>
  );
}
export default ContactUs