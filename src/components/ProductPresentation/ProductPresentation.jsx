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
import { RiSecurePaymentFill } from "react-icons/ri";

const ProductPresentation = () => {
  return (
    <ProductCollection>
        <div className="productSection">
            <SteepTitle title="Votre Produit: Commandez-le!" index="1" icon={<RiSecurePaymentFill />} />

            <div className="productInfosText">
                <p className="name">Nom du produit de l'entreprise</p>
                
                <div className="prices flex">
                    <p>Prix unitaire:  <b> 5000</b>Fcfa</p>
                    <div className="stars flex">
                        <div className="icon"><FaStar /></div>
                        <div className="icon"><FaStar /></div>
                        <div className="icon"><FaStarHalfAlt /></div>
                        <div className="icon"><FaRegStar /></div>
                        <div className="icon"><FaRegStar /></div>
                    </div>
                </div>
            </div>

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
                    <p>Prix: <b>5000</b> Fcfa</p>
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
                                <p className="before">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis</p>
                            </div>
                    </div>

                    <div className="avisContent flex">
                        <div className="avisProfil">
                            <img src={ProductImage1} alt="" />
                        </div>

                        <div className="avisText">
                            <p className="product_creator">LOKO Septus</p>
                            <p className="before">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis</p>
                        </div>
                    </div>

                    <div className="avisContent flex">
                        <div className="avisProfil">
                            <img src={ProductImage1} alt="" />
                        </div>

                        <div className="avisText">
                            <p className="product_creator">LOKO Septus</p>
                            <p className="before">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="productInfos">
                <div className="productStock">
                    <p>Disponibilité du produit: <b>illimité</b></p>
                </div>
                

                <div className="hProductCreator flex">
                    <img src={Creator} alt="Creator Image" />
                    
                    <div>
                        <p>King of Soto fgf fnfhfj fufjhfgh ERYHRYR</p>
                        <span>Calavi</span>
                    </div>
                </div>
            </div>

            <Button buttonClass="button fixedButton" buttonContent="Commandez" buttonIcon ={<IoArrowForward />} />
        </div>
    </ProductCollection>
  )
}

export default ProductPresentation;