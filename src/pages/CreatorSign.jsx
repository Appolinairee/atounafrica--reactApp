import { useState } from "react";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import CreatorRules from "../components/CreatorRules";
import CreatorForm from "../components/CreatorForm";

const CreatorSign = () => {
   const [state, setState] = useState(0);

   const handleState = (state) => {
      setState(state);
   };

   return (
      <div className=" pt-24">
         <div className="bg-red min-h-[80vh] rounded-lg bg-light mx-[3%] p-2">
            <CreatorSignSteep />

            {state === 0 && <CreatorRules handleState={handleState} />}

            {state === 1 && <CreatorForm />}

            {state === 2 && <CreatorSignSteep />}

            {state === 3 && <CreatorSignSteep />}
         </div>
      </div>
   );
};

export default CreatorSign;
