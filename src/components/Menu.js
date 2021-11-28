import React from "react";
import { Link } from 'react-router-dom';
import LOGO from '../assets/img/logo.png';
const Menu = () => {
    return(
        <div className="class-Menu">
            <img src={LOGO} alt={LOGO} />
            <ul>
                <li>
                    <Link to="/">
                        Ejercicio3
                    </Link>
                </li>
                <li>
                    <Link to="/Ejercicio2">
                        Ejercicio2
                    </Link>
                </li>
                <li>
                    <Link to="/Ejercicio1">
                        Ejercicio1
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;