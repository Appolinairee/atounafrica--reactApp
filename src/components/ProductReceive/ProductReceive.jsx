import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectOrderById } from "../../Features/orders/ordersSlice";
import LoadingButton from "../../BaseComponents/LoadingButton";
import { useCommentProduct } from "../../services/ProductsService";
import ProductUnit from "../ProductUnit";

const ProductReceive = ({ orderId }) => {
   const order = useSelector(selectOrderById(orderId));
   const [comments, setComments] = useState({});
   const { updateProductCommandService, isLoading } = useCommentProduct();

   const handleCommentChange = (productId, comment) => {
      setComments((prevComments) => ({
         ...prevComments,
         [productId]: comment,
      }));
   };

   const handleSubmitComment = (productId) => {
      const comment = comments[productId];
      if (comment && comment.length > 4) {
         updateProductCommandService({ productId, comment });
      }
   };

   return (
      <div className="receiveContent">
         <div className="receiveContent">
            <div className="reception">
               <h3>Confirmer votre réception</h3>

               <button>Confirmer la réception</button>

               <p>Vos commentaires comptent plus!</p>
               {order?.order_items.map((orderItem, index) => (
                  <div key={index}>
                     <ProductUnit slug_name={orderItem.slug_name} type="reception" />
                     <textarea
                        value={comments[orderItem.product_id] || ""}
                        onChange={(e) =>
                           handleCommentChange(orderItem.product_id, e.target.value)
                        }
                        required
                        placeholder="Votre commentaire ici.."
                     />

                     <LoadingButton  text="Soumettre le commentaire" loading={isLoading} onClick={() => handleSubmitComment(orderItem.product_id)} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProductReceive;