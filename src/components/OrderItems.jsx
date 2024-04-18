import { useSelector } from "react-redux";
import { selectOrderById } from "../Features/orders/ordersSlice";
import ProductUnit from "./ProductUnit";

const OrderItems = ({orderId}) => {
   const order = useSelector((state) => state.orders.orders);
   const user = useSelector((state) => state.auth.user);
   const userId = user?.id ? "?&user_id=" + user.id : "";
   console.log(order);

    return (
        <div>
            {
                order?.order_items.map(({id, slug_name, }) => (
                    <div key={id}>
                        <div>
                            
                        </div>

                        <ProductUnit slug_name={slug_name} userId={userId} />
                    </div>
                ))
            }
        </div>
    )
}

export default OrderItems;