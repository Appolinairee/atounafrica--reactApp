import { LuUser } from "react-icons/lu";
import SignImage from "../../assets/signImage.png";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";


const ForgetPass = () => {

  return (
    <div className="max-w-[360px] rounded-xl m-auto px-4 bg-gradient-green-yellow z-30 py-[5.5rem] pb-20 xs:px-5 min-h-[100%]">
        <div className="flex flex-wrap justify-between w-full">
          <div className="">
              <h3 className="text-2xl font-bold xs:text-[1.4rem]">Mot de passe oublié ?</h3>
              <p className="text-[15px] font-medium mt-2 text-dark/70">
                Nous avons besoin
                <br /> 
                de votre mail
              </p>
          </div>

          <div className="z-0">
              <img className="w-full h-full max-w-[150px] translate-y-8" src={SignImage} alt="ForgetPass" />
          </div>
        </div>

        <div className="w-full mt-4">
          <form className="z-10" action="" method="post">

            <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                  <CiMail className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2 " />

                  <input className="pl-6 w-full" type="text" placeholder="Email" required />
              </div>

              <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-primary text-dark rounded-[8px] mt-3 mb-2 text-center cursor-pointer">
                  <button type="submit" className="text-center font-semibold align-middle w-full text-light">Soumettre</button>
              </div>
          </form>
        </div>

        <div className="mb-2 text-[15px] w-full text-center mt-8">
            <p>N'avez-vous pas un compte ? <Link className=" underline text-primary font-medium" to="/inscription">S'inscrire.</Link></p>
        </div>
    </div>
  )
}

export default ForgetPass;