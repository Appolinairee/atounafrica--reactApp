import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useSelector } from "react-redux";
import axios from "../services/axiosConfig";

const LikeButton = ({ initialLikes, isLiked, productId }) => {
   const liked = isLiked;
   const [productLikes, setProductLikes] = useState(initialLikes);
   const [isLikedState, setIsLikedState] = useState(liked);
   const user = useSelector((state) => state.auth.user);

   const handleLike = async () => {
      if (user) {
         try {
            const response = await axios.post(
               `likes/${productId}`,
               {}, 
            );

            setProductLikes(response.data.data.likes);
            setIsLikedState(response.data.data.isLiked);
         } catch (error) {
            console.error("Error fetching user data:", error);
         }
      }
   };

   return (
      <div onClick={handleLike} className="cursor-pointer">
         <p>
            {(isLikedState) ? <GoHeartFill className="text-primary" /> : <GoHeart />}
         </p>

         <p>{productLikes}</p>
      </div>
   );
};

export default LikeButton;