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
                    <h1>FREELANCE</h1> 
                    <p>I got offered an opportunity to build a website for a small company. It was a great experience to deal with a client and create a custom built website for them. I also learned domain management - to use the client's domain .co.uk with my newly created website.</p>
                </div>

                <div className="border-box">
                    <h1>APPRENTICESHIP</h1>
                    <p>I hope to do an apprenticeship on software engineering, I am ready to take my experience to a higher level and tackle big team-based projects. I want to learn and improve my current set of skills and increase my knowledge of HTML,CSS + JavaScript.</p>
                </div>
            </div>
        </section>
    </>
    );
 }
}

export default About;
