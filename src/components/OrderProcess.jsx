import { useState } from "react";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import CreatorRules from "../components/CreatorRules";
import CreatorForm from "../components/CreatorForm";
import CreatorConfiguration from "../components/CreatorConfiguration"
import UpdateProduct from "../components/CreatorComponents/UpdateProduct";

import { LuCheckCircle } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";
import { MdShoppingCart } from "react-icons/md";
import ProductPresentation from "./ProductPresentation/ProductPresentation";
import ProductPayment from "./ProductPayment/ProductPayment";
import ProductDeliever from "./ProductDelivering/ProductDelievering";
import ProductReceive from "./ProductReceive/ProductReceive";

const CreatorSign = () => {
   const [state, setState] = useState(0);

   const handleState = (state) => {
      setState(state);
   };

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
      <div className="">
         <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
            <CreatorSignSteep state={state} handleState={handleState} Steps={Steps} />

            {state === 0 && <ProductPresentation handleState={handleState} />}

            {state === 1 && <ProductPayment />}

            {state === 2 && <ProductDeliever />}

            {state === 3 && <ProductReceive />}
         </div>
      </div>
   );
};

export default CreatorSign;
