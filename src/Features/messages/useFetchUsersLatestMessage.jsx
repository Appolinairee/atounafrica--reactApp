import { useQuery } from "react-query";
import axios from "../../axiosConfig";
import { useState } from "react";

export const useFetchLatestMessages = () => {

   const token = localStorage.getItem('token');
   const [LatestMessages, setLatestMessages] = useState([]);

   const { isLoading, isError } = useQuery(
      "products",

      async () => {
         const response = await axios.get(
            `messages/users`,
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
            console.log(response);
            setLatestMessages(response.data.data);
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   return { isLoading, isError, LatestMessages };
};