import { useQuery } from "react-query";
import axios from "../../services/axiosConfig";
import { useState } from "react";

export const useFetchLatestMessages = () => {

   const token = localStorage.getItem('token');
   const [LatestMessages, setLatestMessages] = useState([]);

   const { isLoading, isError } = useQuery(
      "messages",

      async () => {
         const response = await axios.get(
            `messages/users`
         );

         return response;
      },
      {
         onSuccess: (response) => {
            setLatestMessages(response.data.data);
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   return { isLoading, isError, LatestMessages };
};