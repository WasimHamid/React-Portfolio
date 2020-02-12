import React from "react";
import "./css/styles.css"

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

        <section id="Contact">
            <div className="Training-text">
                <h2>Samantha Orton</h2>
                <p>"My daughter is definitely stronger, more confident and fitter since joining Playermade, but most off all she enjoys going and always has a smile on her face after every session." (Blaby & Whetstone and Leicester Ladies - Football)</p>
                <h2>Julie Smith</h2>
                <p>"I have nothing but high praise for Playermade, our daughter has been attending their classNamees since the summer 2018 and has made new friends, grown in strength, speed and her balance has also improved. England have also noticed a big difference
                    in her strength and movement since she has been attending."(Leicester Ladies and England - Football)</p>
            </div>
        </section>

    </main>

    <footer className="footer">
        <p>Wasim Hamid 2020</p>
    </footer>
    </>
    );
 }
}

export default App;
