import ProductCollection from "../ProductCollection/ProductCollection";
import SteepTitle from "../SteepTitle/SteepTitle";
import "./ProductReceive.css";
import { MdShoppingCart } from "react-icons/md";
import Orders from "../Orders/Orders";

const ProductReceive = () => {
  return (
    <ProductCollection>
        <div className="receiveContent">
            <SteepTitle title="Confirmer la réception" index="4" icon={<MdShoppingCart />} />
            
            <div className="receiveContent">
                <div className="reception">
                    <h3>Confirmer votre réception</h3>
                    <Orders />
                </div>
        
                <div className="receiveForm">
                        <h4>Votre avis compte! Il est temps!</h4>
                        <form action="">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Votre avis ici.."></textarea>
                            <button className="button button1" type="submit">
                                <p>Soumettre</p>
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </form>
                </div>
            </div>
        </div>
    </ProductCollection>
  )
}

export default ProductReceive;
