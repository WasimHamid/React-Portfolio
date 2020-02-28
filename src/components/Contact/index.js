import React from "react";

class Contact extends React.Component {
    render () {
  return (
    <>
        <section id="Contact">
             <div class="contact-text">
                <a
                    href="http://linkedin.com/in/wasim-hamid-a4858b185"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a
                    href="https://github.com/WasimHamid"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <a
                    href="mailto: wasim.hamid45@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i class="fa fa-envelope-square" aria-hidden="true"></i>
                </a>
                <a
                    href="tel:07599001781"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                </a>
            </div>
        </section>
    </>
    );
 }
}

export default Contact;
