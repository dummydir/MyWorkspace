import { f_assets } from "../assets/f_assets/assets"

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
            {/* left side */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
                    Book Appointments <br /> With trusted Doctors
                </p>
                <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                    <img className="w-28" src={f_assets.group_profiles} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur <br className="hidden sm:block" /> adipisicing elit.</p>
                </div>
                <a className="flex gap-2 items-center text-gray-600 m-auto text-sm md:m-0 bg-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300" href="#specialty">Book Appointment <img className="w-3" src={f_assets.arrow_icon} alt="" /></a>
            </div>
            {/* right side */}
            <div className="md:w-1/2 relative">
                <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={f_assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header   