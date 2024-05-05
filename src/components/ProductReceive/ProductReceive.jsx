import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrderById, updateOrders } from "../../Features/orders/ordersSlice";
import { useMutation } from "react-query";
import axios from "../../services/axiosConfig";
import Order from "../Order";
import LoadingButton from "../../BaseComponents/LoadingButton";

const ProductReceive = ({ orderId }) => {
   const order = useSelector(selectOrderById(orderId));
   const [comments, setComments] = useState({});
   const authToken = useSelector((state) => state.auth.authToken);
   const dispatch = useDispatch();

   // Mutation pour mettre à jour un commentaire
   const {
      mutate: updateCommentMutation,
      isLoading,
      isError,
   } = useMutation(
      async (payload) => {
         const { productId, comment } = payload;
         const response = await axios.put(
            `comments/${productId}`,
            { comment },
         );
         return response.data.data;
      },
      {
         onSuccess: (data) => {
            dispatch(updateOrders(data));
         },
      }
   );

   const handleCommentChange = (productId, comment) => {
      setComments((prevComments) => ({
         ...prevComments,
         [productId]: comment,
      }));
   };

   const handleSubmitComment = (productId) => {
      const comment = comments[productId];
      if (comment) {
         updateCommentMutation({ productId, comment });
      }
   };

   return (
      <div className="receiveContent">
         <div className="receiveContent">
            <div className="reception">
               <h3>Confirmer votre réception</h3>

               <button>Confirmer la réception</button>

               <p>Vos commentaires comptent plus!</p>
               {order.order_items.map((orderItem, index) => (
                  <div key={index}>
                     <Order orderItem={orderItem} />
                     <textarea
                        value={comments[orderItem.product_id] || ""}
                        onChange={(e) =>
                           handleCommentChange(orderItem.product_id, e.target.value)
                        }
                        placeholder="Votre commentaire ici.."
                     />

                     <LoadingButton  text="Soumettre le commentaire" loading={isLoading} onClick={() => handleSubmitComment(orderItem.product_id)} classname="!bg-primary px-6 py-3 rounded-[18px]" />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProductReceive;