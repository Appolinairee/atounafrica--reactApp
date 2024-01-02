import "./ProductPayment.css";
import ProductCollection from "../ProductCollection/ProductCollection";
import Orders from "../Orders/Orders";
import Button from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import SteepTitle from "../SteepTitle/SteepTitle";

const ProductPayment = () => {
  return (
    <ProductCollection>
       <div className="paymentsSection">
                <SteepTitle title="Paiement" index="2" />

                <div className="ordersSection">
                    <div className="orderPaymentType flex">
                        <p className="typeActive after">En espèce</p>
                        <p>Par Cotisation</p>
                    </div>

                   <Orders />

                   <div className="orderPaymentDetails">
                        <h3>Informations dur votre Paiement</h3>
                        
                        <ul>
                            <li className="flex">
                                <div className="icon"><FaCheckCircle /></div>
                                <p>Vous Payez à Atoun en toute sécurité</p>
                            </li>

                            <li className="flex">
                                <div className="icon"><FaCheckCircle /></div>
                                <p>Vous recevez votre colis avant de confirmer la réception</p>
                            </li>

                            <li className="flex">
                                <div className="icon"><FaCheckCircle /></div>
                                <p>Nous payons à notre vendeur sous votre confirmation</p>
                            </li>

                            <li className="flex">
                                <div className="icon"><FaCheckCircle /></div>
                                <p>Au cas où un problème se passe, vous pouvez réclamer vos paiement</p>
                            </li>
                        </ul>
                   </div>

                <Button buttonClass="button fixedButton flex" buttonContent="Payer à Atoun" buttonIcon={<RiSecurePaymentFill />} />
               </div>
            </div>
    </ProductCollection>
  )
}

export default ProductPayment;
