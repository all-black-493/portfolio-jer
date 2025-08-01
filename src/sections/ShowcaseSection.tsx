import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
<<<<<<< HEAD
=======
import { expCards } from "../constants"
>>>>>>> 0d5612c48820fb0fa37c44aea1f13decd5128dee

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100"
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.inOut" }
        );
    }, [])

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div ref={project1Ref} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>
                                GymBro is a social workout tracking platform that lets users log workouts, connect with friends, compete in challenges, and visually track progress and rankings through interactive leaderboards.
                                Click this link for a preview: <a href="https://fitness-logger-app-pyxr.vercel.app/" className="text-blue-500">GymBro</a>
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with Next JS, Tailwind CSS and Supabase.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library Management Platform" />
                            </div>
                            <h2>Event Management Platform</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>Movies Application. Click the <a href="https://all-black-movies.vercel.app/" className="text-blue-500">Link</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
