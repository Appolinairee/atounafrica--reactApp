import { useSelector } from "react-redux";
import { selectOrderById } from "../Features/orders/ordersSlice";
import ProductUnit from "./ProductUnit";
import { type } from "@testing-library/user-event/dist/type";

const OrderItems = ({orderId}) => {
   const order = useSelector(selectOrderById(parseInt(orderId, 10)));
//    const userId = useSelector((state) => state.auth.userId);

    return (
        <div>
            {
                order?.order_items?.map(({id, slug_name, }, index) => (
                    <div key={id}>
                        <div>
                            <h3>Produit {index + 1} de votre commande</h3>
                            <hr />
                            
                            <p>Supprimer</p>
                        </div>

                        <ProductUnit slug_name={slug_name} className="!w-[90%]" type="order" />
                    </div>
                ))
            }
        </div>
    )
}

export default OrderItems;