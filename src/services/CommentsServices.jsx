import { useMutation } from "react-query";
import axios from "../services/axiosConfig";
import { setToasterContent } from "../Features/appSlice";
import { useDispatch } from "react-redux";

export const useCreateComment = () => {
   const dispatch = useDispatch();

   const { mutate: createCommentMutation, isLoading } = useMutation(
      async (data) => {
         const {productId, content} = data;
         axios.post(`comments/${productId}`, content);
      },
      {
         onSuccess: (response) => {
            console.log(response);
            dispatch(
               setToasterContent("Votre avis est enrégistré avec succès.")
            );
         },
         onError: (error) => {
            console.error("Error:", error);
         },
      }
   );

   const createCommentService = (data) => {
      createCommentMutation(data);
   };

   return { createCommentService, isLoading };
};


export const useUpdateComment = (commentId) => {
   const dispatch = useDispatch();

   const {
      mutate: updateCommentMutation,
      isLoading,
      isError,
   } = useMutation(
      (data) => {
         axios.put(`comments/${commentId}`, { data });
      },
      {
         onSuccess: (data) => {
            console.log(data);
            dispatch(setToasterContent("Commentaire mis à jour avec succès."));
         },
      }
   );

   const updateProductCommandService = (data) => {
      updateCommentMutation(data);
   };

   return { updateProductCommandService, isLoading };
};