import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import Menu from "../menu/Menu";
import Logo from "../../assets/images/Logo-Atoun.png";

// Icons
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function NavBar() {
    const [barState, setBarState] = useState (0);

    const handleBar = () => {
        setBarState(barState? 0 : 1);
    }

    const Links = [
        {
            name: "Accueil",
            link: "/",
            icon: <GoHome />
        },

        {
            name: "Panier",
            link: "/panier",
            icon: <MdShoppingCart />
        },

        {
            name: "Catégories",
            link: "/categories",
            icon: <BiCategory />
        },

        {
            name: "Profil",
            link: "/profil",
            icon: <FaRegUser />
        },
    ];

  return (
    <div>
        <nav className="flex section">
            <div className="menuButton flex" onClick={handleBar}>
                {
                    (barState) ? <FaBars />: <FaRegUser/>
                }
                <p>Menu</p>
            </div>

            <div className="logo">
                <img src={Logo} alt="Logo d'Atoun Africa" />
            </div>

            <div className="research">
                <form action="" className="flex">
                    <input type="search" name="" id="" placeholder="Rechercher" />
                    <button type="submit" className="submit">
                        <div className="icon"><IoSearch /></div>
                    </button>
                </form>
            </div>

            <div className="simpleMenu">
                <ul className="flex">
                    {
                        Links.map((link, index) =>(
                            <li key={index}>
                                <NavLink to={link.link} className="menuLink flex">
                                    <div className="icon"> {link.icon} </div>
                                    <p> {link.name} </p>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="menuLinksExtra flex">
                <div className="menuLinkExtra messageButton flex">
                        <div className="icon flex">
                            <BiMessage />
                            <span>23</span>
                        </div>

                        <p>Messages</p>
                </div>

                <div className="menuLinkExtra">
                    <a href="">
                        <div className="icon flex"><MdOutlineNotificationsActive />  <span>23</span></div>
                    </a>
                </div>

                <div className="menuLinkExtra menuExtraButton" onClick={ handleBar }>
                    <a>
                        <div className="icon"><FaBars /></div>
                    </a>
                </div>
            </div>
            <SimpleMenu />
        </nav>

        {
            (barState == 1) && <Menu barState={barState} handleBar={handleBar} />
        }
    </div>
  )
}

function SimpleMenu() {
    
    const subLinks = [
        {
            name: "Accueil",
            link: "/",
            icon: <GoHome />
        },

        {
            name: "Recherchez",
            link: "/research",
            icon: <IoSearch />
        },

        {
            name: "Panier",
            link: "/panier",
            icon: <MdShoppingCart />
        },

        {
            name: "Catégories",
            link: "/categories",
            icon: <BiCategory />
        },

        {
            name: "Profil",
            link: "/profil",
            icon: <FaRegUser />
        },
    ]

  return (
    <div class="simpleSideMenu">
        <ul class="flex">
            {
                subLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.link} className="menuLink flex">
                            <div className="icon"> {link.icon} </div>
                            <p> {link.name} </p>
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}