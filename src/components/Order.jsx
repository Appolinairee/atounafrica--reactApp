import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const Order = ({ orderItem }) => {
  const [cardState, setCardState] = useState(true); 

  return (
    <div className="orders">
      <div className={cardState ? "order orderActive" : "order"}>
        <div className="orderDetails flex">
          <div className="orderImage">
            {/* <img src={Product} alt="Commande" /> */}
          </div>
        </div>

        <div className="orderState">
          <p>
            Statut: En cours de <b>livraison</b>
          </p>
          <div className="orderButtons flex">
            <p
              className="orderDetails flex"
              onClick={() => {
                setCardState(!cardState);
              }}
            >
              {" "}
              <span>{cardState ? "Moins" : "Plus"}</span>{" "}
            </p>
            <button className="button">
              Suivre la livraison
              <div className="icon">
                <FaEye />
              </div>
            </button>
          </div>

          {/* <!-- Prices States --> */}
          <div className="orderPrices">
            <p className="orderPriceUnit">Prix Produit(s): {orderItem.total_amount} Fcfa</p> 
            <p className="orderPriceLivr">Frais livraison: 2000 Fcfa</p> {/* Utiliser les frais de livraison si disponibles */}
            <p className="orderAll">
              Total: <b>{orderItem.total_amount + 2000} Fcfa</b> {/* Calculer le total en ajoutant les frais de livraison */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;