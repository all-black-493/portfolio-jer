import { useRef } from "react"

<<<<<<< HEAD
const GlowCard = ({card, children, index}: {card: { imgPath: string, review: string}, children: React.ReactNode, index: number}) => {

    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
=======
const GlowCard = ({card, children, index}: {card: {title: string, imgPath: string}, children: React.ReactNode, index: number}) => {

    const cardRefs = useRef([]);
    const handleMouseMove = (index)=>(e)=>{
>>>>>>> 0d5612c48820fb0fa37c44aea1f13decd5128dee
        const card = cardRefs.current[index];
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX)*(180/Math.PI);
        angle = (angle+360)%360;

<<<<<<< HEAD
        card.style.setProperty('--start', String(angle + 60))
    }
    return (
    <div ref={el => { cardRefs.current[index] = el; }} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
=======
        card.style.setProperty('--start', angle + 60)
    }
    return (
    <div ref={(el)=>(cardRefs.current[index]=el)} onMouseMove={handleMouseMove(index)} className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
>>>>>>> 0d5612c48820fb0fa37c44aea1f13decd5128dee
        <div className="glow" />
        <div className="flex items-center gap-1 mb-5">
            {Array.from({length:5},(_,i)=>(
                <img src="/images/star.png" key={i} alt="star" className="size-5" />
            ))}
        </div>
        <div className="mb-5">
            <p className="text-white-50 text-lg">
                {card.review}
            </p>
            {children}
        </div>
        
    </div>
  )
}

export default GlowCard
