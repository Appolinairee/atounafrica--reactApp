import { useQuery } from "react-query";
import axios from "../../services/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderById, updateOrders } from "../orders/ordersSlice";
import LoadingButton from "../../BaseComponents/LoadingButton";
import ServerError from "../../pages/ServerError";

const OrderFetcher = ({ orderId }) => {
   const dispatch = useDispatch();
   const order = useSelector(selectOrderById(orderId));

   const { isLoading, isError } = useQuery(
      [`order-${orderId}`, orderId],

      async () => {
         const response = await axios.get(`orders/${orderId}`);
         return response;
      },
      {
         onSuccess: (response) => {
            response = response.data.data;
            if(response){
               dispatch(updateOrders(response));
            }
         },
         onError: (error) => {
            console.log(error);
         },
         enabled: !order || (order && !order.order_items),
      },
      [orderId]
   );

   if (isLoading) {
      return (
         <div className="my-4">
            <LoadingButton
               text="En cours de chargement"
               loading={isLoading}
               className="!text-dark"
            />
         </div>
      );
   }

   if (isError) {
      return <ServerError />;
   }
};

export default OrderFetcher;
