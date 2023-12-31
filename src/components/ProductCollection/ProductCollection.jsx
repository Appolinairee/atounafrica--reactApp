import "./ProductCollection.css";

import { MdShoppingCart } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import ProductPresentation from "../ProductPresentation/ProductPresentation";

const ProductCollection = () => {
  return (
    <div className='productCollection topSection'>
      {/* <!-- Steeps of Order --> */}
        <div className="stepsSection">
            <div className="steps flex">
                <div className="steep flex active">
                    <div className="icon"><MdShoppingCart /></div>
                    <p>Commander</p>
                </div>
    
                <div className="steep flex">
                    <div className="icon"><FaTruckFast /></div>
                    <p>Choix Livraison</p>
                </div>
    
                <div className="steep flex">
                    <div className="icon"><RiSecurePaymentFill /></div>
                    <p>Paiement</p>
                </div>
    
                <div className="steep flex">
                    <div className="icon"><FaRegStar /></div>
                    <p>Réception</p>
                </div>
            </div>
        </div>

        <ProductPresentation />
    </div>
  )
}

export default ProductCollection;