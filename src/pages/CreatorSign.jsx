import { useState } from "react";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import CreatorRules from "../components/CreatorRules";
import CreatorForm from "../components/CreatorForm";
import CreatorConfiguration from "../components/CreatorConfiguration"
import CreateProduct from "../components/CreatorComponents/CreateProduct";
import UpdateProduct from "../components/CreatorComponents/UpdateProduct";

const CreatorSign = () => {
   const [state, setState] = useState(0);

   const handleState = (state) => {
      setState(state);
   };

   return (
      <div className="pt-24">
         <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
            <CreatorSignSteep state={state} handleState={handleState} />

            {state === 0 && <CreatorRules handleState={handleState} />}

            {state === 1 && <CreatorForm />}

            {state === 2 && <CreatorConfiguration />}

            {state === 3 && <UpdateProduct />}
         </div>
      </div>
   );
};

export default CreatorSign;
