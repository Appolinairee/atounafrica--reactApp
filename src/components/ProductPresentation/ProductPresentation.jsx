import "./ProductPresentation.css";
import Button from "../Button/Button";
import ProductCollection from "../ProductCollection/ProductCollection";
import SteepTitle from "../SteepTitle/SteepTitle";

import ProductImage1 from "../../assets/photos(exemples)/OIP (3).jpeg";
import ProductImage2 from "../../assets/photos(exemples)/mobilier.png";
import ProductImage3 from "../../assets/photos(exemples)/mobilier.png";
import ProductImage4 from "../../assets/photos(exemples)/mobilier.png";

import Creator from "../../assets/photos(exemples)/OIP (2).jpg";

import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import ProductUnit from "../ProductUnit";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "../../axiosConfig";
import LoadingButton from "../../BaseComponents/LoadingButton";

const ProductPresentation = () => {

   const [Product, setProduct] = useState([]);

   const { isLoading, isError } = useQuery(
      `product`,
      async () => {
         const response = await axios.get(
            `products/23?user_id=12`,
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

   if(isLoading){
      return (
         <div className="my-4">
            <LoadingButton loading={isLoading} />
            <p className="text-center">En cours de chargement</p>
         </div>
      )
   }

   return (
      <div className="productSection">
         <ProductUnit {...Product} key={Product.id} />

         <Button
            buttonClass="button fixedButton"
            buttonContent="Commandez"
            buttonIcon={<IoArrowForward />}
         />
      </div>
   );
};

export default ProductPresentation;