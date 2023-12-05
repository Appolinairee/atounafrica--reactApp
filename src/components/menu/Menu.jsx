import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./menu.css";
import "./click.css";

// Icons import
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";

//import some images
import Click1 from "../../assets/photos(exemples)/SteepImages/undraw_discover.png";
import Click2 from "../../assets/photos(exemples)/SteepImages/undraw_Meeting.png";
import Click3 from "../../assets/photos(exemples)/SteepImages/undraw_payments.png";
import Click4 from "../../assets/photos(exemples)/SteepImages/undraw_serve.png";


const Menu = ({barState, handleBar}) => {
    const Links1 = [
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

        {
            name: "Vos Messages",
            link: "/messages",
            icon: <BiMessage />
        },

        {
            name: "Notifications",
            link: "/notifications",
            icon: <MdOutlineNotificationsActive />
        },
    ];

    const Links2 = [
        {
            name: "Tableau de bord",
            link: "/dashoard",
            icon: <GoHome />
        },

        {
            name: "Profil vendeur",
            link: "/profilvendor",
            icon: <FaRegUser />
        },

        {
            name: "Gerstion produits",
            link: "/nasket",
            icon: <MdShoppingCart />
        },

        {
            name: "Portefeuille",
            link: "/wallet",
            icon: <BiCategory />
        }
    ];

  return (
    <div className={(barState == 1)? "allMenus active": "allMenus"}>  
        <div className="overlay" onClick={ handleBar }></div>

        <div className="menus actived"  >

            <div className="menu menu1">
                <ul className="flex" onClick={handleBar}>
                    {
                        Links1.map((link, index) =>(
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

            <div className="menu menu1 menu2">
                <ul className="flex" onClick={handleBar}>
                    {
                        Links2.map((link, index) =>(
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

            <div className="clickSection">
                <h4>C'est en quelques clics</h4>

                <div className="clicks">
                    <div className="click active">
                        <img src={Click1} alt="Etape 1" />
                        <p>Commander</p>
                    </div>

                    <div className="click active">
                        <img src={Click2} alt="Etape 1" />
                        <p>échanger</p>
                    </div>

                    <div className="click active">
                        <img src={Click3} alt="Etape 1" />
                        <p>Payer à Atoun</p>
                    </div>

                    <div className="click active">
                        <img src={Click4} alt="Etape 1" />
                        <p>Livraison</p>
                    </div>
                </div>

                <Button buttonClass="button button4" buttonContent="Abonnez-vous à notre Newsletter" />

                <p className="slogan">Soyez Africain, Soyez Authentique</p>
            </div>
        </div>
    </div>
  )
}

export default Menu;
