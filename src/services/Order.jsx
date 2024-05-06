import { useMutation } from "react-query";
import axios from "../services/axiosConfig";
import { useDispatch } from "react-redux";
import { setToasterContent } from "../Features/appSlice";
import { deleteOrder, makeOrderRefund } from "../Features/orders/ordersSlice";

export const useDeleteOrder = () => {
   const dispatch = useDispatch();

   const deleteOrderMutation = useMutation(
      (id) => axios.delete(`orders/${id}`),
      {
         onSuccess: (response, id) => {
            setToasterContent("Commande supprimée avec succès.");
            dispatch(deleteOrder(id));
         },
         onError: (error) => {
            console.error("Error deleting order item:", error);
         },
      }
   );

   const deleteOrderService = (id) => {
      deleteOrderMutation.mutate(id);
   };

   return { deleteOrderService, deleteLoading: deleteOrderMutation.isLoading };
};

export const useRefundPayment = () => {
   const dispatch = useDispatch();

   const refundPaymentMutation = useMutation(
      (orderId) => axios.put(`orders/${orderId}/refund`),
      {
         onSuccess: (response, orderId) => {
            dispatch(makeOrderRefund(orderId));
            
            dispatch(
               setToasterContent(
                  "Le processus de remboursement a démarré. Vous serez remboursé dans les prochaines minutes."
               )
            );
         },
         onError: (error) => {
            console.error("Error refund request order item:", error);
         },
      }
   );

   const refundPayment = (id) => {
      refundPaymentMutation.mutate(id);
   };

   return { refundPayment, refundLoading: refundPaymentMutation.isLoading };
};
