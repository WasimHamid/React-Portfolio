import React from "react";


class About extends React.Component {
    render () {
  return (
    <>
        <section id="About-Me">
        <div className="Member-text">
                <div className="border-box">
                    <h1>COLLEGE</h1>
                    <p>In college, I studied an information technology course - that had some coding involved. I built my first website using HTML, CSS and JavaScript. It didn't look perfect but it was the stepping stone to creating modern looking websites.</p>
                </div>

                <div className="border-box">
                    <h1>BOOTCAMP</h1>
                    <p>After trying to get into coding via apprenticeships, I ended up applying for the SchoolOfCode, I was excited to be a part of the bootcamp. I was unaware that there were many different approaches to building websites like using ReactJS.</p>
                </div>

                <div className="border-box">
                    <h1>FREELANCE</h1> 
                    <p>I got offered an opportunity to build a website for a small company. It was a great experience to deal with a client and create a custom built website for them. I also learned domain management - to use the client's domain .co.uk with my newly created website.</p>
                </div>
            </div>
        </section>
    </>
    );
 }
}

export default About;
