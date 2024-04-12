import { useEffect, useState } from "react";
import ScrollBarHider from "../BaseComponents/ScrollBarHidden";
import { selectOrders, setOrders } from "../Features/orders/ordersSlice";
import axios from "../axiosConfig";
import { setError, setLoading } from "../Features/authSlice";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import NothingToDisplay from "../BaseComponents/NothingToDisplay";
import { Link } from "react-router-dom";
import { LiaChevronCircleUpSolid, LiaSignInAltSolid } from "react-icons/lia";
import LoadingButton from "../BaseComponents/LoadingButton";
import { ImClock } from "react-icons/im";
import { LiaChevronCircleDownSolid } from "react-icons/lia";

import Command from "../assets/images/illu-undraw_walking_outside_5ueb.svg";

const OrderGroup = ({ orderState, handleOrderState }) => {
   const dispatch = useDispatch();
   const authToken = useSelector((state) => state.auth.authToken);
   const user = useSelector((state) => state.auth.user);
   const userId = user?.id;
   const orders = useSelector(selectOrders);

   const fetchOrders = async () => {
      dispatch(setLoading());
      try {
         const response = await axios.get(`orders/user/${userId}`, {
            headers: {
               Authorization: `Bearer ${authToken}`,
            },
            retry: { retries: 2 },
         });

         return response;
      } catch (error) {
         console.error("Error fetching orders:", error);
         dispatch(setError(error.message));
      }
   };

   const { isLoading, isError } = useQuery("orders", fetchOrders, {
      enabled: !!orderState && !!userId,
      onSuccess: (response) => {
         dispatch(setOrders(response.data.data));
      },
      onError: (error) => {
         console.error("Error fetching orders:", error);
         dispatch(setError(error.message));
      },
   });

   useEffect(() => {
      if (orderState && !!userId) {
         fetchOrders();
      }
   }, [orderState, userId]);

   return (
      <div
         className={`fixed top-0 right-0 h-auto w-full bg-transparent ${
            orderState ? "z-50 block" : "z-0 w-0 hidden"
         }`}
      >
         <div
            className={`${
               orderState ? "translate-x-0" : "translate-x-full"
            } transition-all duration-200 absolute top-0 right-0 w-[370px] shadow-boxShadow1  py-4 xs:w-full bg-light !z-20 min-h-full overflow-y-auto`}
         >
            <h3 className="text-center font-medium">Tous vos achats</h3>

            {!userId && (
               <NothingToDisplay text="Veuillez-vous connecter pour voir vos commandes ici.">
                  <Link to="connexion">
                     <div className="flex gap-3 text-[15px] border-solid rounded-2xl p-[6px] px-[12px] border-dark/20 border-[1px] large:hidden">
                        <LiaSignInAltSolid />
                        Se connecter
                     </div>
                  </Link>
               </NothingToDisplay>
            )}

            {userId && isLoading && (
               <LoadingButton
                  loading={true}
                  className="!bg-transparent !text-dark px-6 py-3"
               />
            )}

            {userId && isError && (
               <p className="my-4 text-center">Une erreur s'est produite.</p>
            )}

            {userId &&
               !isLoading &&
               orders &&
               (orders.length === 0 ? (
                  <NothingToDisplay text="Aucune notification" />
               ) : (
                  <div className="border-solid max-h-[92vh] mt-[2vh] border-x-0 border-y-[.5px] border-dark/5 overflow-y-auto scrollbar-thin p-2">
                     {orders.map((order, index) => (
                        <div key={index}>
                           <Order order={order} />
                        </div>
                     ))}
                  </div>
               ))}
         </div>

         {orderState && (
            <ScrollBarHider
               hidden={true}
               handleSearchState={handleOrderState}
               className="!z-10"
            />
         )}
      </div>
   );
};

const Order = ({ order, delieveringStatus = false }) => {
   const [moreState, setMoreState] = useState(delieveringStatus);

   const {
      total_amount,
      status,
      shipping_address,
      shipping_price,
      shipping_preview,
      shipping_date,
      amount_paid,
      payment_type,
      order_items,
      time_ago,
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

   const expressiveStatus = statusMap[status] || statusMap.default;
   const expressiveAction = actionMap[status] || actionMap.default;

   return (
      <div className="w-[95%] mx-auto border-dark/20 rounded-[10px] p-2 mb-6 shadow-boxShadow1 ">
         <div className="flex !items-start gap-3">
            <div className="h-full w-full">
               <p className="bg-primary/10 font-semibold pl-[15px] rounded-[15px] whitespace-nowrap text-[11px] px-2 py-1 relative w-fit">
                  <span className="absolute left-[5px] top-1/2 -translate-y-1/2 bg-red-700 w-[7px] h-[7px] rounded-full"></span>
                  {expressiveStatus}.
               </p>

               <p className="my-1">
                  <span className="font-medium ">{order_items.length}</span>{" "}
                  produit
                  {order_items.length > 1 ? "s" : ""}
               </p>

               <p>Montant payé: {amount_paid ? amount_paid : 0}</p>

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

         <div className="border-solid border-0 border-t-[1px] mt-4 pt-4 border-dark/20 relative">
            <p className="absolute bg-red -top-[10px] left-1/2 -translate-x-1/2 text-[12px] whitespace-nowrap bg-light px-3">
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
            <div className="border-solid border-0 border-t-[1px] mt-4 pt-4 border-dark/20 relative">
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

         <div className="flex mt-4 gap-1 text-[14px]">
            <p
               className="text-[15px] bg-dark/10 p-2 rounded-lg hover:bg-dark/20 transition-all cursor-pointer"
               onClick={() => setMoreState(!moreState)}
            >
               {!moreState ? <LiaChevronCircleUpSolid /> : <LiaChevronCircleDownSolid /> }
            </p>

            <button className="border-solid border-[2px] border-dark/10 p-1 rounded-md w-full ">
               Détails
            </button>

            <button className="rounded-md w-full border-solid border-[2px] border-primary bg-primary whitespace-nowrap p-1  text-light font-medium">
               {expressiveAction}
            </button>
         </div>
      </div>
   );
};

export default OrderGroup;
