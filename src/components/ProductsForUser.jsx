import Products from "../Data/Products";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BsChatQuote } from "react-icons/bs";
import { LuLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductsForUser = () => {
   return (
      <div className="grid grid-cols-3 w-full gap-20 px-sectionPadding my-2 py-10 bg-light lg:grid-cols-2 md:!grid-cols-1 xs:py-6 xs:gap-6">
         {Products.map(
            (
               { title, newPrice, oldPrice, image, likes, comments, creator },
               index
            ) => (
               <div
                  className="w-full productShadow rounded-xl p-[0.8rem] max-w-[400px] m-auto"
                  key={index + title}
               >
                  <div className="flex justify-between w-full border-solid border-0 border-b-[1px] border-dark/10 pb-1  ">
                     <div className="flex w-fit gap-2 text-[14px]">
                        <img
                           className="rounded-full w-[40px] h-[40px]"
                           src={creator.logo}
                           alt={creator.name}
                        />

                        <div>
                           <p>{creator.name}</p>
                           <p>Etoiles</p>
                        </div>
                     </div>
                  </div>

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

                  <div className="w-full h-auto rounded-xl overflow-hidden my-3  bg-red-400">
                     <img className="w-full h-auto" src={image} alt={title} />
                  </div>

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
      console.log(productLikes);
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

export default ProductsForUser;
