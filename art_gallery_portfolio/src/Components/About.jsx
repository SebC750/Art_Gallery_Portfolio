import Navbar from "./Navbar.jsx"
import "../Styles/About.css"
import Footer from "./Footer.jsx"
import {Link} from "react-router-dom"
const About = () => {
    //This is the about page. It is where I answer hypothetical questions about myself, why I became an artist and then programmer, and what software I use for drawing art.
    //A container is set which will help to organize the rest of the elements. Inside the container, there is an accordion element which is a section that contains the list of accordion dropdowns. 
    //Each accordion dropdown has an FAQ question and a response to it that is revealed when opening them by clicking on the dropdown icons.  
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
                            <div class="accordion-body"> My name is Sebastian Chalarca (Also known as DeezDijou on the internet). I am an a software developer/web developer by day and cartoonist/animator by night. When I'm not too busy, I draw stuff (A lot of Goth stuff in particular) but I can do anything. I love to code, draw and play video games!</div>
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
                                Around the beginning of 8th grade, I realized if i tried hard enough (and used rulers properly), i could get into an art school. In the middle of that year when we had to search for high schools, I was reading a book of public schools and I came across Art and Design High School of Manhattan. Seemed pretty cool so I haphazardly put together a portfolio and thankfully, I somehow got in. I majored in Animation and gradually refined my craft (still bad but not as bad as it used to be.).

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
                                After completing many animation assignments at A&D, I realized that I only enjoyed art if I felt like doing it. Gradually, the prospect of having to work long hours to draw so many frames for projects that I won't care too much about became less exciting. I decided instead to find something else to do that I can pursue as a career and also find enjoyment in. I pursued programming because stuff like web development and software development still allows me to express my creative side. I'm not giving up on art but rather I am changing my trajectory to something else that can help me do what I love comfortably.
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
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question6" aria-expanded="false" aria-controls="question6">
                                How often do you post?
                            </button>
                        </h2>
                        <div id="question6" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body">
                                I don't have a schedule for when I post art. I just do it whenever I can and want. I can post something tomorrow or five years from now Life gets in the way all the time so this website is probably not going to be updated too often but more will come.
                            </div>

                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question7" aria-expanded="false" aria-controls="question7">
                                Any future plans?
                            </button>
                        </h2>
                        <div id="question7" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body">
                               Currently, I am looking to implement these features in the future following deployment of the first version of this website:
                               <ul>
                                   <li> Admin Dashboard to add in artpieces easily (Will need backend for this, also manually adding data to json files is going to get annoying fast).</li>
                                   <li> Search functionality (If I end up having around 150+ artpieces).</li>
                                   <li> Comment section and like/dislike buttons (Will need backend for this.).</li>
                                   <li> Commission page (Not sure how lucrative my art would be but it wouldn't hurt to get a little extra cash.).</li>
                                   <li> Tags and add search bar for tags.</li>
                                   <li> UI improvements.</li>
                               </ul>
                               This art gallery right now is fairly simple but I will be updating this website when possible (after working on projects or getting off of work.).
                               Stay tuned for more!
                               </div>

                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#question8" aria-expanded="false" aria-controls="question8">
                                What software do you use for your art?
                            </button>
                        </h2>
                        <div id="question8" class="accordion-collapse collapse" data-bs-parent="#about-accordion">
                            <div class="accordion-body">
                                I use an old app called Sony Sketch. Several of these works were made with Autodesk Sketchbook but the vast majority of my work is done on my phone in Sony Sketch. The app is no longer available on the Google play/App store unfortunately. 
                            </div>

                        </div>
                    </div>
                </div>
                <Link to="/"> <button type="button" className="btn btn-outline-info w-100" style={{ marginBottom: 20 }}> Back to homepage</button>  </Link>
            </div>


<Footer/>
        </div>
    )
}
export default About