import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
   selectOrderById,
   updateOrders,
} from "../../Features/orders/ordersSlice";
import { useKKiaPay } from "kkiapay-react";
import axios from "../../services/axiosConfig";
import { useMutation } from "react-query";
import LoadingButton from "../../BaseComponents/LoadingButton";
import { setToasterContent } from "../../Features/appSlice";

const ProductPayment = ({ orderId }) => {
   const order = useSelector(selectOrderById(orderId));
   const [paymentMode, setPaymentMode] = useState(1);
   const user = useSelector((state) => state.auth.user);
   const { openKkiapayWidget, addKkiapayListener } = useKKiaPay();

   const token = useSelector((state) => state.auth.authToken);
   const [errorMessage, setErrorMessage] = useState(null);
   const dispatch = useDispatch();
   const minimumContribution = 5000;
   const navigate = useNavigate();
   const [paymentAmount, setPaymentAmount] = useState(order?.total_amount);

   const {
      mutate: updatePaymentDetails,
      isLoading,
      isError,
   } = useMutation(
      (updatedDetails) =>
         axios.put(`orders/${orderId}/payment`, updatedDetails),
      {
         onSuccess: (response) => {
            response = response.data.data;
            dispatch(updateOrders(response));

            if (response.status == 1 && response.payment_status == 1) {
               navigate(`/commande/${orderId}/livraison`);
            }
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
         setPaymentAmount(order?.total_amount);
      } else {
         setPaymentAmount(minimumContribution);
      }
   };

   const handleAmountInputChange = (e) => {
      const inputAmount = parseInt(e.target.value);
      if (inputAmount >= order.total_amount) {
         setPaymentMode(1);
         setPaymentAmount(order.total_amount);
      } else if (inputAmount >= minimumContribution) {
         setPaymentMode(0);
         let amount = inputAmount ? inputAmount : minimumContribution;
         setPaymentAmount(amount);
      } else {
         setPaymentAmount(minimumContribution);
         setErrorMessage(
            `La tranche minimale est de ${minimumContribution} Fcfa`
         );
      }
   };

   /*
      Refund payment mutation and handles
   */
   const { mutate: refundPaymentMutation, isLoading: refundLoading } =
      useMutation(
         () =>
            axios.put(`orders/${orderId}/refund`),
         {
            onSuccess: (response) => {
               console.log(response);
               dispatch(
                  setToasterContent(
                     "Le processus de remboursment a démarré. Vous serez remboursé dans les prochianes minutes."
                  )
               );
            },
            onError: (error) => {
               console.error("Error refund request order item:", error);
            },
         }
      );

   const refundPayment = () => {
      refundPaymentMutation();
   };

   if (!order) {
      return <p>Commande non chargée</p>;
   }

   return (
      <div className="paymentsSection">
         <h2>Informations sur la commande</h2>
         <p>Numéro de commande : {order.id}</p>
         <p>
            Date de création : {new Date(order.created_at).toLocaleDateString()}
         </p>
         <p>Total : {order.total_amount}</p>

         <hr />

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

         {errorMessage && <p>{errorMessage}</p>}

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
                        placeholder={minimumContribution}
                        min={minimumContribution}
                        step={1}
                        onChange={handleAmountInputChange}
                     />
                  </div>

                  <div>Paiement de : {paymentAmount} Fcfa</div>
               </div>
            )}
         </div>

         <div>
            <LoadingButton
               text="Effectuer le paiement"
               loading={isLoading}
               onClick={successHandler}
               className="!bg-primary px-6 py-3 rounded-[18px]"
            />
         </div>

         <div>
            <Link to={`/commande/${orderId}`}>Voir toute la commande</Link>

            {order.amount_paid > 0 && (
               <LoadingButton
                  text="Se faire rembourser"
                  loading={refundLoading}
                  onClick={refundPayment}
                  className="!bg-primary/75 px-2 py-2 rounded-[5px]"
               />
            )}
         </div>
      </div>
   );
};

export default ProductPayment;
