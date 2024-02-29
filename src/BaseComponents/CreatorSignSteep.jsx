import { LuCheckCircle } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";

const CreatorSignSteep = () => {
    const [steep, setSteep] = useState(0);

   const Steps = [
      {
         name: "Accords",
         number: "1",
         icon: <LuCheckCircle />,
      },
      {
         name: "Informations",
         number: "2",
         icon: <CiEdit />,
      },
      {
         name: "Configuration",
         number: "3",
         icon: <MdShoppingCart />,
      },
      {
         name: "Produit",
         number: "4",
         icon: <GoPlusCircle />,
      },
   ];

   return (
      <div className="flex relative items-center justify-center max-w-[500px] m-auto gap-2 mt-4">
         {Steps.map(({ name, number, icon }, index) => (
            <div className={`text-center flex items-center flex-col z-10 bg-light`}>
               <div className={`relative mb-2 border-dark rounded-full border-solid border-[0.75px] p-2 ${steep === index ? 'bg-primary text-light border-light' : ''}`}>
                {icon}
                <span className="absolute -top-1 -right-1 w-[0.85rem] bg-red-500 text-[10px] text-light rounded-full">{number}</span>
               </div>

               <p className={`text-[14px] text-capitalize`}>{name}</p>
            </div>
         ))}

         <span className=" z-0 absolute top-[28%] w-full h-1 whitespace-nowrap border-0 border-dashed border-t-[1px] underline-offset-1"> </span>
      </div>
   );
};

export default CreatorSignSteep;
