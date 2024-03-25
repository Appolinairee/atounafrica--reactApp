import { useQuery } from "react-query";
import axios from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "./productsSlice";
import { useState } from "react";

export const useFetchProducts = () => {
   const user = useSelector((state) => state.auth.user);
   const $userId = user?.id ? "&user_id=" + user.id : "";
   const dispatch = useDispatch();
   const Products = useSelector(selectProducts).products;
   const [willFetchNext, setWillFetchNext] = useState(true);

   const [page, setPage] = useState(1);
   
   const perPage = 6;

   const { isLoading, isError } = useQuery(
      ["products", page],

      async () => {
         const response = await axios.get(
            `products?perPage=${perPage}&page=${page}${$userId}`,
            {
               retry: { retries: 0 },
            }
         );

         return response;
      },
      {
         onSuccess: (response) => {
            console.log("Fetch products successfull");

            const newProducts =
               page === 1
                  ? response.data.data
                  : [...Products, ...response.data.data];
            
            console.log(response.data.pagination.total, newProducts.length)
            if(response.data.pagination.total <= newProducts.length){
               setWillFetchNext(false);
            }

            dispatch(setProducts({ products: newProducts }));
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   const handleSeeMore = () => {
      if(willFetchNext)
         setPage((prevPage) => prevPage + 1);
   };

   return { isLoading, isError, willFetchNext, handleSeeMore };
};