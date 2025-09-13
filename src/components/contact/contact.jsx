import React from 'react';
import './Contact.css';

const Contact = ({ info }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "28e93a0f-0e71-4e61-b6f5-8b78c707dab7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Form submitted successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage("Failed to send message. Please check your internet connection.");
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-header">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
          </div>
          <div className="contact-info">
            {info.contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
                <div className="contact-details">
                  <p className="contact-label">{item.label}</p>
                  <p className="contact-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-textarea"
              rows="6"
              required
            ></textarea>
            <button type="submit" className="form-button" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {message && (
              <p className={`form-message ${message.toLowerCase().includes('success') ? 'success' : 'error'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
