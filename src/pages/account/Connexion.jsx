import { RiLockPasswordLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import SignImage from "../../assets/signImage.png";
import { useState } from "react";
import { Link } from "react-router-dom";


const Connexion = () => {
  const [password, setPassword] = useState(false);

  return (
    <div className="max-w-[360px] rounded-xl m-auto px-4 bg-gradient-green-yellow z-30 py-[4rem] pb-20 xs:px-5">
        <div className="flex flex-wrap justify-between w-full">
          <div className="">
              <h3 className="text-3xl font-bold xs:text-[1.7rem]">Connexion</h3>
              <p className="text-[15px] font-medium mt-2 text-dark/70">
                Accéder à votre 
                <br /> 
                AtounAfrica
              </p>
          </div>

          <div className="z-0">
              <img className="w-full h-full max-w-[150px] translate-y-8" src={SignImage} alt="Connexion" />
          </div>
        </div>

        <div className="w-full mt-4">
          <form className="z-10" action="" method="post">

              <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                  <CiMail className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2 " />

                  <input className="pl-6 w-full" type="text" placeholder="Email" required />
              </div>
              
              
              <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-2">
                  <RiLockPasswordLine className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2" />

                  <input className="pl-6 w-full" type={`${password ? 'text' : 'password'}`} placeholder="Mot de passe" required />

                  <span className={`absolute right-4 text-dark/60 top-1/2 text-[17px] -translate-y-1/2 cursor-pointer`} onClick={() => setPassword(!password)}>
                    <GoEye />
                    <span className= {`absolute top-[40%] translate-y-1/2 left-0 w-full h-[2px] rotate-45 ${password ? '' : 'bg-dark/50'}`} ></span>
                  </span>

              </div>

              <Link to="/forget" className="text-[14px] my-2 text-dark/85">Mot de passe oublié ?</Link>

              <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-primary text-dark rounded-[8px] mt-3 mb-2 text-center cursor-pointer">
                  <button type="submit" className="text-center font-semibold align-middle w-full text-light">Se connecter</button>
              </div>
          </form>
        </div>


        <div className="my-8 w-full">
          <p className="text-[14px] text-dark/70 my-3 text-center">Ou se connecter par</p>
          
          <div className="rounded-[25px] flex bg-light relative p-2 px-3 items-centerX justify-center cursor-pointer mb-2">
              <FcGoogle className="absolute top-1/2 text-[18px] -translate-y-1/2 left-3 " />
              <p className="text-center w-full font-medium">Google</p>
          </div>
        </div>

        <div className="mb-2 text-[15px] w-full text-center">
            <p>Vous n'avez pas un compte ? <Link className=" underline text-primary font-medium" to="/inscription">S'inscrire.</Link></p>
        </div>
    </div>
  )
}

export default Connexion;