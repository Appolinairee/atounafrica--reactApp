import React, { useState } from "react";
import LoadingButton from "../../BaseComponents/LoadingButton";
import { useCreateComment } from "../../services/CommentsServices";
import ProductUnit from "../ProductUnit";

export const FirstViewComment = ({ orderItem }) => {
   const [comment, setComment] = useState("");
   const { createCommentService, isLoading } = useCreateComment();

   const handleCommentChange = (e) => {
      setComment(e.target.value);
   };

   const handleSubmitComment = async () => {
      if (comment && comment.length > 4) {
         await createCommentService({
            productId: orderItem.product_id,
            content: { content: comment },
         });
      }
   };

   return (
      <div>
         <ProductUnit slug_name={orderItem.slug_name} type="reception" />

         <form action="">
            <label htmlFor="">Votre premier avis sur le commentaire.</label>
            <textarea
               onChange={handleCommentChange}
               required
               placeholder="Votre commentaire ici.."
            />

            <LoadingButton
               text="Soumettre le commentaire"
               loading={isLoading}
               onClick={handleSubmitComment}
               className="bg-primary text-light font-medium p-[3px] px-[6px] rounded-lg text-[14px]"
            />
         </form>
      </div>
   );
};
