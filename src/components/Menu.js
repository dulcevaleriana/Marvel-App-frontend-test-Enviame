import React from "react";
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div className="class-Menu">
            Menu
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