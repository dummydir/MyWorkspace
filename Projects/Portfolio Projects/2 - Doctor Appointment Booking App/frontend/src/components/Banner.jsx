import { useNavigate } from "react-router-dom"
import { f_assets } from "../assets/f_assets/assets"

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className="bg-primary flex rounded-lg px-6 sm:px-10 ms:px-14 lg:px-12 my-20 md:mx-10">
            {/* left side */}
            <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
                <h1 className="text-xl sm:text-2xl leading-tight sm:leading-tight text-white md:text-3xl lg:text-5xl font-semibold">Book Appointment <br />
                    With 100+ Trusted Doctors</h1>
                <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-gray-500 sm:text-base text-center text-sm px-8 py-2 rounded-full mt-6 hover:scale-105 transition-all duration-200'>Create Account</button>
            </div>
            {/* right side */}
            <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                <img className="w-full absolute bottom-0 right-0 max-w-md" src={f_assets.appointment_img} alt="" />
            </div>
        </div >
    )
}

export default Banner