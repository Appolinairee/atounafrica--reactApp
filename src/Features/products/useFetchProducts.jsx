import { useQuery } from "react-query";
import axios from "../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./productsSlice";

export const useFetchProducts = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => state.auth.user);

   const $userId = (user?.id) ? '&user_id=' + user.id: '';

   const { isLoading, isError } = useQuery(
      "products",
      async () => {
         const response = await axios.get(`products?perPage=6${$userId}`, {
            retry: { retries: 0 },
         });
         
         return response;
      },
      {
         onSuccess: (response) => {
            console.log("Fetch products successfull");
            console.log(response);

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


// import { useInfiniteQuery } from "react-query";
// import axios from "../../axiosConfig";
// import { useDispatch } from "react-redux";
// import { setProducts } from "./productsSlice";

// export const useFetchProducts = () => {
//   const dispatch = useDispatch();

//   const fetchPresentations = async ({ pageParam = 1 }) => {
//     const response = await axios.get("products", {
//       params: {
//         page: pageParam,
//       },
//     });
//     return response.data;
//   };

//   const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
//     "products",
//     fetchPresentations,
//     {
//       getNextPageParam: (lastPage, allPages) => {
//          console.log(lastPage);
//          return lastPage.nextPage;
//       },
//       onSuccess: (response) => {
//          console.log(response.data, response.pagination);
//         console.log("Fetch products successful");
//         const presentations = response.pages.flatMap((page) => page.data);
//         console.log(presentations);
//         dispatch(setProducts({ presentations }));
//       },
//       onError: (error) => {
//         console.error("Error fetching data:", error);
//       },
//     }
//   );

//   return { data, isLoading, isError, fetchNextPage, hasNextPage };
// };
