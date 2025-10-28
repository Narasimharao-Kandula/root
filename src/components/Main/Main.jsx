

import "../../styles/Main.css"
import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"

function Main() {
    return (
        <>
            <section id="Main">
                < Home />
                < About />
                < Skills />
                < Projects />
                < Contact />
            </section>
        </>
    )
}

export default Main