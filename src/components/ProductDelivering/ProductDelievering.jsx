import "./ProductDelievering.css";
import ProductCollection from "../ProductCollection/ProductCollection";
import SteepTitle from "../SteepTitle/SteepTitle";

const ProductDeliever = () => {
  return (
    <ProductCollection>
      <div className="paymentsSection">
            <SteepTitle title="Choix de la livraison" index="3" />

                <div className="deliversSection">
                    <div className="deliverSection">
                        <h4>Choisissez votre option de livraison</h4>

                        <div className="deliverOptions">
                            <form action="" method="post">
                                <div className="delieverOption flex input">
                                    <input type="checkbox" value="créateur" id="creator" />
                                    <label for="creator">Se faire livrer par le créateur</label>
    
                                    <div className="plusIcon">{">"}</div>
                                </div>
    
                                <div className="delieverOption flex input">
                                    <input type="checkbox" value="Gozem" id="gozem" />
                                    <label for="gozem">Gozem</label>
    
                                    <div className="plusIcon">{"<"}</div>
                                </div>
    
                                <div className="delieverOption flex input">
                                    <input type="checkbox" value="Gozem" id="laly" />
                                    <label for="laly">Laly Express</label>
    
                                    <div className="plusIcon">{"<"}</div>
                                </div>
    
                                <div className="delieverOption flex input">
                                    <input type="checkbox" value="Gozem" id="deliverhouse" />
                                    <label for="deliverhouse">Deliver House</label>
    
                                    <div className="plusIcon">{">"}</div>
                                </div>

                                <button type="submit">Soumettez votre choix</button>
                            </form>
                        </div>
                    </div>

                    <div className="deliverSection deliverDetails">
                        <h4>Vos coordonnées pour la livraison</h4>

                        <div className="delieverDetails flex">
                            <form action="">
                                <div className="deliverDetail input">
                                    <input type="text" placeholder="Lieu de livraison" />
                                </div>

                                <div className="deliverDetail input">
                                    <input type="datetime" placeholder="Date et heure de livraison" />
                                </div>

                                <button type="submit">Confirmer vos coordonnées</button>
                            </form>
                        </div>
                    </div>
               </div>

               <div className="deliverPrices">
                    <p>Frais de livraison: <b>En attente du livreur</b> (dans au plus 20 minutes) </p>
                    <br />
                    <p>Prix total: <b>(5000 + ...)</b> Fcfa </p>
               </div>
        </div>
    </ProductCollection>
  )
}

export default ProductDeliever;
