
import "../styles/ProjectsPage.css"

function ProjectsPage() {
    return (
        <>
            <section id="ProjectsPage" className="projects-section">
                <div className="container">
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-intro">
                        🚧 I’m currently working on projects that showcase my frontend skills. Stay tuned for updates!
                    </p>

                    <div className="projects-grid">
                        <div className="project-card placeholder">
                            <h3>Portfolio Website (In Progress)</h3>
                            <p>
                                A personal portfolio built using HTML, CSS, and JavaScript to showcase my skills.
                            </p>
                        </div>
                        {/* Similary add multiple cards when more projects done */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsPage