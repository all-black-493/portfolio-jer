import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="What People Say About Me"
            sub="⭐ Client Feedback Highlights" />
            <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
<<<<<<< HEAD
                {testimonials.map((testimonial, index) => (
                    <GlowCard card={testimonial} index={index}>
=======
                {testimonials.map((testimonial)=>(
                    <GlowCard card={testimonial}>
>>>>>>> 0d5612c48820fb0fa37c44aea1f13decd5128dee
                        <div className="flex items-center gap-3">
                            <div>
                                <img src={testimonial.imgPath} alt={testimonial.name} />
                            </div>
                            <div>
                                <p className="font-bold">
                                    {testimonial.name}
                                </p>
                                <p className="text-white-50">
                                    {testimonial.mentions}
                                </p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials
