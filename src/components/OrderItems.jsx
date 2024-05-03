import { useDispatch, useSelector } from "react-redux";
import {
   selectOrderById,
   updateOrderItems,
   updateOrders,
} from "../Features/orders/ordersSlice";
import ProductUnit from "./ProductUnit";
import OrderItemChange from "../BaseComponents/Orders/OrderItemChange";
import { useState } from "react";
import LoadingButton from "../BaseComponents/LoadingButton";
import { useMutation } from "react-query";
import axios from "../axiosConfig";
import Toaster from "../BaseComponents/Toaster";
import { BsPen } from "react-icons/bs";
import { setToasterContent } from "../Features/appSlice";

const OrderItems = ({ orderId }) => {
   const order = useSelector(selectOrderById(parseInt(orderId, 10)));

   return (
      <div>
         {order?.order_items?.map((orderItem, index) => (
            <OrderItem
               key={orderItem.id}
               orderItem={orderItem}
               index={index}
               orderId={orderId}
            />
         ))}
      </div>
   );
};

const OrderItem = ({ orderItem, index, orderId }) => {
   const [productCount, setProductCount] = useState(orderItem.quantity);
   const token = localStorage.getItem("token");
   const dispatch = useDispatch();

   const { mutate: updateOrderItemsMutation, isLoading: updateLoading } =
      useMutation(
         (formData) =>
            axios.put(`orders/items/${orderItem.id}`, formData, {
               headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
               },
               retry: { retries: 0 },
            }),
         {
            onSuccess: (response) => {
               let data = response.data.data;
               if (data) {
                  console.log(data)
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
      useMutation(
         () =>
            axios.delete(`orders/items/${orderItem.id}`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            }),
         {
            onSuccess: (response) => {
               console.log(response);
               dispatch(setToasterContent("Commande supprimée avec succès."));
            },
            onError: (error) => {
               console.error("Error deleting order item:", error);
            },
         }
      );

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
         </div>

         <ProductUnit
            slug_name={orderItem.slug_name}
            className="!w-[90%]"
            type="order"
         />
      </div>
   );
};

export default OrderItems;
