import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import Menu from "../menu/Menu";
import Notifications from "../Notifications";
import Message from "../Message/Message";
import DisplayIndex from "../../BaseComponents/DisplayIndex";

import Logo from "../../assets/images/Logo-Atoun.png";
// Icons
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import MessageButton from "../../BaseComponents/MessageButton";
    
export default function NavBar() {
    const [barState, setBarState] = useState(0);

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

    const [messageState, setMessageState] = useState(false);
    const [notificationState, setNotificationState] = useState(false);

    const handleBar = () => {
        setBarState(barState? 0 : 1);
    }

    const handleMessageState = () => {
        setMessageState(messageState? false : true);
    }

    const handleNotification = () => {
        setNotificationState(notificationState? false : true);
    }

  return (
    <div className="simpleMenu_messages">
        <nav className="flex section">
            <div className="menuButton flex" onClick={handleBar}>
                {
                    (barState) ? <LiaTimesSolid />: <FaBars/> 
                }
                <p>Menu</p>
            </div>

            <div className="logo">
                <img src={Logo} alt="Logo d'Atoun Africa" />
            </div>

            <div className="navResearch">
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
                <div className="menuLinkExtra messageButton flex" onClick={() => {setMessageState(!messageState)}}>
                        <div className="icon flex">
                            <BiMessage />
                            <DisplayIndex index="23" />
                        </div>

                        <p>Messages</p>
                </div>
                    
                <div className="menuLinkExtra">
                    <div className="icon flex" onClick={() => handleNotification()}>
                        <IoMdNotificationsOutline />
                        <DisplayIndex index="23" />
                    </div>
                </div>

                <div className="menuLinkExtra menuExtraButton" onClick={ handleBar }>
                    <a>
                        <div className="icon">{
                            (barState) ? <LiaTimesSolid /> : <FaBars />
                        }</div>
                    </a>
                </div>
            </div>
        </nav>

        <SimpleMenu />

        <Menu barState={barState} handleBar={handleBar} />

        <Message handleMessageState={handleMessageState} messageState={messageState} className={`${messageState ? "activeMessage": ""}`} />
        
        <Notifications handleNotification={handleNotification} notificationState={notificationState} />

        <MessageButton />
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

        <div className ="simpleSideMenu">
            <ul className  ="flex">
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