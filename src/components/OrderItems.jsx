import { useSelector } from "react-redux";
import {
   selectOrderById,
} from "../Features/orders/ordersSlice";
import OrderItem from "./OrderItem";

const OrderItems = ({ orderId }) => {
   const order = useSelector(selectOrderById(parseInt(orderId, 10)));

   return (
      <div>
         {order?.order_items?.map((orderItem, index) => (
            <OrderItem
               key={orderItem.id}
               orderItem={orderItem}
               index={index}
               orderId={orderId}
               orderItemsNumber={order.order_items.length}
               isAmountPaid={order.amount_paid > 0}
            />
         ))}
      </div>
   );
};

export default OrderItems;