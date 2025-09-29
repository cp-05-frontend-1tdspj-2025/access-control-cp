import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav className="menu-nav w-[40%] flex flex-row justify-around mb-1.5">
            <Link to="/login" className="font-bold px-3 py-2 bg-white rounded-xl hover:bg-blue-300 "> Login </Link>
            <Link to="/cadastro" className="font-bold px-3 py-2 bg-white rounded-xl hover:bg-blue-300 "> Cadastro </Link>
        </nav>
    )
}