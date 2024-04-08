import { useState } from "react";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";

import { CiEdit } from "react-icons/ci";
import { MdShoppingCart } from "react-icons/md";
import ProductPayment from "./ProductPayment/ProductPayment";
import ProductReceive from "./ProductReceive/ProductReceive";
import { useQuery } from "react-query";
import axios from "../axiosConfig";
import LoadingButton from "../BaseComponents/LoadingButton";
import ProductUnit from "./ProductUnit";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import ServerError from "../pages/ServerError";
import Delievering from "./Delievering";

const OrderProcess = ({ state = 0 }) => {
   const user = useSelector((state) => state.auth.user);
   const userId = user?.id ? "?&user_id=" + user.id : "";
   const { slug_name, order_id } = useParams();
   const [orderId, setOrderId] = useState(order_id);

   // Utilisez useLocation pour obtenir l'URL actuelle
   const location = useLocation();
   const isOrderRoute = location.pathname.includes("commande");

   const Steps = [
      {
         name: "Commande",
         number: "1",
         icon: <MdShoppingCart />,
         link: ``,
      },
      {
         name: "Paiement",
         number: "2",
         icon: <RiSecurePaymentFill />,
      },
      {
         name: "Avis Livraison",
         number: "3",
         icon: <FaTruckFast />,
      },
      {
         name: "Avis",
         number: "4",
         icon: <CiEdit />,
      },
   ];

   const [Product, setProduct] = useState({});
   console.log(slug_name, isOrderRoute, state);

   const { isLoading, isError } = useQuery(
      `product`,
      async () => {
         const response = await axios.get(`products/${slug_name + userId}`, {
            retry: { retries: 0 },
         });
         return response;
      },
      {
         enabled: !isOrderRoute && state === 0,
         onSuccess: (response) => {
            setProduct(response.data.data);
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   if (isLoading) {
      return (
         <div className="my-4">
            <LoadingButton
               text="En cours de chargement"
               loading={isLoading}
               className="!text-dark"
            />
         </div>
      );
   }

   if (isError) {
      return <ServerError />;
   }

   return (
      <div className="">
         <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
            <CreatorSignSteep state={state} Steps={Steps} />

            {state === 0 && !isOrderRoute && (
               <ProductUnit
                  {...Product}
                  key={Product.id}
                  userId={userId}
                  setOrderId={setOrderId}
               />
            )}

            {state === 1 && <ProductPayment orderId={orderId} />}

            {state === 2 && <Delievering orderId={orderId} />}

            {state === 3 && <ProductReceive orderId={orderId} />}
         </div>
      </div>
   );
};

export default OrderProcess;
