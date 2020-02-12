import React from "react";

class Contact extends React.Component {
    render () {
  return (
    <>
        <section id="Contact">
        <form id="contact" name="contact" method="POST" netlify>
        <h3>Contact Form</h3>
        <br />
      <fieldset>
        <input placeholder="Your Name" name="name" type="text" tabindex="1" required autofocus />
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" name="email" type="email" tabindex="2" required />
      </fieldset>
      <fieldset>
        <input placeholder="Your Phone Number (optional)" name="phone" type="tel" tabindex="3" required />
      </fieldset>
      <fieldset>
        <input placeholder="Your Web Site (optional)" name="url" type="url" tabindex="4" required />
      </fieldset>
      <fieldset>
        <textarea placeholder="Type your message here...." name="message" tabindex="5" required></textarea>
      </fieldset>
      <fieldset>
        <button type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
      </form>
        </section>
    </>
    );
 }
}

export default Contact;
