import { useEffect, useState } from "react"
import { navLinks } from "../constants"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
<<<<<<< HEAD
            setScrolled(isScrolled)
=======
            setScrolled(true)
>>>>>>> 0d5612c48820fb0fa37c44aea1f13decd5128dee
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div>
            <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
                <div className="inner">
                    <a href="#hero" className="logo">
                        Jeremy | All Black
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    </div>
  )
}

export default Navbar
