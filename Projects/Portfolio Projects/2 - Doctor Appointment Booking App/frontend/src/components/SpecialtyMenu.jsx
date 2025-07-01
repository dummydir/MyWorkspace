import { specialityData } from "../assets/f_assets/assets"
import { Link } from "react-router-dom"


const SpecialtyMenu = () => {
    return (
        <div id="specialty" className="flex flex-col items-center gap-4 pt-16 text-gray-800">
            <h1 className="text-3xl font-medium">Find By Specialty</h1>
            <p className="sm:w-1/3 text-center text-sm">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Tempora, excepturi!</p>
            <div className="grid grid-cols-3 sm:flex sm:justify-center gap-6 pt-5 w-full overflow-scroll">
                {
                    specialityData.map((item, index) => (
                        <Link onClick={() => scrollTo(0, 0)} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" to={`/doctors/${item.speciality}`} key={index}>
                            <img className="w-16 sm:2-24 mb-2" src={item.image} alt="" />
                            <p>{item.speciality}</p>
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

export default SpecialtyMenu