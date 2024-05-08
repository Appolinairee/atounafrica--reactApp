import { useMutation } from "react-query";
import axios from "../services/axiosConfig";
import { useDispatch } from "react-redux";
import { setToasterContent } from "../Features/appSlice";
import { deleteOrder, makeOrderRefund, updateOrderStatusAction, updateOrders } from "../Features/orders/ordersSlice";
import { useNavigate } from "react-router-dom";

export const useUpdateOrder = (orderId) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const {
      mutate: updateOrderMutation,
      isLoading,
      isError,
   } = useMutation(
      (data) =>
         axios.post(`orders/${orderId}`, data),
      {
         onSuccess: (response) => {
            response = response.data.data;
            dispatch(updateOrders(response));

            navigate(`/commande/${orderId}/reception`);
            setToasterContent("Commande mise à jour avec succès.");

            if (response.status == 2) {
            }
         },
         onError: (error) => {
            console.error("Error when updated order:", error);
         },
      }
   );

   const updateOrderService = (data) => {
      updateOrderMutation(data);
   };

   return { updateOrderService, updateLoading: isLoading };
};

export const useUpdateOrderStatus = (orderId) => {
   const dispatch = useDispatch();

   const {
      mutate: updateOrderMutation,
      isLoading,
   } = useMutation(
      (data) =>
         axios.post(`orders/${orderId}`, data),
      {
         onSuccess: (response) => {
            response = response.data.data;
            dispatch(updateOrderStatusAction({ orderId, status: 4 }));
            setToasterContent("Confirmation de réception pris en compte.");
         },
         onError: (error) => {
            console.error("Error when updated order:", error);
         },
      }
   );

   const updateOrderStatusService = (data) => {
      updateOrderMutation(data);
   };

   return { updateOrderStatusService, updateLoading: isLoading };
};

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
