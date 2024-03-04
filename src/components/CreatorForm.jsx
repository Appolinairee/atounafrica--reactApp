import React, { useState, useEffect, useRef } from "react";
import {
   FaBuilding,
   FaImage,
   FaAlignLeft,
   FaPhone,
   FaMapMarkerAlt,
   FaEnvelope,
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
      // Mettez automatiquement le focus sur le premier champ au chargement du composant
      companyNameRef.current.focus();
   }, []);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleLogoChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setFormData((prevData) => ({
               ...prevData,
               logo: reader.result,
            }));
         };
         reader.readAsDataURL(file);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // Ajoutez ici la logique pour traiter les données du formulaire, par exemple, envoyez-les à un serveur.
      console.log("Données soumises:", formData);
   };

   return (
      <div className="my-8 xs:!mt-4 mb-2">
         <div className="mx-[15%] large:mx-[5%]">
            <h2 className="font-bold text-[2rem] text-center xs:block xs:text-[17px]">
               Quelques informations sur votre structure! <br />
            </h2>

            <div className="my-8 mx-auto w-fit">
               <form onSubmit={handleSubmit}>
                  <div className=" mb-8">
                     <label
                        htmlFor="companyName"
                        className="flex w-fit gap-1 mb-1 "
                     >
                        <FaBuilding className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           Nom de votre entreprise{" "}
                           <span className=" text-primary"> *</span>{" "}
                        </p>
                     </label>

                     <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Nom de l'entreprise..."
                        value={formData.companyName}
                        onChange={handleChange}
                        ref={companyNameRef}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px] "
                     />
                  </div>

                  <div className="mb-8">
                     <label htmlFor="logo" className="flex w-fit gap-1 mb-1">
                        <FaImage className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           Logo de votre entreprise{" "}
                           <span className="text-primary"> *</span>
                        </p>
                     </label>

                     <input
                        type="file"
                        id="logo"
                        name="logo"
                        accept="image/*"
                        onChange={handleLogoChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />
                     {formData.logo && (
                        <img
                           src={formData.logo}
                           alt="Logo preview"
                           className="mt-2 max-w-[70px] h-auto"
                        />
                     )}
                  </div>

                  <div className="mb-8">
                     <label
                        htmlFor="description"
                        className="flex w-fit gap-1 mb-1"
                     >
                        <FaAlignLeft className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           Description <span className="text-primary"> *</span>
                        </p>
                     </label>

                     <textarea
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />
                  </div>

                  <div className="mb-8">
                     <label
                        htmlFor="phoneNumber"
                        className="flex w-fit gap-1 mb-1"
                     >
                        <FaPhone className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           Numéro de téléphone{" "}
                           <span className="text-primary"> *</span>
                        </p>
                     </label>

                     <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="+229 00 00 00 00"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />
                  </div>

                  <div className="mb-8">
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

                  <div className="mb-8">
                     <label
                        htmlFor="commerceEmail"
                        className="flex w-fit gap-1 mb-1"
                     >
                        <FaEnvelope className="text-primary" />
                        <p className="text-[17px] xs:!text-[15px] font-medium">
                           E-mail de commerce{" "}
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

                  <button type="submit" className="rounded-[20px] p-3 bg-primary w-full text-white text-xl font-bold xs:text-[17px]" >Soumettre</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default CreatorForm;
