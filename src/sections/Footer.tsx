import { socialImgs } from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center md:items-start items-center">
                <a href="/">Visit My Blog</a>
            </div>
            <div className="socials">
                {socialImgs.map((img)=>(
                    <a className="icon" target="_blank" href={img.name} key={img.name}>
                        <img src={img.imgPath} alt="" />
                    </a>
                ))}
            </div>

            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end">
                    ©{new Date().getFullYear()} Jeremy | All Black. All Rights Reserved.  
                    <br />
                    Built with React, ThreeJS and Tailwind CSS.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
