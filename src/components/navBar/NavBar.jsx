import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import Menu from "../menu/Menu";
import Notifications from "../Notifications";
import DisplayIndex from "../../BaseComponents/DisplayIndex";
import Message from "../Message";
import ScrollBarHider from "../../BaseComponents/ScrollBarHidden";
import { FaShoppingCart, FaMoneyBillWave, FaChevronDown } from "react-icons/fa";

import Logo from "../../assets/images/Logo-Atoun.png";
// Icons
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdOutlineNotifications } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

export default function NavBar() {
   const [barState, setBarState] = useState(0);
   const [searchState, setSearchState] = useState(false);
   const [profilState, setProfilState] = useState(false);

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
      <div className="simpleMenu_messages pb-[78px]">
         <nav className="flex py-[35px] bg-light md:py-[25px]">

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

                  </form>
               </div>
            </div>

            <div className="flex items-center justify-center gap-4 *:cursor-pointer">
               <div className="relative mr-2" onClick={() => handleNotification()}>
                  <MdOutlineNotifications className=" text-xl" />
                  <DisplayIndex index={12} />
               </div>

               <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px] large:hidden">
                  <FaShoppingCart />
                  Achat
               </div>

               <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px] large:hidden">
                  <FaMoneyBillWave />
                  Vente
               </div>

               <div
                  className="flex relative gap-3 text-[15px] border-solid rounded-2xl p-[4px] px-[10px] border-dark/20 border-[1px] xs:p-[2px] xs:px-[5px] xs:gap-1"
                  onClick={() => setProfilState(!profilState)}
               >
                  <img
                     src={Logo}
                     className="w-[27px] h-[26px] border-dark/10 border-solid border-[1px] rounded-full xs:h-[24px]"
                     alt="Profil Utilisateur par défaut"
                  />

                  <FaChevronDown
                     className={` duration-150 text-dark/70 xs:text-[13px] ${
                        profilState ? " rotate-180" : "rotate-0"
                     }`}
                  />
               </div>

               {profilState && (
                     <SubMenu />
               )}

               {profilState && (
                  <span
                     className="fixed z-0 w-full h-full left-0 top-0 bottom-0 bg-transparent"
                     onClick={() => setProfilState(!profilState)}
                  ></span>
               )}

               <div
                  className="menuLinkExtra"
                  onClick={handleBar}
               >
                  <Link>
                     <div className="icon">
                        {barState ? <LiaTimesSolid /> : <FaBars />}
                     </div>
                  </Link>
               </div>
            </div>
         </nav>

         <SimpleMenu />

         <Menu barState={barState} handleBar={handleBar} />

         <Notifications
            handleNotification={handleNotification}
            notificationState={notificationState}
         />
      </div>
   );
}

const SubMenu = () => {
   const SubLinks = [
      {
         name: "Profil",
         link: "",
         icon: <FaRegUser />,
      },

      {
         name: "Panier",
         link: "",
         icon: <BiCategory />,
      },

      {
         name: "Affiliation",
         link: "",
         icon: <FaRegUser />,
      },

      {
         name: "Déconnexion",
         link: "",
         icon: <BiCategory />,
      },
   ];

   return (
      <div className="fixed !z-50 right-0 text-[14px] top-[65px] w-fit bg-white -translate-x-[60px] h-auto flex flex-col shadow-boxShadow1 items-center whitespace-nowrap rounded-xl overflow-hidden md:-right-[50px] xs:top-[60px]">
         {SubLinks.map(({ name, link, icon }, index) => (
            <Link
               className={` font-semibold gap-4 bg-light w-full py-3 border-b-[1px] px-6 border-dark/50 text-center hover:bg-dark/10 ${
                  index === 0
                     ? "border-dark/40 border-0 border-b-[1px] border-solid"
                     : ""
               }`}
               to={link}
            >
               <div className="flex justify-center gap-3 items-center w-fit ">
                  <p>{icon}</p>
                  <p>{name}</p>
               </div>
            </Link>
         ))}
      </div>
   );
};

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
      }
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

            <Message />
         </ul>
      </div>
   );
}
