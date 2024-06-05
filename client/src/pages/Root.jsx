import "../App.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import {getToken} from "../utils/local";
import { useEffect } from "react";

const Root = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!getToken()) {
            navigate("/register");
        }
    }, [])
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categorias</Link>
                    </li>
                    <li>
                        <Link to="/users">Usuarios</Link>
                    </li>
                    <li>
                        <Link to="/groups">Grupos</Link>
                    </li>
                    <li>
                        <Link to="/register">Login / Registrarse</Link>
                    </li>
                </ul>
            </nav>
            <h1>Root</h1>
            <Outlet />
        </div>
    )
};

export default Root;