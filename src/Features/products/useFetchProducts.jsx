import { useQuery } from "react-query";
import axios from "../../axiosConfig";
import { setProducts } from "./productsSlice";
import { useDispatch } from "react-redux";

export const useFetchProducts = () => {
   const dispatch = useDispatch();

   const { isLoading, isError } = useQuery(
      "products",
      async () => {
         const response = await axios.get("products/presentations");
      },
      {
         onSuccess: (response) => {
            console.log("Fetch products successful");
            console.log(response.data.data)
            dispatch(setProducts({products: response.data.data}))
         }
      }
   );

   return { isLoading, isError };
};
