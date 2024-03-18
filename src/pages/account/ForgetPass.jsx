import SignImage from "../../assets/signImage.png";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import axios from "axios";
import { useState } from "react";
import LoadingButton from "../../BaseComponents/LoadingButton";
import { useMutation } from "react-query";

const ForgetPass = () => {
   const [message, setMessage] = useState("");
   const [email, setEmail] = useState("");

   const mutation = useMutation((formData) =>
      axios.post("http://127.0.0.1:8000/api/auth/password/email", formData)
   );

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await mutation.mutateAsync({ email });
         setMessage(
            `Un lien de réinitialisation a été envoyé à votre adresse ${email}.`
         );
      } catch (error) {
         setMessage("Une erreur s'est produite. Veuillez réessayer.");
      }
   };

   return (
      <div className="bg-light pt-1">
         <div className="max-w-[360px] rounded-xl m-auto px-4 bg-gradient-green-yellow z-30 py-[2rem] pb-20 xs:px-5 min-h-[100%]">
            <div className="flex flex-wrap justify-between w-full">
               <div className="">
                  <h3 className="text-2xl font-bold xs:text-[1.4rem]">
                     Mot de passe oublié ?
                  </h3>
                  <p className="text-[15px] font-medium mt-2 text-dark/70">
                     Nous avons besoin
                     <br />
                     de votre mail
                  </p>
               </div>

               <div className="z-0">
                  <img
                     className="w-full h-full max-w-[150px] translate-y-8"
                     src={SignImage}
                     alt="ForgetPass"
                  />
               </div>
            </div>

            {message !== "" ? (
               <p className="mt-6">{message}</p>
            ) : (
               <div className="w-full mt-4">
                  <form className="z-10" onSubmit={handleSubmit}>
                     <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                        <CiMail className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2 " />

                        <input
                           className="pl-6 w-full"
                           type="text"
                           placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}
                           required
                        />
                     </div>

                     <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-primary text-dark rounded-[8px] mt-3 mb-2 text-center cursor-pointer">
                        <LoadingButton
                           text="Soumettre"
                           loading={mutation.isLoading}
                        />
                     </div>
                  </form>
               </div>
            )}

            <div className="mb-2 text-[15px] w-full text-center mt-8">
               <p>
                  N'avez-vous pas un compte ?{" "}
                  <Link
                     className=" underline text-primary font-medium"
                     to="/inscription"
                  >
                     S'inscrire.
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default ForgetPass;
