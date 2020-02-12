import React from "react";
import "../css/style.css";

class App extends React.Component {
    render () {
  return (
    <>
      
    <header>
        <a href="#home" class="logo" data-scroll>Playermade</a>
        <nav class="nav-collapse">
            <ul>
                <li class="menu-item active"><a href="#home" data-scroll>Home</a></li>
                <li class="menu-item"><a href="#Become-Member" data-scroll>Become a Member</a></li>
                <li class="menu-item"><a href="#Movement-Screen" data-scroll>Movement Screen</a></li>
                <li class="menu-item"><a href="#Specialist-Training" data-scroll>Specialist Training</a></li>
                <li class="menu-item"><a href="#Abstract" data-scroll>Abstract</a></li>
                <li class="menu-item"><a href="#Contact" data-scroll>Contact Us</a></li>
                <li class="menu-item"><a href="https://user.playermade.co.uk" data-scroll>Login</a></li> 
            </ul>
        </nav>
    </header>

    <main>

        <section id="home" data-module-id="screen">
            <img src="./img/logo.png" class="playermade" />
            <div class="text-content">
                <p>Playermade is an exclusive training club that specializes in the delivery of sports related training specific to juniors</p>
            </div>
        </section>

        <section id="Become-Member">
            <div class="Member-text">
                <div class="border-box">
                    <h1>SCREEN</h1>
                    <hr />
                    <p>Identify your individual training needs, goals and pathway for future training through our in-house sports related strength and movement screen</p>
                    <div class="vl"></div>
                </div>

                <div class="border-box">
                    <h1>TRAIN</h1>
                    <hr/>
                    <p>Chose the most suited and convenient means of training, whether that be through our weekly small group training system or bespoke 1:1 coaching</p>
                    <div class="vl"></div>
                </div>

                <div class="border-box">
                    <h1>GAME</h1>
                    <hr/>
                    <p>Take all that you have worked on into your game, showing higher levels of performance week in week out</p>
                </div>
            </div>
        </section>

        <section id="Movement-Screen">
            <div class="card">
                <div class="card-text">
                    <h2>Movement Screen</h2>
                    <p> Begin the process of membership by booking your movement screen today. This self-devised assessment, provides us as coaches with invaluable knowledge about a player’s current level of performance and their potential risk and cause
                        of injury. </p>
                    <p> Players, parents and coaches will receive instant feedback regarding the quality and capacity of the players movement, along with any recommendations, advice and next steps regarding future training options.</p>
                    <p> Book Your Screening Now!</p>
                    <a href="https://user.playermade.co.uk/signup?productid=19">
                        <button type="button" class="btn btn-success btn-lg">BUY NOW</button>
                    </a>
                </div>

            </div>
        </section>

        <section id="Specialist-Training">
            <div class="Training-text">
                <p>With performance at the center of everything we do here, there is also an opportunity for individuals or sports teams who wish to access something even more bespoke and personalised to access something even more specific.</p>
                <p>1:1 Training Provides the opportunity for players to focus their training in one or more specific areas:</p>
                <p>&bull; Injury Prevention/Rehabilitation &bull; Speed and Explosiveness &bull; Reactiveness and Agility &bull; Endurance and Fitness</p>
                <p>Skills; areas: &bull; Striking, kicking and punching &bull; Throwing and Bowling &bull; Any football related specific skill</p>
                <h2>Team Training</h2>
                <p>Complement your team training with this professional standard of performance based training. Experience a level of training that is relevant and expected from all major sports clubs around the world.</p>
            </div>
        </section>

        <section id="Abstract">
            <div class="Training-text">
                <p>Sports players need technical, tactical, and physical skills in order to be successful.</p>
                <p>Both team and individulaised training programs have often been seen to focus on the technique and tactics aspects of the sport, at the expense of physical resources and qualities required such as strength, speed agility, power and endurance.</p>
                <p>To maintain fitness and a longstanding participation in sport also requires training to include prevention strategies as well as flexibility and mobility training.</p>
            </div>
        </section>

        <section id="Contact">
            <div class="Training-text">
                <h2>Samantha Orton</h2>
                <p>"My daughter is definitely stronger, more confident and fitter since joining Playermade, but most off all she enjoys going and always has a smile on her face after every session." (Blaby & Whetstone and Leicester Ladies - Football)</p>
                <h2>Julie Smith</h2>
                <p>"I have nothing but high praise for Playermade, our daughter has been attending their classes since the summer 2018 and has made new friends, grown in strength, speed and her balance has also improved. England have also noticed a big difference
                    in her strength and movement since she has been attending."(Leicester Ladies and England - Football)</p>
            </div>
        </section>

    </main>

    <footer class="footer">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.4957390967716!2d-1.1213161846456399!3d52.614885036946035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776133a88e00b5%3A0xf97700213bbe7274!2sPlayermade!5e0!3m2!1sen!2suk!4v1579976390244!5m2!1sen!2suk"
            width="100%" frameborder="0" style="border:0;" allowfullscreen="">
    </iframe>
        <p>&copy; Playermade</p>
    </footer>

    <script src="js/fastclick.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/responsive-nav.js"></script>
    <script src="js/fixed-responsive-nav.js"></script>
    </>
    );
 }
}

export default App;
