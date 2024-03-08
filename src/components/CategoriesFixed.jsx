import { LuAlignStartHorizontal } from "react-icons/lu";
import { FaChair } from "react-icons/fa";
import { LuArmchair } from "react-icons/lu";
import { PiOfficeChairLight } from "react-icons/pi";
import { PiStoolBold } from "react-icons/pi";
import { GiArabicDoor } from "react-icons/gi";
import { GiTable } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";
import { RiFridgeLine } from "react-icons/ri";
import { IoBedOutline } from "react-icons/io5";

const CategoriesFixed = () => {
   const Categories = [
      {
         icon: <LuAlignStartHorizontal />,
         text: "Pour vous",
      },
      {
         icon: <FaChair />,
         text: "Chaises",
      },
      {
         icon: <LuArmchair />,
         text: "Fauteuils",
      },
      {
         icon: <PiOfficeChairLight />,
         text: "Chaises de bureau",
      },
      {
         icon: <PiStoolBold />,
         text: "Tabourets",
      },
      {
         icon: <GiArabicDoor />,
         text: "Portes",
      },
      {
         icon: <GiTable />,
         text: "Tables",
      },
      {
         icon: <FaShoppingBasket />,
         text: "Paniers d'achats",
      },
      {
         icon: <RiFridgeLine />,
         text: "Réfrigérateurs",
      },
      {
         icon: <IoBedOutline />,
         text: "Lits",
      },
   ];

   return (
      <div className="flex px-sectionPadding mb-2 pt-4 bg-light border-solid border-0 border-dark/10 border-b-[1px] overflow-x-auto gap-[5%] scrollbar-none">
         {Categories.map(({icon, text}, index) => (
            <div key={index} className="flex pb-3 flex-col gap-2 justify-center cursor-pointer">
               <p className="text-[18px] text-dark/70 border-solid rounded-full border-[.5px] border-dark/30 p-[6px] large:text-[16px] xs:!text-[14px]">{icon}</p>
               <span className="text-[15px] font-semibold whitespace-nowrap large:text-[14px] xs:!text-[12px]">{text}</span>
            </div>
         ))}
      </div>
   );
};

export default CategoriesFixed;
