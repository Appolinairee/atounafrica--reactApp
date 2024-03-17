import { LuUser } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import SignImage from "../../assets/signImage.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";
import { ImSpinner6 } from "react-icons/im";
import MailIsSendNotification from "../../BaseComponents/MailIsSendNotification";
import ErrorMessage from "../../BaseComponents/ErrorMessage";
import InputField from "../../BaseComponents/InputField";
import LoadingButton from "../../BaseComponents/LoadingButton";


const Inscription = () => {
   const [password, setPassword] = useState(false);
   const [confirmationEmailSent, setConfirmationEmailSent] = useState(false);

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
   });

   const [errors, setErrors] = useState({});

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const mutation = useMutation(
      (formData) =>
         axios.post("http://127.0.0.1:8000/api/auth/register", formData),
      {
         onSuccess: () => {
            console.log("User registered successfully");
            setConfirmationEmailSent(true);
         },
         onError: (error) => {
            const { data } = error.response;
            console.log(data.errorsList);

            if (data && data.errorsList) {
               setErrors(data.errorsList);
            } else {
               console.error(
                  "Une erreur s'est produite lors de l'inscription:"
               );
            }
         },
      }
   );

   const handleRegistration = async (e) => {
      e.preventDefault();
      const newErrors = {};

      if (!formData.name.trim())
         newErrors.name = "Le nom d'utilisateur est requis";
      else if (formData.name.trim().length < 4)
         newErrors.name =
            "Le nom d'utilisateur doit comporter au moins 4 caractères";
      else if (formData.name.trim().length > 20)
         newErrors.name =
            "Le nom d'utilisateur doit comporter au plus 20 caractères";

      if (!formData.email.trim()) newErrors.email = "L'email est requis";
      else if (
         !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
            formData.email.trim()
         )
      )
         newErrors.email = "L'email est invalide";

      if (!formData.password.trim())
         newErrors.password = "Le mot de passe est requis";

      if (formData.password.trim() && formData.password.length < 7)
         newErrors.password =
            "Le mot de passe doit être d'au moins 8 caractères";

      if (
         formData.password.trim() &&
         formData.password.length >= 7 &&
         formData.password !== formData.password_confirmation
      )
         newErrors.password_confirmation =
            "Les mots de passe ne correspondent pas";

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
         mutation.mutate(formData);
      }
   };

   return (
      <div className="bg-light pt-1">
         <div className="max-w-[380px] rounded-xl m-auto px-4 bg-gradient-green-yellow z-30 pb-20 xs:px-5 productShadow !h-fit">
            <div className="flex flex-wrap justify-between w-full h-fit">
               <div className="">
                  <h3 className="text-3xl font-bold xs:text-[1.7rem]">
                     {!confirmationEmailSent ? "Inscription" : "Mail envoyé!"}
                  </h3>

                  {!confirmationEmailSent ? (
                     <p className="text-[15px] font-medium mt-2 text-dark/70">
                        Créer un compte
                        <br />
                        AtounAfrica
                     </p>
                  ) : (
                     <p className="text-[15px] font-medium mt-2 text-dark/70">
                        Veuillez confirmer
                        <br />
                        votre adresse email.
                     </p>
                  )}
               </div>

               <div className="z-0">
                  <img
                     className="w-full h-full max-w-[150px] translate-y-8"
                     src={SignImage}
                     alt="Inscription"
                  />
               </div>
            </div>

            {!confirmationEmailSent ? (
               <>
                  <div className="w-full mt-4">
                     <form
                        className="z-10"
                        action=""
                        method="post"
                        onChange={(e) => handleInputChange(e)}
                        onSubmit={handleRegistration}
                     >
                        <InputField
                           type="text"
                           placeholder="Nom d'utilisateur..."
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                           error={errors.name}
                           icon={<LuUser />}
                        />

                        <InputField
                           type="email"
                           placeholder="Email..."
                           name="email"
                           onChange={handleInputChange}
                           error={errors.email}
                           icon={<CiMail />}
                        />

                        {errors.password && (
                           <ErrorMessage text={errors.password} />
                        )}
                        <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-3">
                           <RiLockPasswordLine className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2" />

                           <input
                              className="pl-6 w-full placeholder:text-dark/70"
                              type={`${password ? "text" : "password"}`}
                              placeholder="Mot de passe..."
                              name="password"
                              onChange={(e) => handleInputChange(e)}
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

                        <InputField
                           type={`${password ? "text" : "password"}`}
                           placeholder="Confirmation..."
                           name="password_confirmation"
                           onChange={handleInputChange}
                           error={errors.password_confirmation}
                           icon={<RiLockPasswordLine />}
                        />

                        <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-primary text-dark rounded-[8px] mt-3 mb-2 text-center cursor-pointer">
                           <LoadingButton
                              text="S'inscrire"
                              loading={mutation.isLoading}
                           />
                        </div>
                     </form>
                  </div>

                  <div className="my-8 w-full">
                     <p className="text-[14px] text-dark/70 my-3 text-center">
                        Ou se connecter
                     </p>

                     {/* <div className="rounded-[25px] flex bg-light relative p-2 px-3 items-centerX justify-center cursor-pointer mb-2">
                        <FcGoogle className="absolute top-1/2 text-[18px] -translate-y-1/2 left-3 " />
                        <p className="text-center w-full font-medium">Google</p>
                     </div> */}
                  </div>

                  <div className="mb-2 text-[15px] w-full text-center">
                     <p>
                        Avez-vous un compte ?{" "}
                        <Link
                           className=" underline text-primary font-medium"
                           to="/connexion"
                        >
                           Se connecter.
                        </Link>
                     </p>
                  </div>
               </>
            ) : (
               <MailIsSendNotification email={formData.email} />
            )}
         </div>
      </div>
   );
};

export default Inscription;
