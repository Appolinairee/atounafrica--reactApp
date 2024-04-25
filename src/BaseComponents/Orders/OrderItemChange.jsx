import React from "react";

const OrderItemChange = ({productCount,  setProductCount, current_price}) => {

    const handleProductCount = (type) => {
        if (!type && productCount > 1) {
           setProductCount(productCount - 1);
        }
  
        if (type) {
           setProductCount(productCount + 1);
        }
     };

   return (
      <div className="my-5">
         <p>Disponibilité: </p>

         <div className="flex items-end my-3 justify-between">
            <div className="flex gap-2 *:border-solid *:border-dark/40 *:rounded-full *:px-2 *:border-[1px] *:text-[15px] *:cursor-pointer">
               <span onClick={() => handleProductCount(false)}>-</span>
               <span>0 {productCount}</span>
               <span onClick={() => handleProductCount(true)}>+</span>
            </div>

            <div className="productPrice">
               <p>
                  Total: <b>{current_price * productCount}</b> Fcfa
               </p>
            </div>
         </div>
      </div>
   );
};

export default OrderItemChange;
