import { useEffect } from "react";
import useFetchOrders from "../Features/orders/useFetchOrders";

const OrderGroup = () => {
   const { fetchOrders } = useFetchOrders();

   useEffect(() => {
    fetchOrders();
   }, [fetchOrders]);

   return <div></div>;
};

export default OrderGroup;