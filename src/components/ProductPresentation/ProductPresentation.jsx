import "./ProductPresentation.css";

import ProductImage1 from "../../assets/photos(exemples)/OIP (3).jpeg"
import ProductImage2 from "../../assets/photos(exemples)/mobilier.png"
import ProductImage3 from "../../assets/photos(exemples)/mobilier.png"
import ProductImage4 from "../../assets/photos(exemples)/mobilier.png"

const ProductPresentation = () => {
  return (
    // <!-- Product Content -->
        <div className="productSection">
            <div className="actualState flex">
                <span>1</span>
                <h3>Votre Produit: Commandez-le!</h3>
            </div>

            <div className="productInfosText">
                <p className="name">Nom du produit de l'entreprise</p>
                
                <div className="prices flex">
                    <p>Prix unitaire:  <b> 5000</b>Fcfa</p>
                    <div className="stars flex">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star-half-stroke"></i>
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

            <div className="button button3 before">
                <span></span>
                <p>commander</p>
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
                                <img src="../assets/photos(exemples)/OIP (3).jpeg" alt="" />
                            </div>

                            <div className="avisText">
                                <p className="product_creator">LOKO Septus</p>
                                <p className="before">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis</p>
                            </div>
                    </div>

                    <div className="avisContent flex">
                        <div className="avisProfil">
                            <img src="../../assets/photos(exemples)/OIP (3).jpeg" alt="" />
                        </div>

                        <div className="avisText">
                            <p className="product_creator">LOKO Septus</p>
                            <p className="before">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nobis</p>
                        </div>
                    </div>

                    <div className="avisContent flex">
                        <div className="avisProfil">
                            <img src="../assets/photos(exemples)/OIP (3).jpeg" alt="" />
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
                    <img src="../../assets/photos(exemples)/OIP (2).jpg" alt="" />
                    
                    <div>
                        <p>King of Soto fgf fnfhfj fufjhfgh ERYHRYR</p>
                        <span>Calavi</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductPresentation;