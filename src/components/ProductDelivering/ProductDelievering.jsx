import "./ProductDelievering.css";
import ProductCollection from "../ProductCollection/ProductCollection";
import SteepTitle from "../SteepTitle/SteepTitle";
import Button from "../Button/Button";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const ProductDeliever = () => {
  return (
    <ProductCollection>
      <div className="paymentsSection">
            <SteepTitle title="Choix de la livraison" index="3" icon={<FaTruckFast />} />

            <form action="" method="post">
                <div className="deliversSection">
                    <div className="deliverSection">
                        <h4>Choisissez votre option de livraison</h4>

                        <div className="deliverOptions">
                                <div className="delieverOption flex input">
                                    <input type="checkbox" value="créateur" id="creator" />
                                    <label htmlFor="creator">Se faire livrer par le créateur</label>
    
                                    <div className="plusIcon">{">"}</div>
                                </div>
    
                                <div className="delieverOption flex input">
                                    <input type="checkbox" value="Gozem" id="gozem" />
                                    <label htmlFor="gozem">Gozem</label>
    
                                    <div className="plusIcon">{"<"}</div>
                                </div>
    
                                <div className="delieverOption flex input">
                                    <input type="checkbox" value="Gozem" id="laly" />
                                    <label htmlFor="laly">Laly Express</label>
    
                                    <div className="plusIcon">{"<"}</div>
                                </div>
    
                                <div className="delieverOption flex input">
                                    <input type="checkbox" value="Gozem" id="deliverhouse" />
                                    <label htmlFor="deliverhouse">Deliver House</label>
    
                                    <div className="plusIcon">{">"}</div>
                                </div>
                        </div>
                    </div>

                    <div className="deliverSection deliverDetails">
                        <h4>Vos coordonnées pour la livraison</h4>

                        <div className="delieverDetailsContent flex">
                                <div className="deliverDetail input">
                                    <div className="icon"><MdOutlinePlace /></div>
                                    <input type="text" placeholder="Lieu de livraison" />
                                </div>

                                <div className="deliverDetail input">
                                    <div className="icon"><CiCalendarDate /></div>
                                    <input type="datetime" placeholder="Date et heure de livraison" />
                                </div>
                        </div>
                </div>
                </div>

                <Button buttonClass="button button4" buttonContent="Confirmer la livraison" buttonIcon={<FaTruckFast />}/>
            </form>

               <div className="deliverPrices">
                    <p>Date et Heure: <b>En attente de confirmation</b> </p> <br />
                    <p>Lieu de livraison: <b>Bokpa</b> </p> <br />
                    <p>Frais de livraison: <b>En attente du livreur</b></p>
                    <br />
                    <p>Prix total: <b>(5000 + ...)</b> Fcfa </p>
               </div>
        </div>
    </ProductCollection>
  )
}

export default ProductDeliever;
