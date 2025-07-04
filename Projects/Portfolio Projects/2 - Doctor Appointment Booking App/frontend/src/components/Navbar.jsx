import { NavLink, useNavigate } from "react-router-dom"
import { f_assets } from "../assets/f_assets/assets"
import { useState } from "react"


const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            <img src={f_assets.logo} onClick={() => navigate('/')} className="w-36 cursor-pointer" alt="" />
            <ul className="hidden md:flex items-start gap-5 font-medium uppercase">
                <NavLink to={"/"}>
                    <li className="py-1">home</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to={"/doctors"}>
                    <li className="py-1">All Doctors</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to={"/about"}>
                    <li className="py-1">About</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to={"/contact"}>
                    <li className="py-1">Contact</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {/* we are checking if the token is true or not*/}
                {
                    token ? <div className="flex items-center cursor-pointer gap-2 group relative">
                        <img src={f_assets.profile_pic} className="w-8 rounded-full" alt="" />
                        <img src={f_assets.dropdown_icon} className="w-2.5" alt="" />
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-44 bg-stone-100 rounded flex flex-col gap-2 p-4">
                                <p onClick={(() => navigate("/profile"))} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={(() => navigate("/my-appointments"))} className="hover:text-black cursor-pointer">Appointments</p>
                                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>
                    </div> : <button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
                }
            </div>
        </div>
    )
}

export default Navbar