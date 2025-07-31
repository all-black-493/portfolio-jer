import { logoIconsList } from '../constants'

type LogoIconType = {
    imgPath: string;
    name?: string;
};

const LogoIcon = ({ icon }: { icon: LogoIconType }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt="company-logo" className="w-55 h-10 md:w-40 md:h-10" />
        </div>
    )
}

const LogoSection = () => {
    return (
        <div className='md:my-20 my-10 relative'>
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-box md:gap-6 gap-12">
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={index} icon={icon} />
                    ))}
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon key={index} icon={icon} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default LogoSection
