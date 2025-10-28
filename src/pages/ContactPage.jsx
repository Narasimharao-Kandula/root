
import "../styles/ContactPage.css"

function ContactPage() {
    return (
        <>
            <section id="ContactPage" className="contact-section">
                <div className="container">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-intro">
                        I’m open to freelance opportunities, collaborations, or tech discussions.
                        Let’s connect!
                    </p>

                    <div className="contact-info">
                        <p><strong>Email:</strong> <a href="mailto:nnarasimharao570@gmail.com">nnarasimharao570@gmail.com</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/Narasimharao-Kandula" target="_blank">github.com/Narasimharao-Kandula</a></p>
                    </div>

                    <form className="contact-form" method="post">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" className="btn primary-btn">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ContactPage