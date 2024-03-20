import { useQuery } from "react-query";
import axios from "../../axiosConfig";
import { useDispatch } from "react-redux";
import { setProducts } from "./productsSlice";

export const useFetchProducts = () => {
   const dispatch = useDispatch();

   const { isLoading, isError } = useQuery(
      "products",
      async () => {
         const response = await axios.get("products/presentations");
         return response; 
      },
      {
         onSuccess: (response) => {
            console.log("Fetch products successfull");

            if(response.data.data)
               dispatch(setProducts({products: response.data.data}))
         },
         onError: (error) => {
            console.log(error);
         }
      }
   );

   return { isLoading, isError };
};
