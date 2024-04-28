import { useEffect, useState } from "react";
import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import ProductPayment from "./ProductPayment/ProductPayment";
import ProductReceive from "./ProductReceive/ProductReceive";
import { useQuery } from "react-query";
import axios from "../axiosConfig";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Delievering from "./Delievering";
import Steps from "../utils/stepsConstants";
import { selectOrderById, updateOrders } from "../Features/orders/ordersSlice";
import Order from "./Order";
import OrderItems from "./OrderItems";
import OrderFetcher from "../Features/fetchers/OrderFetcher";

const OrderProcess = ({ state = 0 }) => {
   const { order_id } = parseInt(useParams());
   const [order, setOrder] = useState(useSelector(selectOrderById(order_id)));

   return (
      <>
         {!order ? (
            <OrderFetcher orderId={order_id} setOrder={setOrder} />
         ) : (
            <div className="flex !items-start gap-4">
               <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
                  <CreatorSignSteep state={state} Steps={Steps} />
                  <Order order={order} delieveringStatus={true} />
               </div>

               <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
                  {state === 0 && <OrderItems orderId={order_id} />}

                  {state === 1 && <ProductPayment orderId={order_id} />}

                  {state === 2 && <Delievering orderId={order_id} />}

                  {state === 3 && <ProductReceive orderId={order_id} />}
               </div>
            </div>
         )}
      </>
   );
};

export default OrderProcess;
