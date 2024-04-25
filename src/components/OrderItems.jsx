import { useSelector } from "react-redux";
import { selectOrderById } from "../Features/orders/ordersSlice";
import ProductUnit from "./ProductUnit";
import OrderItemChange from "../BaseComponents/Orders/OrderItemChange";
import { useState } from "react";

const OrderItems = ({ orderId }) => {
   const order = useSelector(selectOrderById(parseInt(orderId, 10)));
   const [productCount, setProductCount] = useState(1);

   return (
      <div>
         {order?.order_items?.map(({ id, slug_name, temporal_price }, index) => (
            <div key={id}>
               <div>
                  <h3>Produit {index + 1} de votre commande</h3>
                  <hr />

                  <OrderItemChange
                     productCount={productCount}
                     setProductCount={setProductCount}
                     current_price={temporal_price}
                  />
               </div>

               <ProductUnit
                  slug_name={slug_name}
                  className="!w-[90%]"
                  type="order"
               />
            </div>
         ))}
      </div>
   );
};

export default OrderItems;
