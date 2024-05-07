import { useDispatch } from "react-redux";
import {
   deleteOrder,
   updateOrders,
} from "../Features/orders/ordersSlice";
import ProductUnit from "./ProductUnit";
import OrderItemChange from "../BaseComponents/Orders/OrderItemChange";
import { useState } from "react";
import LoadingButton from "../BaseComponents/LoadingButton";
import { useMutation } from "react-query";
import axios from "../services/axiosConfig";
import Toaster from "../BaseComponents/Toaster";
import { BsPen } from "react-icons/bs";
import { setToasterContent } from "../Features/appSlice";

const OrderItem = ({
   orderItem,
   index,
   orderId,
   orderItemsNumber,
   isAmountPaid,
}) => {
   const [productCount, setProductCount] = useState(orderItem.quantity);
   const dispatch = useDispatch();

   const { mutate: updateOrderItemsMutation, isLoading: updateLoading } =
      useMutation(
         (formData) => axios.put(`orders/items/${orderItem.id}`, formData),
         {
            onSuccess: (response) => {
               let data = response.data.data;
               if (data) {
                  dispatch(updateOrders(data));
                  dispatch(
                     setToasterContent("Commande mise à jour avec succès.")
                  );
               }
            },
            onError: (error) => {
               console.error("Error updating order items:", error);
            },
         }
      );

   const { mutate: deleteOrderItemMutation, isLoading: deleteLoading } =
      useMutation(() => axios.delete(`orders/items/${orderItem.id}`), {
         onSuccess: (response) => {
            if (orderItemsNumber === 1) {
               dispatch(deleteOrder(orderId));
               dispatch(
                  setToasterContent("La commande est supprimée avec succès.")
               );
            } else {
               let data = response.data.data;
               if (data) {
                  dispatch(updateOrders(data));
                  dispatch(
                     setToasterContent(
                        "Un article de la commande a été supprimé."
                     )
                  );
               }
            }
         },
         onError: (error) => {
            console.error("Error deleting order item:", error);
         },
      });

   const updateOrder = () => {
      const updateData = {
         quantity: productCount,
      };

      updateOrderItemsMutation(updateData);
   };

   const deleteOrderItem = () => {
      deleteOrderItemMutation();
   };

   return (
      <div>
         <div>
            <h3>Produit {index + 1} de votre commande</h3>
            <hr />

            <Toaster icon={BsPen} content="Commande mise à jour" />

            {!isAmountPaid && (
               <>
                  <OrderItemChange
                     productCount={productCount}
                     setProductCount={setProductCount}
                     current_price={orderItem.temporal_price}
                  />

                  <div>
                     <div className="flex">
                        {orderItem.status <= 0 &&
                           productCount !== orderItem.quantity && (
                              <LoadingButton
                                 text="Mettre à jour"
                                 loading={updateLoading}
                                 onClick={updateOrder}
                                 className="bg-primary text-light font-medium p-[3px] px-[6px] rounded-lg text-[14px]"
                              />
                           )}

                        <LoadingButton
                           text="Suppression"
                           loading={deleteLoading}
                           onClick={deleteOrderItem}
                           className="bg-primary text-light font-medium p-[3px] px-[6px] rounded-lg text-[14px]"
                        />
                     </div>
                  </div>
               </>
            )}
         </div>

         <ProductUnit
            slug_name={orderItem.slug_name}
            className="!w-[90%]"
            type="order"
         />
      </div>
   );
};

export default OrderItem;
