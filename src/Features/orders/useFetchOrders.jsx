import { useDispatch, useSelector } from "react-redux";
import { setOrders, setLoading, setError } from "./ordersSlice";
import { useQuery } from "react-query";
import axios from "../../services/axiosConfig";

const useFetchOrders = () => {
   const dispatch = useDispatch();
   const userId = "?user_id=" + useSelector((state) => state.auth.userId);


   const { isLoading, isError } = useQuery(
      "orders",
      async () => {
         dispatch(setLoading());
         const response = await axios.get(`orders/user/${userId}`);
         return response;
      },
      {
         onSuccess: (response) => {
            console.log(response);
            dispatch(setOrders(response.data.data));
         },
         onError: (error) => {
            console.error("Error fetching orders:", error);
            dispatch(setError(error.message));
         },
         enabled: !!userId,
      }
   );

   return { isLoading, isError };
};

export default useFetchOrders;