import { Link } from "react-router-dom";
import Creator from "./Creator/Creator";
import LikeButton from "../BaseComponents/LikeButton";
import { BsChatQuote } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import { useState } from "react";
import MediaPaginator from "./MediaPaginator";
import AffiliationCard from "./AffiliationCard";

const ProductUnit = ({ id, title, old_price, current_price, medias, likes_count, is_liked, comments_count, affiliation_link, creator, medias_count}) => {
    const [selectedAffiliationLink, setSelectedAffiliationLink] = useState(false);
    const []

    const showAffiliationPopUp = (affiliationLink) => {
        setSelectedAffiliationLink(affiliationLink);
     };

   return (
      <div
         className="w-full productShadow rounded-xl p-[0.8rem] max-w-[400px] m-auto"
         key={id}
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

            <Link className="bg-primary text-light  font-medium p-[3px] px-[6px] rounded-lg text-[14px]">
               Commander
            </Link>
         </div>

         <div className="flex items-center justify-between">
            <p className="text-[15px]">{title}</p>
         </div>

         <Link>
            <div className="w-full h-auto rounded-xl overflow-hidden my-3  relative border-solid border-[1px] border-dark/5">
               <img
                  className="w-auto h-[250px] mx-auto"
                  src={
                     medias && medias[0]?.link
                        ? process.env.REACT_APP_API_URL +
                          "storage/" +
                          medias[0].link
                        : Image
                  }
                  alt={title}
               />

               {medias_count > 1 && <MediaPaginator length={medias_count} />}
            </div>
         </Link>

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

export default ProductUnit;