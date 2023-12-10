import Creator from "./Creator";
import "./creators.css";
import { IoArrowForwardSharp } from "react-icons/io5";

// import creators images
import Creator1 from "../../assets/photos(exemples)/OIP (2).jpg";
import Creator2 from "../../assets/photos(exemples)/OIP (6).jpg";
import Creator3 from "../../assets/photos(exemples)/OIP (3).jpg";
import Creator4 from "../../assets/photos(exemples)/OIP (1).jpg";
import Creator5 from "../../assets/photos(exemples)/OIP (2).jpg";

// import creators product
import Product1 from "../../assets/photos(exemples)/OIP (2).jpg";
import Product2 from "../../assets/photos(exemples)/OIP (6).jpg";
import Product3 from "../../assets/photos(exemples)/OIP (3).jpg";
import Product4 from "../../assets/photos(exemples)/OIP (1).jpg";
import Product5 from "../../assets/photos(exemples)/OIP (2).jpg";
import Button from "../Button/Button";

const creators = () => {
    const Creators = [
        {
            name: "King of Soto",
            product: Product1,
            creator: Creator1,
            location: "Calavi, Zogbadje",
        },

        {
            name: "King of Soto",
            product: Product2,
            creator: Creator2,
            location: "Calavi, Zogbadje",
        },
        {
            name: "King of Soto",
            product: Product3,
            creator: Creator3,
            location: "Calavi, Zogbadje",
        },
        {
            name: "King of Soto",
            product: Product4,
            creator: Creator4,
            location: "Calavi, Zogbadje",
        },
        {
            name: "King of Soto",
            product: Product5,
            creator: Creator5,
            location: "Calavi, Zogbadje",
        }
    ]
  
    return (
    <div className="categorieSection vendorsSection">
        <h4>Devenir vendeur du Made In Africa</h4>
            
        <div className="categories vendors flex">
            {
                Creators.map((creator, index) => (
                    <div key={index} className="vendor">
                        <Creator image={creator.creator} name={creator.name} location={creator.location} />
                            <img className="vendor_image" src={creator.product} alt="Etape 1" />
                            <p className="discover">Découvrir</p>
                    </div>
                ))
            }
        </div>
        
        <Button buttonClass="button button2" buttonContent="Devenir vendeur Made In Africa" buttonIcon={<IoArrowForwardSharp />} />
    </div>
  )
}

export default creators
