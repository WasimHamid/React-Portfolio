import React from "react";


class About extends React.Component {
    render () {
  return (
    <>
        <section id="About-Me">
        <div className="Member-text">
                <div className="border-box">
                    <h1>COLLEGE</h1>
                    <hr />
                    <p>In college, I studied an information technology course - that had some coding involved. I built my first website using HTML, CSS and JavaScript. It didn't look perfect but it was the stepping stone to creating modern looking websites.</p>
                </div>

                <div className="border-box">
                    <h1>BOOTCAMP</h1>
                    <hr/>
                    <p>Chose the most suited and convenient means of training, whether that be through our weekly small group training system or bespoke 1:1 coaching</p>
                </div>

                <div className="border-box">
                    <h1>FREELANCE</h1>
                    <hr/>
                    <p>Take all that you have worked on into your game, showing higher levels of performance week in week out</p>
                </div>
            </div>
        </section>
    </>
    );
 }
}

export default About;
