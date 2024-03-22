import axios from "axios";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useSelector } from "react-redux";

const LikeButton = ({ initialLikes, isLiked, productId, setIsLiked }) => {
   const [productLikes, setProductLikes] = useState(initialLikes);
   const [isLikedState, setIsLikedState] = useState(isLiked);
   const user = useSelector((state) => state.auth.user);
   const authToken = localStorage.getItem("token");

   const handleLike = async () => {
      if (user) {
         try {
            const response = await axios.post(
               `http://127.0.0.1:8000/api/likes/${productId}`,
               {}, // Données de la requête (vide dans cet exemple)
               {
                  headers: {
                     Authorization: `Bearer ${authToken}`,
                  },
                  retry: { retries: 0 },
               }
            );

            console.log(response.data.data);

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
            {isLikedState ? <GoHeartFill className="text-primary" /> : <GoHeart />}
         </p>

         <p>{productLikes}</p>
      </div>
   );
};

export default LikeButton;
