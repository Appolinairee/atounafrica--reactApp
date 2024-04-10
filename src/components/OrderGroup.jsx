import { useEffect } from "react";
import ScrollBarHider from "../BaseComponents/ScrollBarHidden";
import { selectOrders, setOrders } from "../Features/orders/ordersSlice";
import axios from "../axiosConfig";
import { setError, setLoading } from "../Features/authSlice";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import NothingToDisplay from "../BaseComponents/NothingToDisplay";
import { Link } from "react-router-dom";
import { LiaSignInAltSolid } from "react-icons/lia";
import LoadingButton from "../BaseComponents/LoadingButton";

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
         className={`fixed top-0 right-0 h-full w-full bg-transparent ${
            orderState ? "z-50 block" : "z-0 w-0 hidden"
         }`}
      >
         <div
            className={`${
               orderState ? "translate-x-0" : "translate-x-full"
            } transition-all duration-200 absolute top-0 right-0 h-full w-[340px] shadow-boxShadow1 bg-light py-4 xs:w-full !z-20`}
         >
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

            {userId && !isLoading && orders && (
               <div>
                  {orders.map(
                     (
                        {
                           id,
                           amount_paid,
                           payment_status,
                           payment_type,
                           shipping_address,
                           total_amount,
                           status,
                        },
                        index
                     ) => (
                        <div key={index}>{amount_paid}</div>
                     )
                  )}
               </div>
            )}
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

export default OrderGroup;
