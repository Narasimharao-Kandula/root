
import "../styles/HomePage.css"

function HomePage() {
    return (
        <>
            <section id="HomePage" className="home-section">
                <div className="container">
                    <div className="image">
                        <img src="src/assets/1698920336891-removebg-preview.png" alt="Narasimha" />
                    </div>
                    <div className="intro">
                        <h1>Hi, I'm <span className="highlight">Narasimha Rao</span></h1>
                        <h2>A Passionate <span className="role">Frontend Developer</span></h2>
                        <p>
                            I craft clean, responsive, and interactive web experiences using modern
                            web technologies.
                        </p>
                        <div className="buttons">
                            <a href="#Projects" className="btn primary-btn">View My Work</a>
                            <a href="#Contact" className="btn secondary-btn">Contact Me</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;