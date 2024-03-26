import Products from "../Data/Products";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BsChatQuote } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import Creator from "./Creator/Creator";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useFetchProducts } from "../Features/products/useFetchProducts";
import { useSelector } from "react-redux";
import { selectProducts } from "../Features/products/productsSlice";
import Image from "../assets/photos(exemples)/OIP (3).jpg";
import LikeButton from "../BaseComponents/LikeButton";
import ScrollBarHider from "../BaseComponents/ScrollBarHidden";
import ProcessAtoun from "./ProcessAtoun";
import Newsletter from "./Newsletter";
import Creators from "./Creator/Creators";
import { ImSpinner6 } from "react-icons/im";

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
                                 medias[0]?.link
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

                        <div>
                           <p>
                              <BsChatQuote />
                           </p>

                           <p>Avis {comments_count}</p>
                        </div>

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
         } else if (
            scrollFetchNumber === 2 &&
            scrollPosition >= sectionOffset - 100 &&
            Products &&
            Products.length === 12
         ) {
            handleSeeMore();
            setScrollFetchNumber(3);
         } else if (
            scrollFetchNumber === 3 &&
            scrollPosition >= sectionOffset - 100 &&
            Products &&
            Products.length === 18
         ) {
            handleSeeMore();
            setScrollFetchNumber(4);
         }
      };

      if (willFetchNext)
         scrollFetch();

   }, [scrollPosition, sectionOffset]);

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
                  <ImSpinner6 className="animate-spin mx-auto text-[3rem] my-4" />
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

const AffiliationCard = ({ affiliateLink, setSelectedAffiliationLink }) => {
   const [hidder, setHidder] = useState(true);

   const handleAffiliationLink = () => {
      setHidder(!hidder);
      setSelectedAffiliationLink(!hidder);
   };

   return (
      <div>
         <ScrollBarHider
            hidden={hidder}
            handleSearchState={handleAffiliationLink}
            className="!z-40"
         />

         <div className="!z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light">
            <p>
               C'est le moment de gagner plus. Copier et partager ce lien pour
               faire 10% de commission
            </p>

            {affiliateLink}
         </div>
      </div>
   );
};

const MediaPaginator = ({ length }) => {
   return (
      <div className="flex items-center w-fit gap-1 *:cursor-pointer font-bold absolute !bottom-[15px] left-1/2 -translate-x-1/2 bg-light/80 shadow-boxShadow1 p-[2px] px-[5px] rounded-[5px]">
         <MdKeyboardArrowLeft className="text-[16px] border-solid border-dark/50 rounded-full p-[0px] px-[0px] border-[1px] duration-75 hover:border-transparent hover:bg-primary hover:text-light xs:text-[22px] large:border-light " />
         <div className="flex gap-[2px]">
            {Array.from({ length }, (_, index) => (
               <span
                  key={index}
                  className={`relative p-[3px] border-solid border-dark/60 border-[1px] rounded-full  ${
                     index === 0
                        ? "bg-primary px-[6px] border-transparent rounded-lg "
                        : ""
                  }`}
               ></span>
            ))}
         </div>

         <MdKeyboardArrowRight className="text-[16px] border-solid border-dark/50 rounded-full p-[0px] px-[0px] border-[1px] duration-75 hover:border-transparent hover:bg-primary hover:text-light xs:text-[22px] large:border-light" />
      </div>
   );
};

export default ProductsForUser;
