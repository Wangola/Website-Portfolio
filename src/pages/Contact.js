import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BsTelephone as PhoneIcon } from "react-icons/bs";
import { HiMail as EmailIcon } from "react-icons/hi";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  // Holds temp value for input button
  const [value, setValue] = useState("Send Message");

  // Handles message response and resets button
  const handleReset = () => {
    setValue("Message Sent!");
    setTimeout(() => {
      setValue("Send Message");
    }, 2000);
  };

  // Default email.js format (my ID's)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9guq9wp",
        "template_shiqe7u",
        form.current,
        "2xVuaeTApHYWuW_p_"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clears form/inputs after button is Selected
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>
          Contact Me
          <p>Let's chat! Tell me about your project or concerns.</p>
        </h1>
      </div>

      <div className="right-panel">
        <div className="contact-block">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Name</label>
              <input type="text" name="name" placeholder=" Full Name" />
            </div>

            <div>
              <label>Email</label>
              <input type="email" name="email" placeholder=" Email" />
            </div>

            <div className="button">
              <label>Message</label>
              <textarea name="message" placeholder=" Provide some insight" />
              <input
                className="button"
                type="submit"
                value={value}
                onClick={handleReset}
              />
            </div>

            <hr></hr>
            <h1>
              Contact Information
              <p>
                <PhoneIcon /> 239-537-4897
              </p>
              <p>
                <EmailIcon /> Wangola98@gmail.com
              </p>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
