import { useEffect } from "react";
import useFetchOrders from "../Features/orders/useFetchOrders";
import ScrollBarHider from "../BaseComponents/ScrollBarHidden";
import { useSelector } from "react-redux";

const OrderGroup = ({ orderState, handleOrderState }) => {
   const fetchOrders = useFetchOrders();
   const orders = useSelector();

   useEffect(() => {
      if (orderState) {
         fetchOrders();
      }
   }, [fetchOrders, orderState]);

   return (
      <div
         className={`fixed top-0 right-0 h-full w-full bg-transparent ${
            orderState ? "z-50 block" : "z-0 w-0 hidden"
         }`}
      >
         <div
            className={`${
               orderState ? "translate-x-0" : "translate-x-full"
            } transition-all duration-200 absolute top-0 right-0 h-full w-[340px] shadow-boxShadow1 bg-light py-4 xs:w-full !z-20`}
         ></div>

         {orderState && (
            <ScrollBarHider
               hidden={true}
               handleSearchState={handleOrderState}
               className="!z-10"
            />
         )}
      </div>
   );
};

export default OrderGroup;
