import { useParams } from "react-router-dom";
import ProductUnit from "./ProductUnit";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import Steps from "../utils/stepsConstants";

const ProductOrder = () => {
   const { slug_name } = useParams();

   return (
      <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
         <CreatorSignSteep state={0} Steps={Steps} />
         <ProductUnit slug_name={slug_name} />
      </div>
   );
};

export default ProductOrder;