import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   selectOrderById,
   updateOrders,
} from "../../Features/orders/ordersSlice";
import Order from "../Order";
import { useKKiaPay } from "kkiapay-react";
import axios from "../../axiosConfig";
import { useMutation } from "react-query";
import LoadingButton from "../../BaseComponents/LoadingButton";

const ProductPayment = ({ handleState, orderId }) => {
   const order = useSelector(selectOrderById(orderId));
   const [paymentMode, setPaymentMode] = useState(1);
   const user = useSelector((state) => state.auth.user);
   const { openKkiapayWidget, addKkiapayListener } = useKKiaPay();
   const [paymentAmount, setPaymentAmount] = useState(order.total_amount);
   const authToken = useSelector((state) => state.auth.authToken);
   const [errorMessage, setErrorMessage] = useState(null);
   const dispatch = useDispatch();

   const openKkiapay = () => {
      openKkiapayWidget({
         amount: paymentAmount,
         api_key: process.env.REACT_APP_KKIAPAY_API_KEY,
         sandbox: true,
         fullname: user.name,
         name: user.name,
         email: user.email,
         phone: "97000000",
      });
   };

   const handlePaymentModeChange = (mode) => {
      setPaymentMode(mode);
      if (mode === 1) {
         setPaymentAmount(order.total_amount);
      }
   };

   const handleAmountInputChange = (e) => {
      const inputAmount = parseInt(e.target.value);
      if (inputAmount >= order.total_amount) {
         setPaymentMode(1);
         setPaymentAmount(order.total_amount);
      } else {
         setPaymentMode(0);
         setPaymentAmount(inputAmount);
      }
   };

   const {
      mutate: updatePaymentDetails,
      isLoading,
      isError,
   } = useMutation(
      (updatedDetails) =>
         axios.put(`orders/${orderId}/payment`, updatedDetails, {
            headers: {
               Authorization: `Bearer ${authToken}`,
            },
            retry: { retries: 0 },
         }),
      {
         onError: (error) => {
            console.error(
               "Erreur lors de la mise à jour des détails de paiement :",
               error
            );
         },
         onSuccess: (response) => {
            console.log(response, response.data, response.data.data);
            response = response.data.data;
            dispatch(updateOrders(response));

            if (response.status == 2 && response.payment_status == 1) {
               handleState(2);
            }

            console.log("Paiement réussi. Détails mis à jour avec succès.");
         },
      }
   );

   const successHandler = () => {
      updatePaymentDetails({
         amount_paid: paymentAmount,
         payment_type: paymentMode,
      });
   };

   const failureHandler = () => {
      setErrorMessage("Échec de l'opération de paiement. Veuillez réessayer.");
   };

   useEffect(() => {
      addKkiapayListener("success", successHandler);
      addKkiapayListener("failed", failureHandler);
   }, [addKkiapayListener]);

   return (
      <div className="paymentsSection">
         <h2>Informations sur la commande</h2>
         <p>Numéro de commande : {order.id}</p>
         <p>
            Date de création : {new Date(order.created_at).toLocaleDateString()}
         </p>
         <p>Total : {order.total_amount}</p>

         <hr />

         {errorMessage && <p>{errorMessage}</p>}

         {/* Afficher les options de paiement */}
         <div>
            <label>
               <input
                  type="radio"
                  value={1}
                  checked={paymentMode === 1}
                  onChange={() => handlePaymentModeChange(1)}
               />
               Paiement direct
            </label>
            <br />
            <label>
               <input
                  type="radio"
                  value={0}
                  checked={paymentMode === 0}
                  onChange={() => handlePaymentModeChange(0)}
               />
               Paiement par cotisation
            </label>
         </div>

         <p>Détails de sous-commandes</p>
         {order.order_items.map((orderItem, index) => (
            <div key={index}>
               <Order orderItem={orderItem} />
            </div>
         ))}

         <div>
            {paymentMode === 1 ? (
               <div>Paiement de : {order.total_amount} Fcfa</div>
            ) : (
               <div>
                  <div>
                     <label htmlFor="Enter votre tranche de cotisation">
                        Enter votre tranche de cotisation
                     </label>
                     <input
                        type="number"
                        placeholder="5000"
                        min={5000}
                        step={1}
                        onChange={handleAmountInputChange}
                     />
                  </div>

                  <div>Paiement de : {paymentAmount} Fcfa</div>
               </div>
            )}
         </div>

         {/* <button onClick={successHandler} className="bg-primary px-8 py-4 rounded-full text-light">
            Effectuer le paiement
         </button> */}

         <div>
            <LoadingButton
               text="Effectuer le paiement"
               loading={isLoading}
               onClick = {successHandler}
               className="!bg-primary px-6 py-3 rounded-[18px]"
            />
         </div>
      </div>
   );
};

export default ProductPayment;
