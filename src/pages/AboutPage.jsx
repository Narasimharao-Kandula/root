
import "../styles/AboutPage.css"

function AboutPage() {
    return (
        <>
            <section id="AboutPage" className="about-section">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        I'm <strong>Narasimha Rao</strong>, a self-taught frontend developer
                        dedicated to designing and building dynamic, user-friendly websites. I
                        focus on creating seamless user experiences and writing clean, efficient
                        code that transforms ideas into impactful digital solutions.
                    </p>
                    <div className="values">
                        <div className="value-card">
                            <h3>✨ Clean Design</h3>
                            <p>I believe simplicity and clarity create the strongest impact.</p>
                        </div>
                        <div className="value-card">
                            <h3>⚙️ Performance</h3>
                            <p>Every project I build is optimized for speed and smooth interaction.</p>
                        </div>
                        <div className="value-card">
                            <h3>💡 Continuous Learning</h3>
                            <p>
                                I constantly upgrade my skills with new technologies and frameworks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage