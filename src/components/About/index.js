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
                    <p>Identify your individual training needs, goals and pathway for future training through our in-house sports related strength and movement screen</p>
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