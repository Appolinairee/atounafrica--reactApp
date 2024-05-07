import { Link } from "react-router-dom";
import MediaUnit from "../../BaseComponents/MediaUnit";
import Creator from "../Creator/Creator";
import { useState } from "react";
import MediaPaginator from "../MediaPaginator";
import LikeButton from "../../BaseComponents/LikeButton";
import { BsChatQuote } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import AffiliationCard from "../AffiliationCard";

const ProductInformations = (Product) => {
   const [mediaState, setMediaState] = useState(0);
   const [selectedAffiliationLink, setSelectedAffiliationLink] = useState(false);

   const showAffiliationPopUp = (affiliationLink) => {
      setSelectedAffiliationLink(affiliationLink);
   }

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
      } = Product.Product);
   }

   return (
      <div
         className={`w-full productShadow rounded-xl p-[0.8rem] max-w-[460px] m-auto`}
      >
         {creator && (
            <Creator
               image={process.env.REACT_APP_API_URL + "storage/" + creator.logo}
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
   );
};

export default ProductInformations;