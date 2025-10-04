import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav className="menu-nav w-[375px] md:w-[40%] lg:w-[30%]  flex flex-row justify-around mb-1.5">
            <Link to="/login" className="font-bold text-sm md:text-xl px-2 py-1 md:px-3  md:py-2 bg-white rounded-xl hover:bg-blue-300"> Login </Link>
            <Link to="/cadastro" className="font-bold text-sm md:text-xl px-2 py-1 md:px-3  md:py-2 bg-white rounded-xl hover:bg-blue-300"> Cadastro </Link>
            <Link to="/integrantes" className="font-bold text-sm md:text-xl px-2 py-1 md:px-3  md:py-2 bg-white rounded-xl hover:bg-blue-300"> Integrantes </Link>
        </nav>
    )
}