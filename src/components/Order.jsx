import { useState } from "react";
import { ImClock } from "react-icons/im";
import Command from "../assets/images/illu-undraw_walking_outside_5ueb.svg";
import {
   LiaChevronCircleDownSolid,
   LiaChevronCircleUpSolid,
} from "react-icons/lia";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "../services/axiosConfig";
import { useDispatch } from "react-redux";
import { setToasterContent } from "../Features/appSlice";
import LoadingButton from "../BaseComponents/LoadingButton";

const Order = ({ order, delieveringStatus = false, handleOrderState }) => {
   const [moreState, setMoreState] = useState(delieveringStatus);
   const dispatch = useDispatch();

   console.log(order)

   const {
      id,
      total_amount,
      status,
      shipping_address,
      shipping_price,
      shipping_preview,
      shipping_date,
      amount_paid,
      payment_type,
      time_ago,
      order_items_length,
   } = order;

   const statusMap = {
      "-1": "Commande annulée",
      0: "En cours de paiement",
      1: "En cours de livraison",
      2: "En attente de livraison",
      3: "Commande livrée",
      4: "En attente de livraison",
      default: "En cours ...",
   };

   const actionMap = {
      "-1": "Suprimer des commandes",
      0: "Effectuer un paiement",
      1: "Détails de la livraison",
      2: "Détails de la livraison",
      3: "Livraison effectuée",
      4: "Donner votre avis",
      default: "Configurer",
   };

   const linkMap = {
      "-1": `/commande/${id}`,
      0: `/commande/${id}/paiement`,
      1: `/commande/${id}/livraison`,
      2: `/commande/${id}/livraison`,
      3: `/commande/${id}/livraison`,
      4: `/commande/${id}/reception`,
      default: `/commande/${id}`,
   };

   const expressiveStatus = statusMap[status] || statusMap.default;
   const expressiveAction = actionMap[status] || actionMap.default;
   const activeLink = linkMap[status] || linkMap.default;

   const { mutate: deleteOrderMutation, isLoading: deleteLoading } =
      useMutation(
            () => axios.delete(`orders/${id}`, {
               retry: { retries: 0 },
            }),
         {
            onSuccess: (response) => {
               dispatch(deleteOrder(id));
               dispatch(setToasterContent("Commande supprimée avec succès."));
            },
            onError: (error) => {
               console.error("Error deleting order item:", error);
            },
         }
      );

   const deleteOrder = () => {
      deleteOrderMutation();
   };

   return (
      <div className="w-[95%] mx-auto border-dark/20 rounded-[10px] p-2 mb-6 shadow-boxShadow1 cursor-pointer">
         <div className="flex !items-start gap-3">
            <div className="h-full w-full">
               <p className="bg-primary/10 font-semibold pl-[15px] rounded-[15px] whitespace-nowrap text-[11px] px-2 py-1 relative w-fit">
                  <span className="absolute left-[5px] top-1/2 -translate-y-1/2 bg-red-700 w-[7px] h-[7px] rounded-full"></span>
                  {expressiveStatus}.
               </p>

               <p className="my-1 text-[14px]">
                  <span className="font-medium">{order_items_length}</span>{" "}
                  produit
                  {order_items_length > 1 ? "s" : ""}
               </p>

               <p className="my-1 text-[14px] mb-2">
                  Montant payé: {amount_paid ? amount_paid + "Fr" : 0}
               </p>

               <span className="text-[12px] flex w-fit gap-1">
                  <ImClock />
                  Mise à jour {time_ago}
               </span>
            </div>

            <div className="h-[90px] max-w-[50%] border-solid border-[2px] border-dark/10 rounded-md ">
               <img
                  className="h-full w-auto rounded-md"
                  src={Command}
                  alt="Commande 2"
               />
            </div>
         </div>

         <div className="border-solid border-0 border-t-[1px] mt-8 pt-6 border-dark/20 relative text-[14px]">
            <p className="absolute bg-red -top-[10px] left-1/2 -translate-x-1/2 text-[12px] whitespace-nowrap bg-light px-3 border-solid border-dark/10 rounded-xl border-[1px]">
               Résumé de la commande
            </p>

            <div>
               <p>Total: {total_amount} Fcfa</p>
               <p>
                  Frais de livraison:{" "}
                  {shipping_price !== null ? shipping_price : "Pas défini"} Fcfa
               </p>
               <p>
                  Type de paiement: {payment_type ? "Direct" : "Cotisation"}{" "}
               </p>
            </div>
         </div>

         {moreState && (
            <div className="border-solid border-0 border-t-[1px] mt-8 pt-6 border-dark/20 relative text-[14px]">
               <p className="absolute bg-red -top-[10px] left-1/2 -translate-x-1/2 text-[12px] whitespace-nowrap bg-light px-3">
                  Détails sur la livraison
               </p>

               <div>
                  <p>Adresse de livraison: {shipping_address}</p>

                  <p>
                     Frais de livraison:{" "}
                     {shipping_price !== null
                        ? shipping_price + "Fcfa"
                        : "Pas défini"}
                  </p>
                  <p>
                     Date de livraison:{" "}
                     {shipping_date
                        ? new Date(shipping_date).toLocaleString()
                        : "Pas définie"}{" "}
                  </p>
               </div>

               {shipping_preview && (
                  <div>
                     <p>Prévisualisation de votre commande à livrer</p>

                     <img
                        className="mt-4 rounded-xl w-full h-auto max-h-[80px]"
                        src={
                           process.env.REACT_APP_API_URL +
                           "storage/" +
                           shipping_preview
                        }
                        alt="Prévisualisation de la livraison"
                     />
                  </div>
               )}
            </div>
         )}

         <div className="flex mt-4 gap-2 text-[14px]">
            <p
               className="text-[15px] bg-dark/10 p-2 rounded-lg hover:bg-dark/20 transition-all cursor-pointer"
               onClick={() => setMoreState(!moreState)}
            >
               {!moreState ? (
                  <LiaChevronCircleDownSolid />
               ) : (
                  <LiaChevronCircleUpSolid />
               )}
            </p>

            <Link to={`/commande/${id}`} className="w-full" onClick={handleOrderState}>
               <button
                  className="border-solid border-[2px] border-dark/10 p-1 rounded-md w-full"
               >
                  Détails
               </button>
            </Link>

            <Link to={activeLink} className="w-full" onClick={handleOrderState}>
               <button
                  className="rounded-md w-full border-solid border-[2px] border-primary bg-primary whitespace-nowrap p-1 text-light font-medium"
               >
                  {expressiveAction}
               </button>
            </Link>
         </div>

         {order.amount_paid <= 0 && (
            <LoadingButton
               text="Suppression"
               loading={deleteLoading}
               onClick={deleteOrder}
               className="bg-primary text-light font-medium p-[3px] px-[6px] rounded-lg text-[14px]"
            />
         )}
      </div>
   );
};

export default Order;
