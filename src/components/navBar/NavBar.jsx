import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import Menu from "../menu/Menu";
import Notifications from "../Notifications";
import DisplayIndex from "../../BaseComponents/DisplayIndex";
import Message from "../Message";
import ScrollBarHider from "../../BaseComponents/ScrollBarHidden";
import {
   FaShoppingCart,
   FaMoneyBillWave,
   FaChevronDown,
} from "react-icons/fa";

import Logo from "../../assets/images/Logo-Atoun.png";
// Icons
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { MdOutlineNotifications } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

export default function NavBar() {
   const [barState, setBarState] = useState(0);
   const [searchState, setSearchState] = useState(false);

   const handleSearchState = () => {
      setSearchState(!searchState);
   };

   const Links = [
      {
         name: "Accueil",
         link: "/",
         icon: <GoHome />,
      },

      {
         name: "Panier",
         link: "/panier",
         icon: <MdShoppingCart />,
      },

      {
         name: "Catégories",
         link: "/categories",
         icon: <BiCategory />,
      },

      {
         name: "Profil",
         link: "/profil",
         icon: <FaRegUser />,
      },
   ];

   const [notificationState, setNotificationState] = useState(false);

   const handleBar = () => {
      setBarState(barState ? 0 : 1);
   };

   const handleNotification = () => {
      setNotificationState(notificationState ? false : true);
   };

   return (
      <div className="simpleMenu_messages">
         <nav className="flex py-[35px] bg-light">
            <div className="menuButton flex" onClick={handleBar}>
               {barState ? <LiaTimesSolid /> : <FaBars />}
               <p>Menu</p>
            </div>

            <div className="flex items-center w-[40%]">
               <div className="logo">
                  <img src={Logo} alt="Logo d'Atoun Africa" />
               </div>

               <div className="navResearch w-[65%] px-2 ">
                  <form action="" className="flex relative h-[41px]">
                     <input
                        type="search"
                        name=""
                        id=""
                        className="w-full h-full bg-dark/5 p-2 rounded-full px-4 placeholder:text-dark text-[14px]"
                        placeholder="Rechercher"
                        onFocus={handleSearchState}
                     />

                     <button
                        type="submit"
                        className="submit absolute right-[5px] top-[10%] bg-dark h-[80%] p-3 px-[0.5rem] rounded-full text-light"
                     >
                        <IoSearch className=" flex top-[50%] relative -translate-y-1/2" />
                     </button>

                     <ScrollBarHider
                        hidden={searchState}
                        handleSearchState={handleSearchState}
                        className="!top-[70px]"
                     />

                     {/* <p className="fixed bottom-0 top-[80px] left-0 bg-dark/10 w-full h-full "></p> */}
                  </form>
               </div>
            </div>

            {/* <div className="simpleMenu">
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
            </div> */}

            {/* <div className="menuLinksExtra flex">
               <div className="menuLinkExtra messageButton flex">
                  <div className="icon flex">
                     <BiMessage />
                     <DisplayIndex index="23" />
                  </div>

                  <p>Messages</p>
               </div>

               <div className="menuLinkExtra">
                  <div
                     className="icon flex"
                     onClick={() => handleNotification()}
                  >
                     <IoMdNotificationsOutline />
                     <DisplayIndex index="23" />
                  </div>
               </div>

               <div
                  className="menuLinkExtra menuExtraButton"
                  onClick={handleBar}
               >
                  <a>
                     <div className="icon">
                        {barState ? <LiaTimesSolid /> : <FaBars />}
                     </div>
                  </a>
               </div>
            </div> */}

            <div className="flex items-center justify-center gap-4 *:cursor-pointer">
               
               <div className="relative mr-2">
                  <MdOutlineNotifications className=" text-xl" />
                  <DisplayIndex index={12} />
               </div>

               <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px] ">
                  <FaShoppingCart />
                  Achat
               </div>

               <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px]">
                  <FaMoneyBillWave />
                  Vente
               </div>

               <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[4px] px-[10px] border-dark/20 border-[1px]">
                  <img src={Logo} className="w-[27px] h-[26px] border-dark/10 border-solid border-[1px] rounded-full " alt="Profil Utilisateur par défaut" />
                  <FaChevronDown />
               </div>
            </div>
         </nav>

         <SimpleMenu />

         <Menu barState={barState} handleBar={handleBar} />
         <Notifications
            handleNotification={handleNotification}
            notificationState={notificationState}
         />
         <Message />
      </div>
   );
}

function SimpleMenu() {
   const subLinks = [
      {
         name: "Accueil",
         link: "/",
         icon: <GoHome />,
      },

      {
         name: "Recherchez",
         link: "/research",
         icon: <IoSearch />,
      },

      {
         name: "Panier",
         link: "/panier",
         icon: <MdShoppingCart />,
      },

      {
         name: "Catégories",
         link: "/categories",
         icon: <BiCategory />,
      },

      {
         name: "Profil",
         link: "/profil",
         icon: <FaRegUser />,
      },
   ];

   return (
      <div className="simpleSideMenu">
         <ul className="flex">
            {subLinks.map((link, index) => (
               <li key={index}>
                  <NavLink to={link.link} className="menuLink flex">
                     <div className="icon"> {link.icon} </div>
                     <p> {link.name} </p>
                  </NavLink>
               </li>
            ))}
         </ul>
      </div>
   );
}
