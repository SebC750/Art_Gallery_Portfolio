import Navbar from "./Navbar.jsx"
import "../Styles/About.css"
const About = () => {
    //Started with boilerplate accordion code from Bootstrap docs and then customized it to fit the website's color theme.
    return (
        <div>
            <Navbar />
             
            <div className="container" >
                <div className="about-title" id="top-of-about"> About </div>
                <div class="accordion" id="about-accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question1" aria-expanded="false" aria-controls="question1">
                                Who am i?
                            </button>
                        </h2>
                        <div id="question1" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body"> My name is DeezDijou. I am an a software developer/web developer by day and cartoonist/animator by night. When I'm not too busy, I draw stuff (A lot of Goth stuff in particular) but I can do anything.</div>

                        </div>
                    </div>
                   
                </div>
                <div class="accordion" id="about-accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question2" aria-expanded="false" aria-controls="question2">
                             What is this website?
                            </button>
                        </h2>
                        <div id="question2" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body"> This is my official website for hosting all of my art pieces ever made, from high school to now. It serves as my main channel through which people will see my art.</div>

                        </div>
                    </div>
                   
                </div>
                <div class="accordion" id="about-accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question3" aria-expanded="false" aria-controls="question3">
                             When did you start making art?
                            </button>
                        </h2>
                        <div id="question3" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body"> Since middle school. Started when i first drew my best friend at the time as a south park character on my notebook. Then, I asked my mom soon after if I could get a sketchbook and the rest is history.
I start

                            </div>

                        </div>
                    </div>
                   
                </div>
                <a href="#top-of-about"> <button type="button" className="btn btn-outline-info w-100" style={{marginBottom: 20}}> Back to top</button>  </a>
            </div>



        </div>
    )
}
export default About