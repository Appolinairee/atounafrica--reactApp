import Button from "../Button/Button";
import "./steep.css";

// Steep Images
import Steep1 from "../../assets/photos(exemples)/SteepImages/undraw_discover.png";
import Steep2 from "../../assets/photos(exemples)/SteepImages/undraw_Meeting.png";
import Steep3 from "../../assets/photos(exemples)/SteepImages/undraw_payments.png";
import Steep4 from "../../assets/photos(exemples)/SteepImages/undraw_serve.png";
import { IoArrowForward } from "react-icons/io5";

const Steep = () => {
  return (
    <div className="clickSection">
        <h4>C'est en quelques clics</h4>

        <div className="clicks">
            <div className="click active">
                <img src={Steep1} alt="Etape 1" />
                <p>Commander</p>
            </div>

            <div className="click active">
                <img src={Steep2} alt="Etape 1" />
                <p>échanger</p>
            </div>

            <div className="click active">
                <img src={Steep3} alt="Etape 1" />
                <p>Payer à Atoun</p>
            </div>

            <div className="click active">
                <img src={Steep4} alt="Etape 1" />
                <p>Livraison</p>
            </div>
        </div>


        <Button buttonClassName="button button4" buttonContent="Soyez Africain, Soyez Authentique" buttonIcon={<IoArrowForward />} />

        <p className="slogan">Soyez Africain, Soyez Authentique</p>
    </div>
  )
}

export default Steep
