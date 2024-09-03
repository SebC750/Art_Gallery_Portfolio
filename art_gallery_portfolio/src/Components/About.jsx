import Navbar from "./Navbar.jsx"
import "../Styles/About.css"
import {Link} from "react-router-dom"
const About = () => {
    //Started with boilerplate accordion code from Bootstrap docs and then customized it to fit the website's color theme.
    return (
        <div>
            <Navbar />

            <div className="container" >
                <div className="about-title" id="top-of-about"> FAQ / About </div>
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



                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question3" aria-expanded="false" aria-controls="question3">
                                When did you start making art?
                            </button>
                        </h2>
                        <div id="question3" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body"> Since middle school. Started when i first drew my best friend at the time as a south park character on my notebook. Then, I asked my mom soon after if I could get a sketchbook and thats where i really began to draw a lot. I would draw mario bros characters and mortal kombat stuff.
                                Around the beginning of 8th grade, I realized if i tried hard enough (and used rulers properly), i could get into an art school. In the middle of that year when we had to search for high schools, I was reading a book of public schools and I came across Art and Design High School of Manhattan. Seemed pretty cool so I haphazardly put together a portfolio and by the grace of [insert god here], I somehow got in.

                            </div>

                        </div>
                    </div>



                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question4" aria-expanded="false" aria-controls="question4">
                                So you went to do art at first but now you're a programmer. How come?
                            </button>
                        </h2>
                        <div id="question4" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body">
                                
                            </div>

                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question5" aria-expanded="false" aria-controls="question5">
                                Thats...a lot of goth art. Whats up with that?
                            </button>
                        </h2>
                        <div id="question5" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body">
                                Luv me Goth rock. Simple as...
                            </div>

                        </div>
                    </div>

                </div>
                <Link to="/"> <button type="button" className="btn btn-outline-info w-100" style={{ marginBottom: 20 }}> Back to homepage</button>  </Link>
            </div>



        </div>
    )
}
export default About