import "./Orders.css";
import Product from "../../assets/photos(exemples)/mobilier.png";

const Orders = () => {
    return (
        <div class="orders">
            <div class="order">
                <div class="orderDetails flex">
                    <div class="orderDetailsText">
                        <p>Nom du produit commandé</p>
                        <span>Prix total: <b>10.000 Fcfa</b></span>
                    </div>
       
                    <div class="orderImage">
                                   <img src={Product} alt="Image de commande" />
                               </div>
                           </div>
       
                           <div class="orderState">
                               {/* <p>Statut: En cours de <b>livraison</b></p>
                               <div class="orderButtons flex">
                                   <p class="orderDetails flex"> <span>Plus</span> <i class="fa-regular fa-eye"></i></p>
                                   <button class="button button2">Suivre la livraison</button>
                               </div> */}
                               
                               {/* <!-- Prices States --> */}
                               <div class="orderPrices">
                                    <p class="orderPriceUnit">Prix Produit(s): 10000 Fcfa</p>
                                    <p class="orderPriceLivr">Prix unitaire: 2000 Fcfa</p>
                                    <p class="orderAll">Total: <b>12000 Fcfa</b></p>
                               </div>
                           </div>
                       </div>
   
        </div>
    )
}

export default Orders;