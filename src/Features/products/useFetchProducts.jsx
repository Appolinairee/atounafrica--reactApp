import { useQuery } from "react-query";
import axios from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "./productsSlice";
import { useState } from "react";

export const useFetchProducts = () => {
   const user = useSelector((state) => state.auth.user);
   const userId = user?.id ? "&user_id=" + user.id : "";
   const dispatch = useDispatch();
   const Products = useSelector(selectProducts).products;
   const [willFetchNext, setWillFetchNext] = useState(true);

   console.log(userId)

   const [page, setPage] = useState(1);

   const perPage = 6;

   const { isLoading, isError } = useQuery(
      ["products", page],

      async () => {
         const response = await axios.get(
            `products?perPage=${perPage}&page=${page + userId}`,
            {
               retry: { retries: 0 },
            }
         );

         return response;
      },
      {
         onSuccess: (response) => {
            if (response.data.data.length > 0) {
               
               let newProducts = [];
               console.log(response);

               if (page === 1) {
                  newProducts = response.data.data;
               } else {
                  newProducts = Products.concat(response.data.data.filter(newProduct => !Products.some(existingProduct => existingProduct.id === newProduct.id)));
               }

               if (response.data.pagination.total <= newProducts.length) {
                  setWillFetchNext(false);
               }

               dispatch(setProducts({ products: newProducts }));
            }
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   const handleSeeMore = () => {
      if (willFetchNext) setPage((prevPage) => prevPage + 1);
   };

   return { isLoading, isError, willFetchNext, handleSeeMore };
};