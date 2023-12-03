import "./NavBar.css";
import Logo from "../../assets/images/Logo-Atoun.png";

// Icons
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className="flex section">
        <div className="menuButton flex">
            <i className="fa-solid fa-bars"></i>
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
                <li href="">
                    <a className="menuLink flex">
                        <div className="icon"><SiHomeassistantcommunitystore /></div>
                        <p>Accueil</p>
                    </a>
                </li>

                <li href="">
                    <a className="menuLink active flex">
                        <div className="icon"><MdShoppingCart /></div>
                        <p>Panier</p>
                    </a>
                </li>

                <li href="">
                    <a className="menuLink flex">
                        <div className="icon"><BiCategory /></div>
                        <p>Catégories</p>
                    </a>
                </li>

                <li href="">
                    <a className="menuLink flex">
                        <div className="icon"><FaUser /></div>
                        <p>Profil</p>
                    </a>
                </li>
            </ul>
        </div>

        <div className="messageButton flex">
            <div className="messageIcon">
                <div className="icon"><AiFillMessage /></div>
                <span className="notificationMark">21</span>
            </div>
            <p>Messages</p>
        </div>

        <div className="iconsPlus flex">
            <div className="BarIndicatifButton">
                <a href="">
                    <div className="icon"><MdOutlineNotificationsActive /></div>
                </a>
            </div>

            <div className="BarIndicatifButton">
                <a className="menuLink flex">
                    <div className="icon"><FaBars /></div>
                </a>
            </div>
        </div>
    </nav>
  )
}
