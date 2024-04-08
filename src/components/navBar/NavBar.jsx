import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

import Menu from "../menu/Menu";
import Notifications from "../Notifications";
import DisplayIndex from "../../BaseComponents/DisplayIndex";
import Message from "../Message";
import ScrollBarHider from "../../BaseComponents/ScrollBarHidden";
import Logo from "../../assets/images/Logo-Atoun.png";

// Icons
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { FaRegUser, FaUserPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdOutlineNotifications } from "react-icons/md";
import {
   LiaSignInAltSolid,
   LiaSignOutAltSolid,
   LiaTimesSolid,
} from "react-icons/lia";
import { FaShoppingCart, FaMoneyBillWave, FaChevronDown } from "react-icons/fa";
import { useQueryClient } from "react-query";
import axios from "axios";
import OrderGroup from "../OrderGroup";

export default function NavBar({ user }) {
   const [barState, setBarState] = useState(0);
   const [searchState, setSearchState] = useState(false);
   const [profilState, setProfilState] = useState(false);
   const [orderState, setOrderState] = useState(false);

   const handleSearchState = () => {
      setSearchState(!searchState);
   };

   const [notificationState, setNotificationState] = useState(false);

   const handleBar = () => {
      setBarState(barState ? 0 : 1);
   };

   const handleNotification = () => {
      setNotificationState(notificationState ? false : true);
   };

   const handleOrderState = () => {
      setOrderState(!orderState);
   };

   return (
      <div className="simpleMenu_messages pb-[78px] md:pb-[70px] ">
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
               <div
                  className="relative mr-2"
                  onClick={() => handleNotification()}
               >
                  <MdOutlineNotifications className=" text-xl" />
                  <DisplayIndex
                     index={
                        user?.notification_count ? user.notification_count : 0
                     }
                  />
               </div>

               {user ? (
                  <>
                     <Link to="panier">
                        <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px] large:hidden">
                           <FaShoppingCart />
                           Achats
                        </div>
                     </Link>

                     <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px] large:hidden">
                        <FaMoneyBillWave />
                        Vente
                     </div>
                  </>
               ) : (
                  <>
                     <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px] large:hidden">
                        <LiaSignInAltSolid />
                        S'inscrire
                     </div>

                     <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px] large:hidden">
                        <FaShoppingCart />
                        Achat
                     </div>
                  </>
               )}

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

               {profilState && <SubMenu auth={user ? true : false} />}

               {profilState && (
                  <span
                     className="fixed z-0 w-full h-full left-0 top-0 bottom-0 bg-transparent"
                     onClick={() => setProfilState(!profilState)}
                  ></span>
               )}

               <div className="menuLinkExtra" onClick={handleBar}>
                  <Link>
                     <div className="icon">
                        {barState ? <LiaTimesSolid /> : <FaBars />}
                     </div>
                  </Link>
               </div>
            </div>
         </nav>

         <Message classNameBtn="!fixed bottom-2 right-2 xs:right-3" />

         <Menu barState={barState} handleBar={handleBar} />

         <Notifications
            handleNotification={handleNotification}
            notificationState={notificationState}
         />

         <OrderGroup
            orderState={orderState}
            handleOrderState={handleOrderState}
         />

         <SimpleMenu />
      </div>
   );
}

const SubMenu = ({ auth }) => {
   const queryClient = useQueryClient();

   const AuthSubLinks = [
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
         icon: <LiaSignOutAltSolid />,
      },
   ];

   const SubLinks = [
      {
         name: "Connexion",
         link: "/connexion",
         icon: <FaUserPlus />,
      },

      {
         name: "Inscription",
         link: "/inscription",
         icon: <LiaSignInAltSolid />,
      },
   ];

   const Links = auth ? AuthSubLinks : SubLinks;

   const handleLogout = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
         await axios.post("http://127.0.0.1:8000/api/auth/logout", null, {
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
            },
         });

         localStorage.removeItem("token");
         queryClient.clear();
         window.location.href = "/connexion";
      } catch (error) {
         console.error("Erreur lors de la déconnexion :", error);
      }
   };

   return (
      <div className="fixed !z-50 right-0 text-[14px] top-[65px] w-fit bg-white -translate-x-[60px] h-auto flex flex-col shadow-boxShadow1 items-center whitespace-nowrap rounded-xl overflow-hidden md:-right-[50px] xs:top-[60px]">
         {Links.map(({ name, link, icon }, index) => (
            <Link
               className={` font-semibold gap-4 bg-light w-full py-3 border-b-[1px] px-6 border-dark/50 text-center hover:bg-dark/10 ${
                  index === 0
                     ? "border-dark/40 border-0 border-b-[1px] border-solid"
                     : ""
               }`}
               to={link}
               onClick={index === 3 ? handleLogout : null}
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
            <p></p>
         </ul>
      </div>
   );
}
