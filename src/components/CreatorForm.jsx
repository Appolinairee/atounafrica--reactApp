import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaImage, FaAlignLeft, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const CreatorForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    logo: '',
    description: '',
    phoneNumber: '',
    location: '',
    commerceEmail: '',
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
    console.log('Données soumises:', formData);
  };

  return (
    <div>
      <h2>
        Quelques informations sur votre structure! Pour le bien de vos clients
      </h2>
      
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="companyName">
              <FaBuilding /> Nom de l'entreprise:
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Nom de l'entreprise"
              value={formData.companyName}
              onChange={handleChange}
              ref={companyNameRef}
              required
            />
          </div>

          <div>
            <label htmlFor="logo">
              <FaImage /> Logo:
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept="image/*"
              onChange={handleLogoChange}
              required
            />
            {formData.logo && <img src={formData.logo} alt="Logo preview" style={{ maxWidth: '100px', marginTop: '10px' }} />}
          </div>

          <div>
            <label htmlFor="description">
              <FaAlignLeft /> Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">
              <FaPhone /> Numéro de téléphone:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Numéro de téléphone"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="location">
              <FaMapMarkerAlt /> Localisation:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Localisation"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="commerceEmail">
              <FaEnvelope /> E-mail de commerce:
            </label>
            <input
              type="email"
              id="commerceEmail"
              name="commerceEmail"
              placeholder="E-mail de commerce"
              value={formData.commerceEmail}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  );
}

export default CreatorForm;
