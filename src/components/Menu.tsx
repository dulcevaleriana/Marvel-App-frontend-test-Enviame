import React, {useState} from "react";
import { Link } from 'react-router-dom';
import LOGO from '../assets/img/logo.png';
import useMediaQuery from '../js/useMediaQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const responsiveMenuWidth768px = useMediaQuery("(max-width: 992px)");

    return(
        <div className="class-Menu">
            <img src={LOGO} alt={LOGO} />
            {responsiveMenuWidth768px && (
                <>
                    {activeMenu === true ? (
                        <FontAwesomeIcon icon={faXmark} onClick={() => setActiveMenu(false)}/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} onClick={() => setActiveMenu(true)}/>
                    )}
                </>
            )}
            <ul className={activeMenu === true ? "class-menu-smartphone" : " "}>
                <li>
                    <Link to="/" onClick={() => setActiveMenu(false)}>
                        Ejercicio3
                    </Link>
                </li>
                <li>
                    <Link to="/Ejercicio2" onClick={() => setActiveMenu(false)}>
                        Ejercicio2
                    </Link>
                </li>
                <li>
                    <Link to="/Ejercicio1" onClick={() => setActiveMenu(false)}>
                        Ejercicio1
                    </Link>
                </li>
            </ul>

            {activeMenu && (<div className="class-bg-menu-smartphone" onClick={() => setActiveMenu(false)}/>)}
        </div>
    )
}

export default Menu;