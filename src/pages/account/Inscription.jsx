import { LuUser } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import SignImage from "../../assets/signImage.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Inscription = () => {
   const [password, setPassword] = useState(false);
   const [confirmationEmailSent, setConfirmationEmailSent] = useState(false);

   const handleRegistration = async (e) => {
      e.preventDefault();

      // Logique pour soumettre le formulaire d'inscription au backend

      // Envoyer un e-mail de confirmation (côté backend)

      // Mettre à jour l'état pour afficher le message de notification
      setConfirmationEmailSent(true);
   };

   return (
      <div className="bg-light pt-1">
         <div className="max-w-[380px] rounded-xl m-auto px-4 bg-gradient-green-yellow z-30 pb-20 xs:px-5 productShadow">
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
                     <form className="z-10" action="" method="post">
                        <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                           <LuUser className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2 " />

                           <input
                              className="pl-6 w-full placeholder:text-dark/70"
                              type="text"
                              placeholder="Nom d'utilisateur..."
                              required
                           />
                        </div>

                        <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                           <CiMail className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2 " />

                           <input
                              className="pl-6 w-full placeholder:text-dark/70"
                              type="text"
                              placeholder="Email..."
                              required
                           />
                        </div>

                        <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                           <RiLockPasswordLine className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2" />

                           <input
                              className="pl-6 w-full placeholder:text-dark/70"
                              type={`${password ? "text" : "password"}`}
                              placeholder="Mot de passe..."
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
                              className="pl-6 w-full placeholder:text-dark/70"
                              type={`${password ? "text" : "password"}`}
                              placeholder="Confirmation..."
                              required
                           />
                        </div>

                        <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-primary text-dark rounded-[8px] mt-3 mb-2 text-center cursor-pointer">
                           <button
                              type="submit"
                              className="text-center font-semibold align-middle w-full text-light"
                           >
                              S'Inscrire
                           </button>
                        </div>
                     </form>
                  </div>

                  <div className="my-8 w-full">
                     <p className="text-[14px] text-dark/70 my-3 text-center">
                        Ou s'inscrire avec
                     </p>

                     <div className="rounded-[25px] flex bg-light relative p-2 px-3 items-centerX justify-center cursor-pointer mb-2">
                        <FcGoogle className="absolute top-1/2 text-[18px] -translate-y-1/2 left-3 " />
                        <p className="text-center w-full font-medium">Google</p>
                     </div>
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
            ) : 
            
            <p className="mt-8">Un mail a été envoyé sur @mail. <br /><br /> Veuillez confirmer votre adresse mail pour vous connecter.</p>
            }
         </div>
      </div>
   );
};

export default Inscription;
