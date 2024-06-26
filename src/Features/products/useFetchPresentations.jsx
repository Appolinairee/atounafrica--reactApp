import { useQuery } from "react-query";
import axios from "../../services/axiosConfig";
import { useDispatch } from "react-redux";
import { setPresentations } from "./presentationsSlice";

export const useFetchPresentations = () => {
   const dispatch = useDispatch();

   const { isLoading, isError } = useQuery(
      "presentations",
      async () => {
         const response = await axios.get("products/presentations?user_id=");
         return response; 
      },
      {
         onSuccess: (response) => {

            if(response.data.data)
               dispatch(setPresentations({presentations: response.data.data}))
         },
         onError: (error) => {
            console.log(error);
         }
      }
   );

   return { isLoading, isError };
};