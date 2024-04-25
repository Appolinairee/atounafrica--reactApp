import { useEffect, useState } from "react";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import ProductPayment from "./ProductPayment/ProductPayment";
import ProductReceive from "./ProductReceive/ProductReceive";
import { useQuery } from "react-query";
import axios from "../axiosConfig";
import LoadingButton from "../BaseComponents/LoadingButton";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ServerError from "../pages/ServerError";
import Delievering from "./Delievering";
import Steps from "../utils/stepsConstants";
import { selectOrderById, updateOrders } from "../Features/orders/ordersSlice";
import Order from "./Order";
import OrderItems from "./OrderItems";

const OrderProcess = ({ state = 0 }) => {
   const { order_id } = useParams();
   const authToken = useSelector((state) => state.auth.authToken);
   const dispatch = useDispatch();
   const [order, setOrder] = useState(useSelector(selectOrderById(order_id)));
   const [orderId, setOrderId] = useState(order_id);

   useEffect(() => {
      setOrderId(order_id);
   }, [order_id]);

   const { isLoading, isError } = useQuery(
      [`order-${order_id}`, orderId],

      async () => {
         const response = await axios.get(`orders/${order_id}`, {
            headers: {
               Authorization: `Bearer ${authToken}`,
            },
            retry: { retries: 0 },
         });
         return response;
      },
      {
         onSuccess: (response) => {
            console.log(response);
            response = response.data.data;
            dispatch(updateOrders(response));
            setOrder(response);
         },
         onError: (error) => {
            console.log(error);
         },
         enabled: !order || (order && !order.order_items),
      },
      [order_id]
   );

   // useEffect(() => {
   //    setIsLoadingOrderId(!order);
   // }, [order_id]);

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
      <div className="flex !items-start gap-4">
         <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
            <CreatorSignSteep state={state} Steps={Steps} />
            <Order order={order} delieveringStatus={true} />
         </div>

         <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
            {state === 0 && !isLoading && <OrderItems orderId={order_id} />}

            {state === 1 && <ProductPayment orderId={order_id} />}

            {state === 2 && <Delievering orderId={order_id} />}

            {state === 3 && <ProductReceive orderId={order_id} />}
         </div>
      </div>
   );
};

export default OrderProcess;
