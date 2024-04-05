import ProductCollection from "../ProductCollection/ProductCollection";
import SteepTitle from "../SteepTitle/SteepTitle";
import "./ProductReceive.css";
import { MdShoppingCart } from "react-icons/md";
import Orders from "../Orders/Orders";
import Order from "../Order";
import { useSelector } from "react-redux";
import { selectOrderById } from "../../Features/orders/ordersSlice";

const ProductReceive = ({ orderId }) => {
   const order = useSelector(selectOrderById(orderId));

   return (
      <div className="receiveContent">
         <div className="receiveContent">
            <div className="reception">
               <h3>Confirmer votre réception</h3>
               <p>Détails de sous-commandes</p>
               {order.order_items.map((orderItem, index) => (
                  <div key={index}>
                     <Order orderItem={orderItem} />
                  </div>
               ))}
            </div>

            <div className="receiveForm">
               <h4>Votre avis compte! Il est temps!</h4>
               <form action="">
                  <textarea
                     name=""
                     id=""
                     cols="30"
                     rows="10"
                     placeholder="Votre avis ici.."
                  ></textarea>
                  <button className="button button1" type="submit">
                     <p>Soumettre</p>
                     <i className="fa fa-arrow-right"></i>
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ProductReceive;
