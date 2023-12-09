import ProductImage  from "../../assets/photos(exemples)/OIP (1).jpeg";
import CreatorImage  from "../../assets/photos(exemples)/OIP (1).jpeg";
import Creator from "../Creator/Creator";

const Product = () => {
  return (
        <div className="hProduct">
                <div className="hProductContent">
                     <div className="hProductText flex">
                         <p>Lorem ipsum dolor sit amet Lorem, ipsum dolor..</p>
                         <span><b>5000</b> Fcfa</span>
                     </div>
     
                     <div className="hProductImage">
                         <img src={ProductImage} alt="" />
                     </div>
     
                     <div className="description">
                         <p>
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis quos vel consequuntur tempora amet ipsam deleniti quibusdam voluptatum libero perspiciatis.
                         </p>
                         <span className="readMore">Lire Plus</span>
                     </div>
     
                     <div className="hProductDetails flex">
                         <Creator creatorImage={CreatorImage}/>
                         <button className="button button1 flex">
                             <p>Commander</p>
                             <i className="fa fa-arrow-right"></i>
                         </button>
                     </div>
                </div>
     
                <div className="hProductInteracts flex">
                     <div className="interact">
                         <div className="flex">
                             <i className="fa fa-heart-o"></i>
                             <span>12</span>
                         </div>
     
                         <p>J'aime</p>
                     </div>
     
                     <div className="interact">
                         <div className="flex">
                             <i className="fa fa-comment"></i>
                             <span>12</span>
                         </div>
     
                         <p>Avis</p>
                     </div>
     
                     <div className="interact">
                         <div className="flex">
                             <i className="fa-solid fa-eye"></i>
                             <span>12</span>
                         </div>
                         
                         <p>Détails</p>
                     </div>
     
                     <div className="interact">
                         <div className="flex">
                             <i className="fa-solid fa-share"></i>
                             <span>12</span>
                         </div>
                         
                         <p>Partager</p>
                     </div>
                </div>
        </div>
  )
}

export default Product;
