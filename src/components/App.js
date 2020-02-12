import React from "react";
import "./css/styles.css"

import Contact from "../components/Contact"

class App extends React.Component {
    render () {
  return (
    <>
    <header>
        <a href="#home" className="logo" data-scroll>Wasim Hamid</a>
        <nav className="nav-collapse">
            <ul>
                <li className="menu-item active"><a href="#home" data-scroll>Home</a></li>
                <li className="menu-item"><a href="#Become-Member" data-scroll>Project Page</a></li>
                <li className="menu-item"><a href="#Movement-Screen" data-scroll>About Me</a></li>
                <li className="menu-item"><a href="#Specialist-Training" data-scroll>Specialist Training</a></li>
                <li className="menu-item"><a href="#Abstract" data-scroll>Abstract</a></li>
                <li className="menu-item"><a href="#Contact" data-scroll>Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section id="home" data-module-id="screen">
            <div className="text-content">
                <p>Playermade is an exclusive training club that specializes in the delivery of sports related training specific to juniors</p>
            </div>
        </section>

        <section id="Become-Member">
            <div className="Member-text">
                <div className="border-box">
                    <h1>SCREEN</h1>
                    <hr />
                    <p>Identify your individual training needs, goals and pathway for future training through our in-house sports related strength and movement screen</p>
                    <div className="vl"></div>
                </div>

                <div className="border-box">
                    <h1>TRAIN</h1>
                    <hr/>
                    <p>Chose the most suited and convenient means of training, whether that be through our weekly small group training system or bespoke 1:1 coaching</p>
                    <div className="vl"></div>
                </div>

                <div className="border-box">
                    <h1>GAME</h1>
                    <hr/>
                    <p>Take all that you have worked on into your game, showing higher levels of performance week in week out</p>
                </div>
            </div>
        </section>

        <section id="Movement-Screen">
            <div className="card">
                <div className="card-text">
                    <h2>Movement Screen</h2>
                    <p> Begin the process of membership by booking your movement screen today. This self-devised assessment, provides us as coaches with invaluable knowledge about a player’s current level of performance and their potential risk and cause
                        of injury. </p>
                    <p> Players, parents and coaches will receive instant feedback regarding the quality and capacity of the players movement, along with any recommendations, advice and next steps regarding future training options.</p>
                    <p> Book Your Screening Now!</p>
                </div>

            </div>
        </section>

        <section id="Specialist-Training">
            <div className="Training-text">
                <p>With performance at the center of everything we do here, there is also an opportunity for individuals or sports teams who wish to access something even more bespoke and personalised to access something even more specific.</p>
                <p>1:1 Training Provides the opportunity for players to focus their training in one or more specific areas:</p>
                <p>&bull; Injury Prevention/Rehabilitation &bull; Speed and Explosiveness &bull; Reactiveness and Agility &bull; Endurance and Fitness</p>
                <p>Skills; areas: &bull; Striking, kicking and punching &bull; Throwing and Bowling &bull; Any football related specific skill</p>
                <h2>Team Training</h2>
                <p>Complement your team training with this professional standard of performance based training. Experience a level of training that is relevant and expected from all major sports clubs around the world.</p>
            </div>
        </section>

        <section id="Abstract">
            <div className="Training-text">
                <p>Sports players need technical, tactical, and physical skills in order to be successful.</p>
                <p>Both team and individulaised training programs have often been seen to focus on the technique and tactics aspects of the sport, at the expense of physical resources and qualities required such as strength, speed agility, power and endurance.</p>
                <p>To maintain fitness and a longstanding participation in sport also requires training to include prevention strategies as well as flexibility and mobility training.</p>
            </div>
        </section>

        <Contact />

    </main>

    <footer className="footer">
        <p>Wasim Hamid 2020</p>
    </footer>
    </>
    );
 }
}

export default App;
