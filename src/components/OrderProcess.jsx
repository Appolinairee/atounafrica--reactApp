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
import ProductPayment from "./ProductPayment/ProductPayment";
import ProductDeliever from "./ProductDelivering/ProductDelievering";
import ProductReceive from "./ProductReceive/ProductReceive";
import { useQuery } from "react-query";
import axios from "../axiosConfig";
import LoadingButton from "../BaseComponents/LoadingButton";
import ProductUnit from "./ProductUnit";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatorSign = () => {
   const [state, setState] = useState(0);
   const user = useSelector((state) => state.auth.user);
   const userId = user?.id ? "&user_id=" + user.id : "";

   const handleState = (state) => {
      setState(state);
   };

   const { slug_name } = useParams();

   const Steps = [
      {
         name: "Commande",
         number: "1",
         icon: <LuCheckCircle />,
      },
      {
         name: "Avis Livraison",
         number: "2",
         icon: <CiEdit />,
      },
      {
         name: "Paiement",
         number: "3",
         icon: <MdShoppingCart />,
      },
      {
         name: "Avis",
         number: "4",
         icon: <GoPlusCircle />,
      },
   ];

   const [Product, setProduct] = useState({});

   const { isLoading, isError } = useQuery(
      `product`,
      async () => {
         const response = await axios.get(
            `products/${slug_name}?user_id=12`,
            {
               retry: { retries: 0 },
            }
         );
         return response;
      },
      {
         onSuccess: (response) => {
            setProduct(response.data.data);
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   if(isLoading){
      return (
         <div className="my-4">
            <LoadingButton loading={isLoading} />
            <p className="text-center">En cours de chargement</p>
         </div>
      )
   }

   return (
      <div className="">
         <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
            <CreatorSignSteep state={state} handleState={handleState} Steps={Steps} />

            {state === 0 && <ProductUnit {...Product} key={Product.id} userId={userId} />}

            {state === 1 && <ProductPayment />}

            {state === 2 && <ProductDeliever />}

            {state === 3 && <ProductReceive />}
         </div>
      </div>
   );
};

export default CreatorSign;
