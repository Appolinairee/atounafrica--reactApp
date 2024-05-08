import { useMutation } from "react-query";
import axios from "../services/axiosConfig";
import { setToasterContent } from "../Features/appSlice";

export const useCreateComment = () => {
   const { mutate: createCommentMutation, isLoading } = useMutation(
      async (data) => {
         const {productId, content} = data;
            axios.post(`comments/${productId}`, content);
            setToasterContent("Votre avis est enrégistré avec succès.");
      },
      {
         onSuccess: (data) => {
            setToasterContent("Votre avis est enrégistré avec succès.");
         },
         onError: (error) => {
            console.error("Error when updated view:", error);
         },
      }
   );

   const createCommentService = (data) => {
      createCommentMutation(data);
   };

   return { createCommentService, isLoading };
};

export const useCommentProduct = () => {
   const {
      mutate: updateCommentMutation,
      isLoading,
      isError,
   } = useMutation(
      async (data) => {
         const { productId, comment } = data;
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