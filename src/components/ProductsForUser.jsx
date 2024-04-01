import { BsChatQuote } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import Creator from "./Creator/Creator";
import { useEffect, useState } from "react";
import { useFetchProducts } from "../Features/products/useFetchProducts";
import { useSelector } from "react-redux";
import { selectProducts } from "../Features/products/productsSlice";
import Image from "../assets/photos(exemples)/OIP (3).jpg";
import LikeButton from "../BaseComponents/LikeButton";
import ProcessAtoun from "./ProcessAtoun";
import Newsletter from "./Newsletter";
import Creators from "./Creator/Creators";
import { ImSpinner6 } from "react-icons/im";
import MediaPaginator from "./MediaPaginator";
import AffiliationCard from "./AffiliationCard";

const ProductsPacket = ({ Products, slicePosition, showAffiliationPopUp }) => {
   return (
      <div className="grid grid-cols-3 w-full gap-x-20 gap-y-6 px-sectionPadding my-2 py-10 bg-light lg:grid-cols-2 md:!grid-cols-1 xs:py-6 xs:gap-6">
         {Products &&
            Products.slice(slicePosition, slicePosition + 6).map(
               (
                  {
                     id,
                     title,
                     old_price,
                     current_price,
                     creator_id,
                     disponibility,
                     creator,
                     medias,
                     medias_count,
                     likes_count,
                     comments_count,
                     is_liked,
                     affiliation_link,
                     slug_name,
                  },
                  index
               ) => (
                  <div
                     className="w-full productShadow rounded-xl p-[0.8rem] max-w-[400px] m-auto"
                     key={index + id}
                  >
                     {creator && (
                        <Creator
                           image={
                              process.env.REACT_APP_API_URL +
                              "storage/" +
                              creator.logo
                           }
                           name={creator.name}
                        />
                     )}

                     <Link to={`/produit/${slug_name}`}>
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

                           {medias_count > 1 && (
                              <MediaPaginator length={medias_count} />
                           )}
                        </div>
                     </Link>

                     <div className="flex mt-2 justify-start *:flex *:items-center *:gap-1 *:cursor-pointer border-solid border-0 border-t-[1px] border-dark/10 pt-[8px] xs:text-[14px]">
                        <LikeButton
                           initialLikes={likes_count}
                           isLiked={is_liked}
                           productId={id}
                        />

                        <Link to={`/produit/${slug_name}`}>
                           <p>
                              <BsChatQuote />
                           </p>

                           <p>Avis {comments_count}</p>
                        </Link>

                        <div
                           onClick={() =>
                              showAffiliationPopUp(affiliation_link)
                           }
                        >
                           <p>
                              <LuLink />
                           </p>
                           <p>Affiliation</p>
                        </div>
                     </div>
                  </div>
               )
            )}
      </div>
   );
};

const ProductsForUser = () => {
   const { isLoading, isError, willFetchNext, handleSeeMore } =
      useFetchProducts();
   const Products = useSelector(selectProducts).products;

   const [selectedAffiliationLink, setSelectedAffiliationLink] = useState(null);
   const [scrollPosition, setScrollPosition] = useState(0);
   const [sectionOffset, setSectionOffset] = useState(0);
   const [scrollFetchNumber, setScrollFetchNumber] = useState(1);

   console.log(willFetchNext, scrollFetchNumber);

   useEffect(() => {
      const handleScroll = () => {
         const position = window.pageYOffset;
         setScrollPosition(position);
      };

      const handleSectionOffset = () => {
         const section = document.getElementById("products");
         if (section) {
            const offsetHeight = section.offsetHeight;
            setSectionOffset(offsetHeight);
         }
      };

      window.addEventListener("scroll", handleScroll);
      handleSectionOffset();

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   console.log(
      scrollPosition,  sectionOffset - 100 , "Hey"
   );

   useEffect(() => {
      const scrollFetch = () => {
         if (
            scrollFetchNumber === 1 &&
            scrollPosition >= sectionOffset - 100 &&
            Products &&
            Products.length === 6
         ) {
            handleSeeMore();
            setScrollFetchNumber(2);
            console.log("Scroll 1", scrollFetchNumber);
         } else if (
            scrollFetchNumber === 2 &&
            scrollPosition >= sectionOffset - 100 &&
            Products &&
            Products.length === 12
         ) {
            handleSeeMore();
            setScrollFetchNumber(3);
            console.log("Scroll 2", scrollFetchNumber);
         } else if (
            scrollFetchNumber === 3 &&
            scrollPosition >= sectionOffset - 100 &&
            Products &&
            Products.length === 18
         ) {
            handleSeeMore();
            setScrollFetchNumber(4);
            console.log("Scroll 3", scrollFetchNumber);
         }
      };

      if (willFetchNext) {
         scrollFetch();
      }
   }, [
      scrollPosition,
      sectionOffset,
      Products,
      willFetchNext,
      scrollFetchNumber,
      handleSeeMore
   ]);

   const showAffiliationPopUp = (affiliationLink) => {
      setSelectedAffiliationLink(affiliationLink);
   };

   return (
      <div id="products">
         <ProductsPacket Products={Products} slicePosition={0} />

         {Products && <ProcessAtoun />}

         {Products && Products.length > 6 && (
            <>
               <ProductsPacket
                  Products={Products}
                  slicePosition={6}
                  showAffiliationPopUp={showAffiliationPopUp}
               />

               <Newsletter />
            </>
         )}

         {Products && Products.length > 12 && (
            <>
               <ProductsPacket
                  Products={Products}
                  slicePosition={12}
                  showAffiliationPopUp={showAffiliationPopUp}
               />

               <Creators />
            </>
         )}

         {Products && Products.length > 18 && (
            <>
               <ProductsPacket
                  Products={Products}
                  slicePosition={18}
                  showAffiliationPopUp={showAffiliationPopUp}
               />
            </>
         )}

         {Products && willFetchNext && scrollFetchNumber >= 2 && (
            <div className="mx-auto my-8 text-center">
               {!isLoading && (
                  <button onClick={handleSeeMore}>Voir plus de produit</button>
               )}

               {isLoading && (
                  <ImSpinner6 className="animate-spin mx-auto text-[2rem] my-4" />
               )}
            </div>
         )}

         {selectedAffiliationLink && (
            <AffiliationCard
               affiliateLink={selectedAffiliationLink}
               setSelectedAffiliationLink={setSelectedAffiliationLink}
            />
         )}
      </div>
   );
};

export default ProductsForUser;
