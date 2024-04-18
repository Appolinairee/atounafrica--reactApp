import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";
import ProductUnit from "./ProductUnit";
import LoadingButton from "../BaseComponents/LoadingButton";
import ServerError from "../pages/ServerError";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import Steps from "../utils/stepsConstants";

const ProductOrder = () => {
   const user = useSelector((state) => state.auth.user);
   const userId = user?.id ? "?&user_id=" + user.id : "";
   const { slug_name } = useParams();

   return (
      <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
         <CreatorSignSteep state={0} Steps={Steps} />
         <ProductUnit slug_name={slug_name} userId={userId} />
      </div>
   );
};

export default ProductOrder;