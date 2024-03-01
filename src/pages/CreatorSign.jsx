import { useState } from "react";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import CreatorRules from "../components/CreatorRules";

const CreatorSign = () => {

  const [state, setState] = useState(0);

   return (
    <div className=" pt-24">
      <div className="bg-red min-h-[80vh] rounded-lg bg-light mx-[3%] p-2">
          <CreatorSignSteep />

          {
            (state === 0) && <CreatorRules />
          }

          {
            (state === 1) && <CreatorSignSteep />
          }

          {
            (state === 2) && <CreatorSignSteep />
          }
          
          {
            (state === 3) && <CreatorSignSteep />
          }
          

      </div>
    </div>
   );
};

export default CreatorSign;
