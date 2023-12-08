import ProductImage  from "../../assets/photos(exemples)/OIP (1).jpeg";
import CreatorImage  from "../../assets/photos(exemples)/OIP (1).jpeg";
import Creator from "../Creator/Creator";

const Product = () => {
  return (
        <div class="hProduct">
                <div class="hProductContent">
                     <div class="hProductText flex">
                         <p>Lorem ipsum dolor sit amet Lorem, ipsum dolor..</p>
                         <span><b>5000</b> Fcfa</span>
                     </div>
     
                     <div class="hProductImage">
                         <img src={ProductImage} alt="" />
                     </div>
     
                     <div class="description">
                         <p>
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quos vel consequuntur tempora amet ipsam deleniti quibusdam voluptatum libero perspiciatis.
                         </p>
                         <span class="readMore">Lire Plus</span>
                     </div>
     
                     <div class="hProductDetails flex">
                         <Creator creatorImage={CreatorImage}/>
                         <button class="button button1 flex">
                             <p>Commander</p>
                             <i class="fa fa-arrow-right"></i>
                         </button>
                     </div>
                </div>
     
                <div class="hProductInteracts flex">
                     <div class="interact">
                         <div class="flex">
                             <i class="fa fa-heart-o"></i>
                             <span>12</span>
                         </div>
     
                         <p>J'aime</p>
                     </div>
     
                     <div class="interact">
                         <div class="flex">
                             <i class="fa fa-comment"></i>
                             <span>12</span>
                         </div>
     
                         <p>Avis</p>
                     </div>
     
                     <div class="interact">
                         <div class="flex">
                             <i class="fa-solid fa-eye"></i>
                             <span>12</span>
                         </div>
                         
                         <p>Détails</p>
                     </div>
     
                     <div class="interact">
                         <div class="flex">
                             <i class="fa-solid fa-share"></i>
                             <span>12</span>
                         </div>
                         
                         <p>Partager</p>
                     </div>
                </div>
        </div>
  )
}

export default Product;
