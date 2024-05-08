import React, { useState } from "react";
import LoadingButton from "../BaseComponents/LoadingButton";
import { useUpdateOrder } from "../services/Order";
import { selectOrderById } from "../Features/orders/ordersSlice";
import { useSelector } from "react-redux";

const DeliveryForm = ({ orderId }) => {
   const [shippingAddress, setShippingAddress] = useState("");
   const [shippingDate, setShippingDate] = useState("");
   const [shippingContact, setShippingContact] = useState("");
   const [errorMessage, setMessageError] = useState();
   const order = useSelector(selectOrderById(orderId));

   const {updateOrderService, updateLoading} = useUpdateOrder(orderId);

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

        if (new Date(shippingDate) <= new Date()) {
            setMessageError("La date de livraison doit être dans le futur.");
            return;
        }
      }

      const contactFormat = /^\d{8}$/;
      if (!shippingContact || shippingContact.length === 0) {
         setMessageError("Contact de livraison requis.");
         return;
      } else if (!contactFormat.test(shippingContact) || shippingContact.length < 8) {
         setMessageError("Le contact de livraison doit contenir 8 chiffres.");
         return;
      }

      updateOrderService({
         shipping_address: shippingAddress,
         shipping_date: shippingDate,
         shipping_contact: shippingContact,
      });
   };

   return (
      <div>
         <p>Détails de sous-commandes</p>

         <h2>Vos informations sur la livraison</h2>

         {errorMessage && <p>{errorMessage}</p>}

         <form onSubmit={handleSubmit}>
            <label htmlFor="shippingAddress">Lieu de livraison:</label>

            <input
               type="text"
               id="shippingAddress"
               value={order.shipping_address ? order.shipping_address : ""}
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
               value={order.shipping_date ? order.shipping_date.slice(0, -1) : ""}
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
               value={order.shipping_contact ? order.shipping_contact : ""}
               required
               onChange={(e) => setShippingContact(e.target.value)}
            />
            <br />

            <LoadingButton
               text="Soumettre les informations"
               loading={updateLoading}
               className="!bg-primary px-6 py-3 rounded-[18px]"
            />
         </form>
      </div>
   );
};

export default DeliveryForm;