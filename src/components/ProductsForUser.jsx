import Products from "../Data/Products";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BsChatQuote } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import Creator from "./Creator/Creator";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProductsForUser = () => {
   return (
      <div className="grid grid-cols-3 w-full gap-x-20 gap-y-6 px-sectionPadding my-2 py-10 bg-light lg:grid-cols-2 md:!grid-cols-1 xs:py-6 xs:gap-6">
         {Products.slice(0,6).map(
            (
               {
                  title,
                  newPrice,
                  oldPrice,
                  image,
                  likes,
                  comments,
                  creator,
                  mediaCount,
               },
               index
            ) => (
               <div
                  className="w-full productShadow rounded-xl p-[0.8rem] max-w-[400px] m-auto"
                  key={index + title}
               >

                  <Creator image={creator.logo} name={creator.name} />

                  <div className="flex items-center  my-1">
                     <div className="flex justify-between !items-center gap-4 text-[14px]">
                        <p>
                           <span className="text-[17px] font-medium">
                              {newPrice}
                           </span>{" "}
                           Fcfa
                        </p>
                        <p className="decoration-primary line-through">
                           {oldPrice} Fcfa{"  "}
                        </p>
                     </div>

                     <Link className="bg-primary text-light  font-medium p-[3px] px-[6px] rounded-lg text-[14px]">
                        Commander
                     </Link>
                  </div>

                  <div className="flex items-center justify-between">
                     <p className="text-[15px]">{title}</p>
                  </div>

                  <Link>
                     <div className="w-full h-auto rounded-xl overflow-hidden my-3  relative">
                        <img
                           className="w-full h-auto"
                           src={image}
                           alt={title}
                        />

                        {mediaCount > 1 && (
                           <MediaPaginator length={mediaCount} />
                        )}
                     </div>
                  </Link>

                  <div className="flex mt-2 justify-start *:flex *:items-center *:gap-1 *:cursor-pointer border-solid border-0 border-t-[1px] border-dark/10 pt-[8px] xs:text-[14px]">
                     <LikeButton initialLikes={likes} />

                     <div>
                        <p>
                           <BsChatQuote />
                        </p>

                        <p>Avis 10</p>
                     </div>

                     <div>
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

const LikeButton = ({ initialLikes }) => {
   const [productLikes, setProductLikes] = useState(initialLikes);
   const [isLiked, setIsLiked] = useState(false);

   const handleLikeClick = () => {
      if (isLiked) {
         setProductLikes(productLikes - 1);
      } else {
         setProductLikes(productLikes + 1);
      }
      setIsLiked(!isLiked);
   };

   return (
      <div onClick={handleLikeClick} className="cursor-pointer">
         <p>
            {isLiked ? <GoHeartFill className="text-primary" /> : <GoHeart />}
         </p>

         <p>{productLikes}</p>
      </div>
   );
};

const MediaPaginator = ({ length }) => {
   return (
      <div className="flex items-center w-fit gap-1 *:cursor-pointer font-bold absolute !bottom-[15px] left-[10px] bg-dark/10 p-[2px] px-[5px] rounded-[5px]">
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
