import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "../axiosConfig";
import { selectOrderById, updateOrders } from "../Features/orders/ordersSlice";
import { useSelector } from "react-redux";
import Order from "./Order";
import LoadingButton from "../BaseComponents/LoadingButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeliveryForm = ({ orderId }) => {
   const [shippingAddress, setShippingAddress] = useState("");
   const [shippingDate, setShippingDate] = useState("");
   const [shippingContact, setShippingContact] = useState("");
   const order = useSelector(selectOrderById(orderId));
   const dispatch = useDispatch();
   const authToken = useSelector((state) => state.auth.authToken);
   const [errorMessage, setMessageError] = useState();
   const navigate = useNavigate();

   console.log(orderId);

   const {
      mutate: updateDelieveringDetails,
      isLoading,
      isError,
   } = useMutation(
      (data) =>
         axios.post(`orders/${orderId}`, data, {
            headers: {
               Authorization: `Bearer ${authToken}`,
            },
            retry: { retries: 0 },
         }),
      {
         onSuccess: (response) => {
            console.log(response, response.data, response.data.data);
            response = response.data.data;
            dispatch(updateOrders(response));

            // Todo: à mettre à jour
            navigate(`/commande/${orderId}/reception`);

            if (response.status == 2) {
            }
         },
      }
   );

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!shippingAddress || shippingAddress.length === 0) {
         setMessageError("Lieu de livraison requis.");
         return;
      }

      if (!shippingDate || shippingDate.length === 0) {
         setMessageError("Date de livraison requise.");
         return;
      } else {
         const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/;
         if (!dateFormat.test(shippingDate)) {
            setMessageError(
               "Format de date invalide. Utilisez YYYY-MM-DD HH:mm."
            );
            return;
         }
      }

      const contactFormat = /^\d{8}$/;
      if (!shippingContact || shippingContact.length === 0) {
         setMessageError("Contact de livraison requis.");
         return;
      } else if (!contactFormat.test(shippingContact)) {
         setMessageError("Le contact de livraison doit contenir 8 chiffres.");
      }

      // Si aucune erreur, envoyer la mutation
      updateDelieveringDetails({
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

         {errorMessage && <p>{errorMessage}</p>}

         <form onSubmit={handleSubmit}>
            <label htmlFor="shippingAddress">Lieu de livraison:</label>

            <input
               type="text"
               id="shippingAddress"
               value={shippingAddress}
               required
               onChange={(e) => setShippingAddress(e.target.value)}
            />

            <br />

            <label htmlFor="shippingDate">
               Spécifiez votre date de livraison
            </label>

            <input
               type="datetime-local"
               id="shippingDate"
               value={shippingDate}
               required
               onChange={(e) => setShippingDate(e.target.value)}
            />
            <br />

            <label htmlFor="shippingContact">
               Contact pour cette livraison:
            </label>
            <input
               type="text"
               id="shippingContact"
               value={shippingContact}
               required
               onChange={(e) => setShippingContact(e.target.value)}
            />
            <br />

            <LoadingButton
               text="Soumettre les informations"
               loading={isLoading}
               className="!bg-primary px-6 py-3 rounded-[18px]"
            />
         </form>
      </div>
   );
};

export default DeliveryForm;
