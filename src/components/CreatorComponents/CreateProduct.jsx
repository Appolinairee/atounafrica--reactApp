import { useState } from "react";
import { FaClock, FaCog, FaMoneyBillAlt, FaTag, FaTags } from "react-icons/fa";
import Label from "../../BaseComponents/Label";

const CreateProduct = () => {
   const [productFormData, setProductFormData] = useState({
      productName: "",
      productFeatures: Array(5).fill(""),
      deliveryTypes: [],
      productPrice: "",
      promotionPrice: "",
      productCategory: [],
      availability: {
         status: "",
         quantity: "",
      },
   });

   const handleProductChange = (e) => {
      const { name, value, type } = e.target;

      if (type === "checkbox") {
         // Gestion des cases à cocher (sélection multiple)
         const updatedValues = [...productFormData[name]];
         if (updatedValues.includes(value)) {
            updatedValues.splice(updatedValues.indexOf(value), 1);
         } else {
            updatedValues.push(value);
         }
         setProductFormData((prevData) => ({
            ...prevData,
            [name]: updatedValues,
         }));
      } else if (name === "productFeatures") {
         // Gestion des caractéristiques
         const index = parseInt(e.target.dataset.index, 10);
         const updatedFeatures = [...productFormData.productFeatures];
         updatedFeatures[index] = value;
         setProductFormData((prevData) => ({
            ...prevData,
            productFeatures: updatedFeatures,
         }));
      } else if (name === "availability") {
         // Gestion de la disponibilité avec quantité
         setProductFormData((prevData) => ({
            ...prevData,
            availability: {
               ...prevData.availability,
               status: value,
               quantity:
                  value === "disponible" ? prevData.availability.quantity : "",
            },
         }));
      } else {
         // Gestion des autres champs
         setProductFormData((prevData) => ({
            ...prevData,
            [name]: value,
         }));
      }
   };

   const handleProductSubmit = (e) => {
      e.preventDefault();
      // Ajoutez ici la logique pour traiter les données du formulaire
   };

   return (
      <div className="my-8  xs:!mt-4">
         <div className="mx-[15%] large:mx-[5%] xs:!mx-[2.5%]">
            <h2 className="font-bold text-[2rem] text-center xs:block xs:text-[17px]">
               Création d'un produit @ <br />
            </h2>

            <div className="my-8 mx-auto max-w-[500px]">
               <form onSubmit={handleProductSubmit}>
                  <div className="mb-8">
                     <Label
                        name="Nom de votre produit"
                        htmlFor="productName"
                        icon={<FaTag />}
                        required={true}
                     />

                     <input
                        type="text"
                        id="productName"
                        name="productName"
                        placeholder="Nom du produit..."
                        value={productFormData.productName}
                        onChange={handleProductChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />
                  </div>

                  <div className="mb-8">
                     <Label
                        name="Galerie du produit: image ou vidéo"
                        htmlFor="productGalery"
                        icon={<FaTag />}
                        required={true}
                     />

                     <input
                        type="file"
                        id="productGalery"
                        name="productGalery"
                        placeholder="Galery..."
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />

                     <p className=" mt-2 cursor-pointer">Ajouter une autre <span className="text-light bg-primary rounded-full px-1">+</span></p>
                  </div>

                  <div className="mb-8">
                     <Label
                        name="Caractéristiques du produit"
                        htmlFor="productFeatures"
                        icon={<FaCog />}
                        required={true}
                     />

                     <input
                        type="text"
                        name="productFeatures"
                        placeholder="Caractéristique 1"
                        onChange={handleProductChange}
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px] mt-2"
                     />

                     <input
                        type="text"
                        name="productFeatures"
                        placeholder="Caractéristique 2"
                        onChange={handleProductChange}
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px] mt-2"
                     />

                     <p className=" mt-2 ">Ajouter une autre +</p>
                  </div>

                  <div className="mb-8">
                     <Label
                        name="Types de livraison"
                        htmlFor="deliveryTypes"
                        icon={<FaClock />}
                        required={true}
                     />

                     <div className="space-y-2">
                        <div className="flex items-center w-fit gap-4">
                           <input
                              type="checkbox"
                              id="deliveryType1"
                              name="deliveryTypes"
                              value="express"
                              onChange={handleProductChange}
                              checked={productFormData.deliveryTypes.includes(
                                 "express"
                              )}
                           />
                           <label htmlFor="deliveryType1" className="ml-2">
                              Livraison express
                           </label>
                        </div>

                        <div className="flex items-center w-fit gap-4">
                           <input
                              type="checkbox"
                              id="deliveryType2"
                              name="deliveryTypes"
                              value="standard"
                              onChange={handleProductChange}
                              checked={productFormData.deliveryTypes.includes(
                                 "standard"
                              )}
                           />
                           <label htmlFor="deliveryType2" className="ml-2">
                              Livraison standard
                           </label>
                        </div>

                        <div className="flex items-center w-fit gap-4">
                           <input
                              type="checkbox"
                              id="deliveryType3"
                              name="deliveryTypes"
                              value="gratuite"
                              onChange={handleProductChange}
                              checked={productFormData.deliveryTypes.includes(
                                 "gratuite"
                              )}
                           />
                           <label htmlFor="deliveryType3" className="ml-2">
                              Livraison gratuite
                           </label>
                        </div>
                     </div>
                  </div>

                  <div className="mb-8">
                     <Label
                        name="Prix normal du produit"
                        htmlFor="productPrice"
                        icon={<FaMoneyBillAlt />}
                        required={true}
                     />

                     <input
                        type="number"
                        id="productPrice"
                        name="productPrice"
                        placeholder="Prix normal du produit..."
                        value={productFormData.productPrice}
                        onChange={handleProductChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />
                  </div>

                  <div className="mb-8">
                     <Label
                        name="Prix en promotion (optionnel)"
                        icon={<FaMoneyBillAlt />}
                        htmlFor="promotionPrice"
                     />

                     <input
                        type="number"
                        id="promotionPrice"
                        name="promotionPrice"
                        placeholder="Prix en promotion du produit..."
                        value={productFormData.promotionPrice}
                        onChange={handleProductChange}
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     />
                  </div>

                  <div className="mb-8">
                     <Label
                        name="Catégories du produit"
                        htmlFor="productCategory"
                        icon={<FaTags />}
                        required={true}
                     />

                     <select
                        id="productCategory"
                        name="productCategory"
                        multiple
                        value={productFormData.productCategory}
                        onChange={handleProductChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px] overflow-auto"
                     >
                        <option value="electronique">Électronique</option>
                        <option value="vetements">Vêtements</option>
                        <option value="maison">Maison et jardin</option>
                        {/* Ajoutez d'autres options au besoin */}
                     </select>
                  </div>

                  <div className="mb-8">
                     <Label
                        name="Disponibilité du produit"
                        htmlFor="availability"
                        icon={<FaClock />}
                        required={true}
                     />

                     <select
                        id="availability"
                        name="availability"
                        value={productFormData.availability.status}
                        onChange={handleProductChange}
                        required
                        className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px]"
                     >
                        <option value="">
                           Sélectionnez la disponibilité du produit
                        </option>
                        <option value="disponible">Disponible</option>
                        <option value="rupture">En rupture de stock</option>
                        <option value="commande">En commande</option>
                        {/* Ajoutez d'autres options au besoin */}
                     </select>

                     {productFormData.availability.status === "disponible" && (
                        <input
                           type="number"
                           id="availabilityQuantity"
                           name="availability"
                           placeholder="Quantité disponible..."
                           value={productFormData.availability.quantity}
                           onChange={handleProductChange}
                           className="border-solid border-[1px] w-full p-2 py-3 border-dark/40 rounded-[20px] mt-2"
                        />
                     )}
                  </div>

                  <button
                     type="submit"
                     className="rounded-[20px] p-3 bg-primary w-full text-white text-xl font-bold xs:text-[17px]"
                  >
                     Créer le produit
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default CreateProduct;
