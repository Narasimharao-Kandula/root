
import "../styles/SkillsPage.css"

function SkillsPage() {
    return (
        <>
            <section id="SkillsPage" className="skills-section">
                <div className="container">
                    <h2 className="section-title">My Skills</h2>
                    <p className="section-intro">
                        Here are the tools and technologies I use to bring digital ideas to life.
                    </p>

                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Frontend Technologies</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Frameworks & Libraries</h3>
                            <ul>
                                <li>React.js (Intermediate)</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Version Control</h3>
                            <ul>
                                <li>Git & GitHub</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Other Tools</h3>
                            <ul>
                                <li>VS Code</li>
                                <li>Chrome DevTools</li>
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Soft Skills</h3>
                            <ul>
                                <li>Problem Solving</li>
                                <li>Team Collaboration</li>
                                <li>Time Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SkillsPage