import ProductCollection from "../ProductCollection/ProductCollection";
import SteepTitle from "../SteepTitle/SteepTitle";
import "./ProductReceive.css";

const ProductReceive = () => {
  return (
    <ProductCollection>
        <div className="receiveContent">
            <SteepTitle title="Confirmer la réception" index="4" />
            <div className="orders">
                        <div className="order">
                            <div className="orderDetails flex">
                                <div className="orderDetailsText">
                                    <p>Nom du produit commandé</p>
                                    <span>Prix total: <b>10.000 Fcfa</b></span>
                                </div>
        
                                <div className="orderImage">
                                    <img src="../assets/photos(exemples)/mobilier.png" alt="Image de commande" />
                                </div>
                            </div>
        
                            <div className="orderState">
                                <p>Livraison <b>enclenchée</b></p>
                                <p>Livreur en <b>route...</b></p>
                                <p>Point de rencontre <b>Carrefour Y</b></p>
                                <div className="orderButtons flex">
                                    <p className="orderDetails flex"> <span>Plus</span> <i className="fa-regular fa-eye"></i></p>
                                    <button className="button button2">Suivre la livraison</button>
                                </div>
                            </div>
                        </div>
        
            </div>
        
            <div className="receiveForm">
                        <h4>Votre avis sur le produit et/ou le processus</h4>
                        <form action="">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Votre avis ici.."></textarea>
                            <button className="button button1" type="submit">
                                <p>Soumettre</p>
                                <i className="fa fa-arrow-right"></i>
                            </button>
                        </form>
            </div>
        </div>
    </ProductCollection>
  )
}

export default ProductReceive;
