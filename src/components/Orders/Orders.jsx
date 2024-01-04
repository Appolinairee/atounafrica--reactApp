import "./Orders.css";
import Product from "../../assets/photos(exemples)/mobilier.png";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const Orders = ({children, state}) => {

    const [cardState, setCardState] = useState(state);

    return (
        <div className="orders">
            <div className={cardState? "order orderActive": "order"}>
                <div className="orderDetails flex">
                    <div className="orderDetailsText">
                        <p>Nom du produit commandé</p>
                        <span>Prix total: <b>10.000 Fcfa</b></span>
                    </div>
       
                    <div className="orderImage">
                        <img src={Product} alt="Image de commande" />
                    </div>
                </div>

                <div className="orderState">
                    <p>Statut: En cours de <b>livraison</b></p>
                               <div className="orderButtons flex">
                                   <p className="orderDetails flex" onClick={()=>{setCardState(!cardState)}}> <span>
                                        {cardState ? "Moins": "Plus"}
                                    </span> </p>
                                   <button className="button">
                                        Suivre la livraison
                                        <div className="icon"><FaEye /></div>
                                    </button>
                               </div>
                               
                               {/* <!-- Prices States --> */}
                               <div className="orderPrices">
                                    <p className="orderPriceUnit">Prix Produit(s): 10000 Fcfa</p>
                                    <p className="orderPriceLivr">Frais livraison: 2000 Fcfa</p>
                                    <p className="orderAll">Total: <b>12000 Fcfa</b></p>
                               </div>
                </div>
            </div>
   
        </div>
    )
}

export default Orders;