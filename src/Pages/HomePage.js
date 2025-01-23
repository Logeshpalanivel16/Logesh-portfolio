import Achievements from "../Components/Achievements";
import EducationDetails from "../Components/EducationDetails";
import Hero from "../Components/HeroSection";
import Internship from "../Components/Internship";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

export function HomePage(){
    return(
        <>
                    <section id="home" className="section">

        <Hero />
        </section>
        <section id="education" className="section">


        <EducationDetails />
        </section>

        <Skills />
        <Internship />

        <section id="projects" className="section">

        <Projects />
        </section>
        <Achievements />
        </>
        
    )
}