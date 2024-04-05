import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "../axiosConfig";
import { selectOrderById } from "../Features/orders/ordersSlice";
import { useSelector } from "react-redux";
import Order from "./Order";
import LoadingButton from "../BaseComponents/LoadingButton";

const DeliveryForm = ({ orderId }) => {
   const [shippingAddress, setShippingAddress] = useState("");
   const [shippingDate, setShippingDate] = useState("");
   const [shippingContact, setShippingContact] = useState("");
   const order = useSelector(selectOrderById(orderId));
   const dispatch= useDispatch();

   const mutation = useMutation(
      (data) => axios.post(`orders/${orderId}`, data),
      {
         onSuccess: (response) => {
            
            console.log("Delivery information submitted successfully!");
         },
         onError: (error) => {
            console.error("Error:", error.message);
         },
      }
   );

   const handleSubmit = (e) => {
      e.preventDefault();

      mutation.mutate({
         shipping_address: shippingAddress,
         shipping_date: shippingDate,
         shipping_contact: shippingContact,
      });
   };

   return (
      <div>
         <p>Détails de sous-commandes</p>
         {order.order_items.map((orderItem, index) => (
            <div key={index}>
               <Order orderItem={orderItem} />
            </div>
         ))}

         <h2>Vos informations sur la livraison</h2>

         <form onSubmit={handleSubmit}>
            <label htmlFor="shippingAddress">Lieu de livraison:</label>
            
            <input
               type="text"
               id="shippingAddress"
               value={shippingAddress}
               onChange={(e) => setShippingAddress(e.target.value)}
            />

            <br />
            
            <label htmlFor="shippingDate">Spécifiez votre date de livraison</label>

            <input
               type="datetime-local"
               id="shippingDate"
               value={shippingDate}
               onChange={(e) => setShippingDate(e.target.value)}
            />
            <br />

            <label htmlFor="shippingContact">Contact pour cette livraison:</label>
            <input
               type="text"
               id="shippingContact"
               value={shippingContact}
               onChange={(e) => setShippingContact(e.target.value)}
            />
            <br />

            <LoadingButton text={"Soumettre"} loading={mutation.isLoading} />
         </form>
      </div>
   );
};

export default DeliveryForm;