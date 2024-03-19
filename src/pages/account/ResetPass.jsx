import { RiLockPasswordLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import SignImage from "../../assets/signImage.png";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import LoadingButton from "../../BaseComponents/LoadingButton";
import ErrorMessage from "../../BaseComponents/ErrorMessage";

const ResetPass = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const email = encodeURIComponent(searchParams.get("email"));
   const expires = searchParams.get("expires");
   const signature = searchParams.get("signature");
   const [password, setPassword] = useState(false);
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      email: searchParams.get("email"),
      password: "",
      password_confirmation: "",
   });
   const [errors, setErrors] = useState();

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const mutation = useMutation(
      (formData) =>
         axios.post(`http://127.0.0.1:8000/api/auth/password/reset?email=${email}&expires=${expires}&signature=${signature}`, formData),
      {
         onSuccess: () => {
            navigate("/connexion");
         },
         onError: (error) => {
            setErrors("Une erreur est survenue. Veuillez réessayer.");
         },
      }
   );

   const handleResetPassword = async (e) => {
      e.preventDefault();

      if (!formData.password.trim()) setErrors("Le mot de passe est requis");

      if (formData.password.trim() && formData.password.length < 7)
         setErrors("Le mot de passe doit être d'au moins 8 caractères");

      if (
         formData.password.trim() &&
         formData.password.length >= 7 &&
         formData.password !== formData.password_confirmation
      )
         setErrors("Les mots de passe ne correspondent pas");

      mutation.mutate(formData);
   };

   return (
      <div className="bg-light pt-1">
         <div className="max-w-[360px] rounded-xl m-auto px-4 bg-gradient-green-yellow z-30 py-[0rem] pb-0 xs:px-5 min-h-[80vh]">
            <div className="flex flex-wrap justify-between w-full">
               <div className="">
                  <h3 className="text-2xl font-bold xs:text-[1.5rem]">
                     Mot de passe
                  </h3>
                  <p className="text-[15px] font-medium mt-2 text-dark/70">
                     Définir un nouveau
                     <br />
                     mot de passe.
                  </p>
               </div>

               <div className="z-0">
                  <img
                     className="w-full h-full max-w-[150px] translate-y-8"
                     src={SignImage}
                     alt="ResetPass"
                  />
               </div>
            </div>

            <div className="w-full mt-4">
               <form className="z-10" onSubmit={handleResetPassword}>
                  <ErrorMessage text={errors} />

                  <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                     <RiLockPasswordLine className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2" />

                     <input
                        className="pl-6 w-full"
                        type={`${password ? "text" : "password"}`}
                        placeholder="Mot de passe"
                        name="password"
                        onChange={handleInputChange}
                        required
                     />

                     <span
                        className={`absolute right-4 text-dark/60 top-1/2 text-[17px] -translate-y-1/2 cursor-pointer`}
                        onClick={() => setPassword(!password)}
                     >
                        <GoEye />
                        <span
                           className={`absolute top-[40%] translate-y-1/2 left-0 w-full h-[2px] rotate-45 ${
                              password ? "" : "bg-dark/50"
                           }`}
                        ></span>
                     </span>
                  </div>

                  <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                     <RiLockPasswordLine className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2" />

                     <input
                        className="pl-6 w-full"
                        type={`${password ? "text" : "password"}`}
                        placeholder="Confirmation..."
                        name="password_confirmation"
                        onChange={handleInputChange}
                        required
                     />
                  </div>

                  <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-primary text-dark rounded-[8px] mt-3 mb-2 text-center cursor-pointer">
                     <LoadingButton
                        text="Modifier"
                        loading={mutation.isLoading}
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ResetPass;
