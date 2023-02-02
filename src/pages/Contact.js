import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

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
    <div>
      <form className="" ref={form} onSubmit={sendEmail}>
        <label>Subject</label>
        <input type="subject" name="subject" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
