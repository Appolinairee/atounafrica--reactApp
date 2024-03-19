import axios from "axios";
import { useMutation } from "react-query";

const MailIsSendNotification = ({ email }) => {
   const resendEmailMutation = useMutation(async () => {
      try {
         await axios.post(`http://127.0.0.1:8000/api/auth/email/send`, {
            email,
         });
      } catch (error) {
         // 
      }
   });

   const handleResendEmail = () => {
      resendEmailMutation.mutate();
   };

   return (
      <div>
         <p className="mt-8">
            Un mail a été envoyé sur {email}. <br />
            <br /> Veuillez confirmer votre adresse mail pour vous connecter.
         </p>

         <div className="text-[13px] ">
            {!resendEmailMutation.isLoading ? (
               <>
                  <p className="mt-4 py-3 border-solid border-0 border-t-[1px] border-dark/40 ">
                     Vous n'avez pas reçu de mail ?
                  </p>
                  <p
                     className="mt-1 text-primary underline decoration-primary cursor-pointer font-semibold"
                     onClick={handleResendEmail}
                  >
                     Renvoyer le mail de confirmation
                  </p>
               </>
            ) : (
               <p className="mt-2 text-primary font-semibold cursor-wait">
                  Envoie en cours...
               </p>
            )}
         </div>
      </div>
   );
};

export default MailIsSendNotification;
