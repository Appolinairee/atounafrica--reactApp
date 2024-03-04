import React, { useState, useEffect, useRef } from "react";
import {
   FaBuilding,
   FaImage,
   FaAlignLeft,
   FaPhone,
   FaMapMarkerAlt,
   FaEnvelope,
   FaTruck,
   FaCreditCard,
} from "react-icons/fa";

const CreatorForm = () => {
   const [formData, setFormData] = useState({
      companyName: "",
      logo: "",
      description: "",
      phoneNumber: "",
      location: "",
      commerceEmail: "",
   });

   const companyNameRef = useRef();

   useEffect(() => {
      // companyNameRef.current.focus();
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };


   const handleSubmit = (e) => {
      e.preventDefault();
      // Ajoutez ici la logique pour traiter les données du formulaire, par exemple, envoyez-les à un serveur.
      console.log("Données soumises:", formData);
   };

   return (
      <div className="my-8 xs:!mt-4 pb-2">
         <div className="mx-[15%] large:mx-[5%] xs:!mx-[2.5%]">
            <h2 className="font-bold text-[2rem] text-center xs:block xs:text-[17px]">
               Configurer vos ventes
            </h2>

            <div className="my-8 mx-auto w-fit min-w-[400px] xs:min-w-full xs:!max-w-full">
               <form onSubmit={handleSubmit}>
                  <div className="mb-8 w-full">
                     <label
                        htmlFor="location"
                        className="flex w-fit gap-1 mb-1"
                     >
                        <FaMapMarkerAlt className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           Localisation <span className="text-primary"> *</span>
                        </p>
                     </label>

                     <input
                        id="location"
                        name="location"
                        rows="4"
                        placeholder="Localisation"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />
                  </div>

                  <div className=" mb-8">
                     <label
                        htmlFor="deliveryType"
                        className="flex w-fit gap-1 mb-1"
                     >
                        <FaTruck className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           Types de livraisons par défaut
                           <span className="text-primary"> *</span>
                        </p>
                     </label>

                     <select
                        id="deliveryType"
                        name="deliveryType"
                        value={formData.deliveryType}
                        multiple
                        onChange={handleChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-2 border-dark/40 rounded-[20px] overflow-auto"
                     >
                        <option value="personnel">
                           Le vendeur se charge personnellement
                        </option>
                        <option value="atoun">
                           Le vendeur délègue à Atoun
                        </option>
                        <option value="autre">Autre (précisez)</option>
                     </select>
                  </div>

                  <div className="mb-8">
                     <label
                        htmlFor="paymentMethods"
                        className="flex w-fit gap-1 mb-1"
                     >
                        <FaCreditCard className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           Moyens de paiement
                           <span className="text-primary"> *</span>
                        </p>
                     </label>

                     <select
                        id="paymentMethods"
                        name="paymentMethods"
                        multiple
                        value={formData.paymentMethods}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px] overflow-auto"
                     >
                        <option value="virement">Virement bancaire</option>
                        <option value="carteCredit">MTN</option>
                        <option value="paypal">MOOV</option>
                        <option value="especes">Espèces</option>
                     </select>
                  </div>

                  <div className="mb-8">
                     <label
                        htmlFor="commerceEmail"
                        className="flex w-fit gap-1 mb-1"
                     >
                        <FaEnvelope className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           E-mail de commerce{" "}
                           <span className="text-primary"> *</span>
                        </p>
                     </label>

                     <input
                        type="email"
                        id="commerceEmail"
                        name="commerceEmail"
                        placeholder="E-mail de commerce"
                        value={formData.commerceEmail}
                        onChange={handleChange}
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />
                  </div>

                  <button
                     type="submit"
                     className="rounded-[20px] p-3 bg-primary w-full text-white text-xl font-bold xs:text-[17px]"
                  >
                     Soumettre
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default CreatorForm;
