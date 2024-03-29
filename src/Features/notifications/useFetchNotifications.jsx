import { useQuery } from "react-query";
import axios from "../../axiosConfig";
import { useState } from "react";

export const useFetchNotifications = () => {

   const token = localStorage.getItem('token');
   const [Notifications, setNotifications] = useState([]);

   const { isLoading, isError } = useQuery(
      "products",

      async () => {
         const response = await axios.get(
            `notifications`,
            {
               headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
               retry: { retries: 0 },
            }
         );

         return response;
      },
      {
         onSuccess: (response) => {
            setNotifications(response.data.data);
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   return { isLoading, isError, Notifications };
};