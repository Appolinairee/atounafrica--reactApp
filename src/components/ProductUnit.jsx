import { Link, useNavigate } from "react-router-dom";
import Creator from "./Creator/Creator";
import LikeButton from "../BaseComponents/LikeButton";
import { BsChatQuote } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import { useState } from "react";
import MediaPaginator from "./MediaPaginator";
import AffiliationCard from "./AffiliationCard";
import ProfilImageGenerator from "../BaseComponents/ProfilImageGenerator";
import { FaCheckCircle } from "react-icons/fa";
import { useMutation, useQuery } from "react-query";
import axios from "./../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "../Features/orders/ordersSlice";
import LoadingButton from "../BaseComponents/LoadingButton";
import MediaUnit from "../BaseComponents/MediaUnit";
import ServerError from "../pages/ServerError";
import OrderItemChange from "../BaseComponents/Orders/OrderItemChange";

const ProductUnit = ({ slug_name, className, type }) => {
   const [selectedAffiliationLink, setSelectedAffiliationLink] =
      useState(false);
   const [mediaState, setMediaState] = useState(0);
   const [productCount, setProductCount] = useState(1);
   const [detailsState, setDetailsState] = useState(0);
   const dispatch = useDispatch();
   const token = localStorage.getItem("token");
   const navigate = useNavigate();
   const userId = useSelector((state) => state.auth.userId);
   const userIdRequestParam = userId ? "?&user_id=" + userId : "";

   const [Product, setProduct] = useState({});

   const { loading, isError } = useQuery(
      `product`,
      async () => {
         const response = await axios.get(
            `products/${slug_name + userIdRequestParam}`,
            {
               retry: { retries: 0 },
            }
         );
         return response;
      },
      {
         onSuccess: (response) => {
            setProduct(response.data.data);
         },
         onError: (error) => {
            console.log(error);
         },
      }
   );

   const { mutate: placeOrderMutation, isLoading } = useMutation(
      (formData) =>
         axios.post("orders/items/store", formData, {
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
            },
            retry: { retries: 0 },
         }),
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
      creator,
      medias,
      medias_count,
      title,
      likes_count,
      is_liked,
      comments_count,
      affiliation_link,
      current_price,
      old_price,
      comments,
      caracteristics;

   if (Product) {
      ({
         id,
         creator,
         medias,
         medias_count,
         title,
         likes_count,
         is_liked,
         comments_count,
         affiliation_link,
         caracteristics,
         current_price,
         old_price,
         comments,
      } = Product);
   }

   const characteristicsArray = caracteristics
      ? caracteristics.split(":::")
      : null;

   const showAffiliationPopUp = (affiliationLink) => {
      setSelectedAffiliationLink(affiliationLink);
   };

   const handlePrevMedia = () => {
      setMediaState((prevMedia) =>
         prevMedia === 0 ? medias.length - 1 : prevMedia - 1
      );
   };

   const handleNextMedia = () => {
      setMediaState((prevMedia) =>
         prevMedia === medias.length - 1 ? 0 : prevMedia + 1
      );
   };

   const handleMediaClick = (state) => {
      setMediaState(state);
   };

   return (
      <div className={`${className} mx-auto`}>
         {type !== "order" && (
            <OrderItemChange
               productCount={productCount}
               setProductCount={setProductCount}
               current_price={current_price}
            />
         )}

         <div
            className={`w-full productShadow rounded-xl p-[0.8rem] max-w-[460px] m-auto`}
            key={id}
         >
            {creator && (
               <Creator
                  image={
                     process.env.REACT_APP_API_URL + "storage/" + creator.logo
                  }
                  name={creator.name}
               />
            )}

            <div className="flex items-center  my-1">
               <div className="flex justify-between !items-center gap-4 text-[14px]">
                  <p>
                     <span className="text-[17px] font-medium">
                        {current_price}
                     </span>{" "}
                     Fcfa
                  </p>

                  {old_price && (
                     <p className="decoration-primary line-through">
                        {old_price} Fcfa{"  "}
                     </p>
                  )}
               </div>
            </div>

            <div className="flex items-center justify-between">
               <p className="text-[15px]">{title}</p>
            </div>

            <Link>
               <div className="w-full h-auto rounded-xl overflow-hidden my-3  relative border-solid border-[1px] border-dark/5">
                  {medias && (
                     <MediaUnit
                        media={medias[mediaState]}
                        altText={title}
                        index={1}
                     />
                  )}

                  {medias_count > 1 && (
                     <MediaPaginator
                        length={medias_count}
                        handlePrevMedia={handlePrevMedia}
                        handleNextMedia={handleNextMedia}
                        handleMediaClick={handleMediaClick}
                        mediaState={mediaState}
                     />
                  )}
               </div>
            </Link>

            <div className="flex w-fit justify-center overflow-x-auto gap-[5px]">
               {medias &&
                  medias.length > 0 &&
                  medias.map((media, index) => (
                     <MediaUnit
                        media={media}
                        altText={title}
                        index={index}
                        handleMediaClick={handleMediaClick}
                        className={`!h-[50px] !w-auto rounded-[7px] border-solid border-dark/30 border-[1px] cursor-pointer ${
                           mediaState === index
                              ? " border-primary border-[2px]"
                              : ""
                        }`}
                     />
                  ))}
            </div>

            <div className="flex mt-2 justify-start *:flex *:items-center *:gap-1 *:cursor-pointer border-solid border-0 border-t-[1px] border-dark/10 pt-[8px] xs:text-[14px]">
               <LikeButton
                  initialLikes={likes_count}
                  isLiked={is_liked}
                  productId={id}
               />

               <div>
                  <p>
                     <BsChatQuote />
                  </p>

                  <p>Avis {comments_count}</p>
               </div>

               <div onClick={() => showAffiliationPopUp(affiliation_link)}>
                  <p>
                     <LuLink />
                  </p>
                  <p>Affiliation</p>
               </div>
            </div>

            {selectedAffiliationLink && (
               <AffiliationCard
                  affiliateLink={selectedAffiliationLink}
                  setSelectedAffiliationLink={setSelectedAffiliationLink}
               />
            )}
         </div>

         <div className="productDetails mt-10 relative py-4">
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

         {type !== "order" && (
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
