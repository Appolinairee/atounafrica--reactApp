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

   const handleSubmitComment = (e) => {
      e.preventDefault();

      if (comment && comment.length > 4) {
         createCommentService({
            productId: orderItem.product_id,
            content: { content: comment },
         });
         setComment("");
      }
   };

   console.log(isLoading);

   return (
      <div>
         <ProductUnit slug_name={orderItem.slug_name} type="reception" />

         <form action="">
            <label htmlFor="">Votre premier avis sur le commentaire.</label>
            <textarea
               onChange={handleCommentChange}
               value={comment}
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