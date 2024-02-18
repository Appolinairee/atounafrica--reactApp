import AccountImage from "../assets/Capture d'écran 2024-02-18 204214.png";
import { LuUser } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";

const Inscription = () => {
  return (
    <div className=" max-w-[350px]">

      <div className="flex flex-wrap justify-between">
        <div>
            <h3>Inscription</h3>
            <p>Créer un compte AtounAfrica</p>
        </div>

        <div>
            <img src={AccountImage} alt="Inscription" />
        </div>
      </div>

      <div>
        <form action="" method="post">

            <div>
                <LuUser />
                <input type="text" placeholder="Nom d'utilisateur" required/>
            </div>
            
            <div>
                <CiMail />
                <input type="text" placeholder="Email" required />
            </div>
            
            <div>
                <RiLockPasswordLine />
                <input type="password" placeholder="Mot de passe" required />
                <span><GoEye /></span>
            </div>

            <button type="submit">
                Inscription
            </button>

        </form>
      </div>


      <div>
        <p>Ou s'inscrire avec</p>
        
        <div>
            <FcGoogle />
            <p>Google</p>
        </div>
      </div>

    </div>
  )
}

export default Inscription;