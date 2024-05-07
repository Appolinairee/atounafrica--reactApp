import { useMutation } from "react-query";
import axios from "../services/axiosConfig";
import { useDispatch } from "react-redux";
import { setToasterContent } from "../Features/appSlice";
import { updateOrders } from "../Features/orders/ordersSlice";
import { useNavigate } from "react-router-dom";

export const useCommentProduct = () => {

   const {
      mutate: updateCommentMutation,
      isLoading,
      isError,
   } = useMutation(
      async (payload) => {
         const { productId, comment } = payload;
         const response = await axios.put(`comments/${productId}`, { comment });
         return response.data.data;
      },
      {
         onSuccess: (data) => {
            console.log(data);
            // dispatch(updateOrders(data));
         },
      }
   );

   const updateProductCommandService = (data) => {
    updateCommentMutation(data);
   };

   return { updateProductCommandService, isLoading };
};

export const useCreateCommentProduct = () => {

    const {
       mutate: updateCommentMutation,
       isLoading,
       isError,
    } = useMutation(
       async (payload) => {
          const { productId, comment } = payload;
          const response = await axios.put(`comments/${productId}`, { comment });
          return response.data.data;
       },
       {
          onSuccess: (data) => {
             console.log(data);
             // dispatch(updateOrders(data));
          },
       }
    );
 
    const updateProductCommandService = (data) => {
     updateCommentMutation(data);
    };
 
    return { updateProductCommandService, isLoading };
 };
