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
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BiArrowBack, BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const CategoriesFixed = ({ className }) => {
   const { category = "Pour vous" } = useParams();
   const containerRef = useRef(null);
   const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [scrollStep, setScrollStep] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

   const handleScroll = (direction) => {
      const container = containerRef.current;

      console.log(container);
      if (container) {
         const newScrollLeft =
            direction === "left"
               ? scrollLeft - scrollStep
               : scrollLeft + scrollStep;

         container.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
         });

         setScrollLeft(newScrollLeft);
      }
   };

   useEffect(() => {
      const container = containerRef.current;
      if (container) {
        const totalWidth = container.scrollWidth;
        const averageItemWidth = totalWidth / Categories.length;
  
        setScrollStep(averageItemWidth);
  
        // Met à jour les états isAtStart et isAtEnd
        setIsAtStart(scrollLeft < 20);
        setIsAtEnd(scrollLeft + container.clientWidth >= totalWidth);
      }
    }, [scrollLeft]);

   return (
      <div className={`${className} mb-2  relative px-sectionPadding border-solid border-0 border-dark/10 border-b-[1px] bg-light  `}>
         <div
            className={`flex pt-4 overflow-x-auto gap-[5%] z-30 scrollbar-none`}
            ref={containerRef}
         >
            {Categories.map(({ icon, text }, index) => (
               <div
                  key={index}
                  className={`flex pb-2 flex-col gap-2 justify-center cursor-pointer border-solid border-0 border-transparent border-b-[2px] ${
                     category === text ? "!border-dark" : ""
                  } `}
               >
                  <p className="text-[18px] text-dark/70 border-solid rounded-full border-[.5px] border-dark/30 p-[6px] large:text-[16px] xs:!text-[14px]">
                     {icon}
                  </p>
                  <span className="text-[15px] font-semibold whitespace-nowrap large:text-[14px] xs:!text-[12px]">
                     {text}
                  </span>
               </div>
            ))}
         </div>
         
         <button
            className={`absolute -bottom-1 bg-light transform -translate-y-1/2 left-4 ${isAtStart ? "opacity-0": "absolute-100"} border-solid rounded-full border-[1px] p-[3px] border-dark/50 large:left-1 xs:p-[2px] xs:-bottom-1`}
            onClick={() => handleScroll("left")}
         >
            <MdKeyboardArrowLeft />
         </button>

         <button
            className={`absolute -bottom-1 bg-light right-4 transform -translate-y-1/2 ${isAtEnd ? "opacity-0": "absolute-100"} border-solid rounded-full border-[1px] p-[3px] border-dark/50 large:right-1 xs:p-[2px] xs:-bottom-1`}
            onClick={() => handleScroll("right")}
         >
            <MdKeyboardArrowRight />
         </button>
      </div>
   );
};

export default CategoriesFixed;
