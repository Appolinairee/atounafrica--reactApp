import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfilImageGenerator from "../BaseComponents/ProfilImageGenerator";
import { FaCheckCircle } from "react-icons/fa";
import { useMutation, useQuery } from "react-query";
import axios from "../services/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "../Features/orders/ordersSlice";
import LoadingButton from "../BaseComponents/LoadingButton";
import ServerError from "../pages/ServerError";
import OrderItemChange from "../BaseComponents/Orders/OrderItemChange";
import ProductInformations from "./Product/ProductInformations";
import { updateProduct } from "../Features/products/productsSlice";

const ProductUnit = ({ slug_name, className, type }) => {
   const [productCount, setProductCount] = useState(1);
   const [detailsState, setDetailsState] = useState(0);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const userId = useSelector((state) => state.auth.userId);
   const userIdRequestParam = userId ? "?&user_id=" + userId : "";

   const [Product, setProduct] = useState({});

   const { loading, isError } = useQuery(
      `product`,
      async () => {
         const response = await axios.get(
            `products/${slug_name + userIdRequestParam}`
         );
         return response;
      },
      {
         onSuccess: (response) => {
            dispatch(updateProduct(response.data.data));
            setProduct(response.data.data);
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   const { mutate: placeOrderMutation, isLoading } = useMutation(
      (formData) =>
         axios.post("orders/items/store", formData),
      {
         onSuccess: (response) => {
            dispatch(updateOrders(response.data.data));
            navigate(`/commande/${response.data.data.id}/paiement`);
         },
         onError: (error) => {
            console.error("Error placing order:", error);
         },
      }
   );

   const handleOrder = () => {
      const formData = {
         product_id: id,
         quantity: productCount,
      };

      placeOrderMutation(formData);
   };

   if (loading || !Product) {
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

   let id,
      current_price,
      comments,
      caracteristics;

   if (Product) {
      ({
         id,
         caracteristics,
         current_price,
         comments,
      } = Product);
   }

   const characteristicsArray = caracteristics
      ? caracteristics.split(":::")
      : null;

   return (
      <div className={`${className} mx-auto`}>
         {(type !== "order" && type !== "reception" ) && (
            <OrderItemChange
               productCount={productCount}
               setProductCount={setProductCount}
               current_price={current_price}
            />
         )}

         <ProductInformations Product={Product} />


         {
            type !== "reception" && <div className="productDetails mt-10 relative py-4">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-dark/40"></div>

            <div className="flex *:cursor-pointer w-fit gap-10">
               <p
                  className={`${
                     detailsState === 0
                        ? "bg-primary rounded-[10px] text-light px-2 font-semibold"
                        : ""
                  }`}
                  onClick={() => setDetailsState(0)}
               >
                  Avis Clients
               </p>

               <p
                  className={`${
                     detailsState === 1
                        ? "bg-primary rounded-[10px] text-light px-2 font-semibold"
                        : ""
                  }`}
                  onClick={() => setDetailsState(1)}
               >
                  Caractéristiques
               </p>
            </div>

            <div className="my-4">
               {detailsState === 0 ? (
                  <div className="!border-red-700 my-4">
                     {comments &&
                        comments
                           .filter(
                              ({ content }) => content && content.length >= 4
                           )
                           .map(({ content, time_ago, user_name }, index) => (
                              <div className="flex !items-start justify-center gap-2 w-fit max-w-[450px]">
                                 <ProfilImageGenerator name={user_name} />

                                 <div>
                                    <p>{content}</p>
                                    <span className="text-[12px] text-dark/70">
                                       {time_ago}
                                    </span>
                                 </div>
                              </div>
                           ))}
                  </div>
               ) : (
                  <div className="!border-red-700 my-4">
                     {characteristicsArray ? (
                        characteristicsArray?.map((caracteristic, index) => (
                           <div className="flex items-center w-fit gap-2">
                              <FaCheckCircle className="text-[14px]" />
                              <li key={index}>{caracteristic}</li>
                           </div>
                        ))
                     ) : (
                        <p>Aucune caractéristique.</p>
                     )}
                  </div>
               )}
            </div>
         </div>
         }

         {(type !== "order" && type !== "reception" ) && (
            <LoadingButton
               text={"Commander"}
               loading={isLoading}
               onClick={handleOrder}
               className="bg-primary text-light font-medium p-[3px] px-[6px] rounded-lg text-[14px]"
            />
         )}
      </div>
   );
};

export default ProductUnit;