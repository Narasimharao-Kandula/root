

import { useEffect, useState } from "react";

function HeaderPage() {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        } catch (e) { return 'light' }
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        try { localStorage.setItem('theme', theme) } catch (e) { }
    }, [theme])

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

    return (
        <section className="headerSection">
            <div className="brandName">
                <span>N</span>arasimha
            </div>

            <nav aria-label="Primary Navigation">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>

            <div className="header-actions">
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-pressed={theme === 'dark'}
                    aria-label="Toggle color theme"
                    title="Toggle theme"
                >
                    {theme === 'dark' ? '🌙' : '☀️'}
                </button>
            </div>
        </section>
    )
}

export default HeaderPage