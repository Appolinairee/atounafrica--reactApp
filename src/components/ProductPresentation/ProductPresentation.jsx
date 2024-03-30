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

const ProductPresentation = () => {
   const product = {
      id: 23,
      title: "Chair of BANK",
      caracteristics: "Authorization is unce",
      delivering: null,
      old_price: null,
      current_price: "10000.00",
      creator_id: 17,
      deleted_at: null,
      created_at: "2024-02-20T11:25:38.000000Z",
      updated_at: "2024-02-20T11:25:38.000000Z",
      disponibility: 1,
      quantity: null,
      status: 1,
      similarProducts: [],
      likes_count: 1,
      comments_count: 0,
      medias_count: 1,
      is_liked: false,
      affiliation_link:
         "http://127.0.0.1:3000/produit/chair-of-bank?a=66ccf22a",
      medias: [
         {
            id: 12,
            link: "products/image/6NXg7QmfpTTyVwAvZys2OPS8Mi2QOp7oJaXSLElx.jpg",
            type: "image",
            product_id: 23,
            created_at: "2024-03-24T20:30:33.000000Z",
            updated_at: "2024-03-24T20:30:33.000000Z",
         },
      ],
      creator: {
         id: 17,
         name: "Meuble Bénin 2",
         phone: "+22953001067",
         email: null,
         logo: "logos/rfAcMA5Jdn1nbtVK86wCjLPSkRUec7TgeFFPH2X8.jpg",
         status: 1,
         description: null,
         location: null,
         delivery_options: null,
         payment_options: null,
         verified_at: null,
         created_at: "2024-02-18T12:18:39.000000Z",
         updated_at: "2024-03-23T01:16:47.000000Z",
         user_id: 7,
         deleted_at: null,
         creator_balance: "0.00",
      },
      categories: [],
   };

   return (
      <div className="productSection">
         {/* <div className="productInfosText">
            <p className="name">Nom du produit de l'entreprise</p>

            <div className="prices flex">
               <p>
                  Prix unitaire: <b> 5000</b>Fcfa
               </p>
               <div className="stars flex">
                  <div className="icon">
                     <FaStar />
                  </div>
                  <div className="icon">
                     <FaStar />
                  </div>
                  <div className="icon">
                     <FaStarHalfAlt />
                  </div>
                  <div className="icon">
                     <FaRegStar />
                  </div>
                  <div className="icon">
                     <FaRegStar />
                  </div>
               </div>
            </div>
         </div> */}

         <ProductUnit {...product} key={product.id} />

         <div className="productGalerie">
            <div className="productGalerie_main">
               <img src={ProductImage1} alt="Image principale du produit" />
            </div>

            <div className="productGalerie_seconds flex">
               <div className="productGalerie_second">
                  <img src={ProductImage2} alt="" />
               </div>

               <div className="productGalerie_second">
                  <img src={ProductImage3} alt="" />
               </div>

               <div className="productGalerie_second">
                  <img src={ProductImage4} alt="" />
               </div>

               <div className="productGalerie_second">
                  <img src={ProductImage4} alt="" />
               </div>
            </div>
            <hr />
         </div>

         <div className="productPrices flex">
            <div className="productPrice">
               <p>
                  Prix: <b>5000</b> Fcfa
               </p>
            </div>

            <div className="productPrice_counter flex">
               <span>-</span>
               <span>01</span>
               <span>+</span>
            </div>
         </div>

         <div className="productDetails">
            <div className="detailState flex">
               <p>description</p>
               <p className="active before">Avis</p>
               <p>Caractéristiques</p>
            </div>

            <div className="productDetailsContents">
               <div className="productAvis">
                  <div className="avisContent flex">
                     <div className="avisProfil">
                        <img src={ProductImage1} alt="" />
                     </div>

                     <div className="avisText">
                        <p className="product_creator">LOKO Septus</p>
                        <p className="before">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quisquam nobis
                        </p>
                     </div>
                  </div>

                  <div className="avisContent flex">
                     <div className="avisProfil">
                        <img src={ProductImage1} alt="" />
                     </div>

                     <div className="avisText">
                        <p className="product_creator">LOKO Septus</p>
                        <p className="before">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quisquam nobis
                        </p>
                     </div>
                  </div>

                  <div className="avisContent flex">
                     <div className="avisProfil">
                        <img src={ProductImage1} alt="" />
                     </div>

                     <div className="avisText">
                        <p className="product_creator">LOKO Septus</p>
                        <p className="before">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quisquam nobis
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="productInfos">
            <div className="productStock">
               <p>
                  Disponibilité du produit: <b>illimité</b>
               </p>
            </div>

            <div className="hProductCreator flex">
               <img src={Creator} alt="Creator Image" />

               <div>
                  <p>King of Soto fgf fnfhfj fufjhfgh ERYHRYR</p>
                  <span>Calavi</span>
               </div>
            </div>
         </div>

         <Button
            buttonClass="button fixedButton"
            buttonContent="Commandez"
            buttonIcon={<IoArrowForward />}
         />
      </div>
   );
};

export default ProductPresentation;
