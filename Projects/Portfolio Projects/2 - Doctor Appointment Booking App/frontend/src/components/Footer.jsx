import { f_assets } from "../assets/f_assets/assets"

const Footer = () => {
    return (
        <>
            <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm border-b border-gray-400 pb-10">
                <div className="">
                    <img className="w-32 mb-5" src={f_assets.logo} alt="" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit quae impedit. Optio molestiae delectus perspiciatis inventore officiis, vero odit fuga accusantium nemo, iusto magni non provident vel, a cupiditate!</p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5 text-gray-600">COMPANY</p>
                    <ul className="flex flex-col text-gray-600 font-normal gap-2 cursor-pointer">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-gray-600 mb-5 text-lg font-semibold">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-212-456-7890</li>
                        <li>Prescripto@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="pb-4 text-sm text-gray-600 text-center">Copyrights &copy; 2024 Prescripto All Right Reserved </p>
            </div>
        </>
    )
}

export default Footer