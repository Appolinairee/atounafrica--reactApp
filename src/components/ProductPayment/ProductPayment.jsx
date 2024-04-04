import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectOrderById } from "../../Features/orders/ordersSlice";
import Order from "../Order";

const ProductPayment = ({ orderId }) => {
   const order = useSelector(selectOrderById(orderId));
   const [paymentMode, setPaymentMode] = useState("direct");

   const handlePaymentModeChange = (mode) => {
      setPaymentMode(mode);
   };

   return (
      <div className="paymentsSection">
         <h2>Informations sur la commande</h2>
         <p>Numéro de commande : {order.id}</p>
         <p>Date de création : {new Date(order.created_at).toLocaleDateString()}</p>
         <p>Total : {order.total_amount}</p>

         <hr />

         {/* Afficher les options de paiement */}
         <div>
            <label>
               <input
                  type="radio"
                  value="direct"
                  checked={paymentMode === "direct"}
                  onChange={() => handlePaymentModeChange("direct")}
               />
               Paiement direct
            </label>
            <br />
            <label>
               <input
                  type="radio"
                  value="cotisation"
                  checked={paymentMode === "cotisation"}
                  onChange={() => handlePaymentModeChange("cotisation")}
               />
               Paiement par cotisation
            </label>
         </div>

         {/* Afficher les détails de chaque élément de la commande */}
         {order.order_items.map((orderItem, index) => (
            <div key={index}>
               <Order orderItem={orderItem} />
            </div>
         ))}

         {/* Bouton de paiement */}
         <button>Procéder au paiement</button>
      </div>
   );
};

export default ProductPayment;
