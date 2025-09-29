import { Link } from "react-router-dom";

export default function Menu() {
    return(
        <nav className="menu-nav">
            <Link to="/login"> Login </Link>
            <Link to="/cadastro"> Cadastro </Link>
        </nav>
    )
}