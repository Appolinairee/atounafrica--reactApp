import { RiLockPasswordLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import SignImage from "../../assets/signImage.png";
import { useState } from "react";

const ResetPass = () => {
   const [password, setPassword] = useState(false);

   return (
      <div className="max-w-[360px] rounded-xl m-auto px-4 bg-gradient-green-yellow z-30 py-[5rem] pb-20 xs:px-5 min-h-[100vh]">
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
            <form className="z-10" action="" method="post">
               <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                  <RiLockPasswordLine className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2" />

                  <input
                     className="pl-6 w-full"
                     type={`${password ? "text" : "password"}`}
                     placeholder="Mot de passe"
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
      </div>
   );
};

export default ResetPass;
