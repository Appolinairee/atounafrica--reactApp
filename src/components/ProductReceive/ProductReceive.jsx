import React from "react";
import { useSelector } from "react-redux";
import { selectOrderById } from "../../Features/orders/ordersSlice";
import LoadingButton from "../../BaseComponents/LoadingButton";
import { useUpdateOrderStatus } from "../../services/Order";
import { FirstViewComment } from "../comments/FirstCommentView";

const ProductReceive = ({ orderId }) => {
   const order = useSelector(selectOrderById(orderId));
   const { updateOrderStatusService, updateLoading } =
      useUpdateOrderStatus(orderId);

   return (
      <div className="receiveContent">
         <div className="receiveContent">
            <div className="reception">
               <h3>Confirmer votre réception</h3>

               <LoadingButton
                  text="Confirmation de réception"
                  loading={updateLoading}
                  onClick={() => updateOrderStatusService({ status: 4 })}
                  classNasme="bg-primary text-light font-medium p-[3px] px-[6px] rounded-lg text-[14px]"
               />

               <p>Vos commentaires comptent plus!</p>
               {order?.order_items.map((orderItem, index) => (
                  <FirstViewComment key={index} orderItem={orderItem} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProductReceive;
