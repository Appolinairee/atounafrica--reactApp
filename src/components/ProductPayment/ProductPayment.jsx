import "./ProductPayment.css";
import Orders from "../Orders/Orders";
import Button from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const ProductPayment = ({ data }) => {

   const calculateTotal = () => {
      let total = 0;
      data.order_items.forEach(item => {
         total += item.quantity * item.unit_price;
      });
      return total;
   };

   console.log(data);

   return (
      <div className="paymentsSection">
         <div className="ordersSection">
            <div className="orderPaymentType flex">
               <p className={data.payment_type === 1 ? "typeActive after" : ""}>En espèce</p>
               <p className={data.payment_type === 0 ? "typeActive after" : ""}>Par Cotisation</p>
            </div>

            <Orders />

            <div className="orderPaymentDetails">
               <h3>Informations sur votre Paiement</h3>

               <ul>
                  <li className="flex">
                     <div className="icon">
                        <FaCheckCircle />
                     </div>
                     <p>Vous Payez à {data.creator_id} en toute sécurité</p>
                  </li>

                  <li className="flex">
                     <div className="icon">
                        <FaCheckCircle />
                     </div>
                     <p>Total à Payer: {calculateTotal()} Fcfa</p>
                  </li>
               </ul>
            </div>

            <Button
               buttonClass="button fixedButton flex"
               buttonContent={`Payer à ${data.creator_id}`}
               buttonIcon={<RiSecurePaymentFill />}
            />
         </div>
      </div>
   );
};

export default ProductPayment;