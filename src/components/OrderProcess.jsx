import CreatorSignSteep from "../BaseComponents/CreatorSignSteep";
import ProductPayment from "./ProductPayment/ProductPayment";
import ProductReceive from "./ProductReceive/ProductReceive";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Delievering from "./Delievering";
import Steps from "../utils/stepsConstants";
import { selectOrderById } from "../Features/orders/ordersSlice";
import Order from "./Order";
import OrderItems from "./OrderItems";
import OrderFetcher from "../Features/fetchers/OrderFetcher";

const OrderProcess = ({ state = 0 }) => {
   const { order_id } = useParams();
   const order = useSelector(selectOrderById(parseInt(order_id, 10)));


   return (
      <>
         {(!order || !order.order_items || (order === undefined) ) ? (
            <OrderFetcher orderId={parseInt(order_id)} />
         ) : (
            <div className="flex !items-start gap-4">
               
               <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
                  <CreatorSignSteep state={state} Steps={Steps} />
                  <Order order={order} delieveringStatus={true} />
               </div>

               <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 ">
                  {state === 0 && <OrderItems orderId={parseInt(order_id)} />}

                  {state === 1 && <ProductPayment orderId={parseInt(order_id)} />}

                  {state === 2 && <Delievering orderId={parseInt(order_id)} />}

                  {state === 3 && <ProductReceive orderId={parseInt(order_id)} />}
               </div>
            </div>
         )}
      </>
   );
};

export default OrderProcess;