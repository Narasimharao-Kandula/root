
import "../styles/FooterPage.css"

function FooterPage() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-col footer-brand">
                    <h3>Narasimha Rao</h3>
                    <p className="muted">Frontend Developer · UI / UX enthusiast</p>
                </div>

                <div className="footer-col footer-links">
                    <h4>Quick links</h4>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col footer-contact">
                    <h4>Contact</h4>
                    <address>
                        <a href="mailto:youremail@example.com">youremail@example.com</a>
                        <p className="muted">Open to remote & hybrid roles</p>
                    </address>
                </div>
            </div>

            <div className="container footer-bottom">
                <p className="muted">© 2025 Narasimha Rao · Designed & developed by me</p>
                <p className="muted">Built with ❤️ using HTML, CSS & JavaScript</p>
            </div>
        </footer>
    )
}

export default FooterPage