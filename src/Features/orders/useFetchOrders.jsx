import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrders, setLoading, setError } from "./ordersSlice";
import axios from "../../axiosConfig";

const useFetchOrders = () => {
   const dispatch = useDispatch();
   const authToken = useSelector((state) => state.auth.authToken);

   const fetchOrders = async () => {
      dispatch(setLoading());
      try {
         const response = await axios.get("api/orders", {
            headers: {
               Authorization: `Bearer ${authToken}`,
            },
            retry: { retries: 2 },
         });

         dispatch(setOrders(response.data));
      } catch (error) {
         console.error('Error fetching orders:', error);
         dispatch(setError(error.message));
      }
   };

   useEffect(() => {
      if (authToken) {
         fetchOrders(); 
      }
   }, [authToken, dispatch]);

   return fetchOrders;
};

export default useFetchOrders;