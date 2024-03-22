import axios from "axios";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useSelector } from "react-redux";

const LikeButton = ({ initialLikes, isLiked, productId }) => {
   const [productLikes, setProductLikes] = useState(initialLikes);
   const user = useSelector((state) => state.auth.user);
   const authToken = localStorage.getItem("token");

   console.log(productId)

   const handleLike = async () => {
      if (user) {
         try {
            const response = await axios.post(
               `http://127.0.0.1:8000/api/likes/${productId}`,
               {
                  headers: {
                     Authorization: `Bearer ${authToken}`,
                  },
                  retry: { retries: 0 },
               }
            );

            console.log(response);
         } catch (error) {
            console.error("Error fetching user data:", error);
         }
      }
   };

   return (
      <div onClick={handleLike} className="cursor-pointer">
         <p>
            {isLiked ? <GoHeartFill className="text-primary" /> : <GoHeart />}
         </p>

         <p>{productLikes}</p>
      </div>
   );
};

export default LikeButton;
