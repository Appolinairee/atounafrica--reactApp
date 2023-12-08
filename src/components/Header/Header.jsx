import Research from "./Research/Research";
import "./Header.css";

// Header Icons
import { MdShoppingCart } from "react-icons/md";    

// Product Images
import Product1 from "../../assets/photos(exemples)/OIP (3).jpg";
// Creator Images
import Creator1 from "../../assets/photos(exemples)/OIP (6).jpg";
import MIA from "../../assets/images/madeInAfrica.png";

function Header() {
    const Categories = [
        {
            name: "Tout",
            icon: <MdShoppingCart />,
            number: 12422,
        },

        {
            name: "Mobilier",
            icon: <MdShoppingCart />,
            number: 12422,
        },
        {
            name: "Technologie et Innovations",
            icon: <MdShoppingCart />,
            number: 1242,
        },
        {
            name: "Produits",
            icon: <MdShoppingCart />,
            number: 1242,
        },

        {
            name: "Art et Artisanat",
            icon: <MdShoppingCart />,
            number: 1242,
        },

        {
            name: "Livres et Documents",
            icon: <MdShoppingCart />,
            number: 1242,
        },
    ]

  return (
    <header className="topSection">
        <div className="headerMain section">
            <h1>Plus de <b>20.000 </b>
                produits et créations
                <b className="mia"> <br />Made In Africa <br /> </b> 
                pour tous vos besoins et services.</h1>

            <Research />

            <div className="recommandations">
                <span className="verticalHeaderText">R3COMMANDéS</span>

                <div className="productsSlides">
                    <div className="products flex">
                        <div className="product">
                            <div className="productImg">
                                <img src={Product1} alt="Produit" />
                            </div>
    
                            <div className="productInfos">
                                <p className="productName">King of Soto: La liqueur rafraichissante</p>

                                <div className="productInfo flex">
                                    <p className="commandButton">Commander</p>
        
                                    <div className="productPrice">
                                        <b>5000 Fcfa</b>
                                        <div className="productIcons flex">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                    </div>

                                    <div className="productDetails">
                                        <div className="productCreator flex">
                                            <img src={Creator1} alt="Logo Entreprise" />
            
                                            <div className="creatorDetails">
                                                <p>Nom de l'entreprise</p>
                                                <span>Ville de résidence</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="productsBtn flex">
                        <span className="slideDot"></span>
                        <span className="slideDot"></span>
                        <span className="slideDot  active"></span>
                        <span className="slideDot"></span>
                        <span className="slideDot"></span>
                        <span className="slideDot"></span>
                    </div>
                </div>
                
            </div>

            <div className="sloganTextres flex">
                <span>Sois Africain, Sois Authentique</span>

                <img src={MIA} alt="Le Made In Africa" />
            </div>
        </div>

        <div className="sideBar">
            <div className="categories flex section">
                <p className="categoriesTitle">
                    Parcourez nos catégories
                </p>

                {
                    Categories.map((category, index) => (
                        <div key={index} className={index == 0 ? "category flex active": "category flex"}>
                           <div className="icon"> {category.icon} </div> 
                            <p> {category.name} </p>
                            <span>{category.number}</span>
                        </div>
                    ))
                }
    
                <a href="#" className="seeAll before">Tout</a>
            </div>

            <div className="sloganSection">
                <p>Avec Atoun Africa, </p>

                <div className="sloganText flex">
                    <span>Sois Africain  <br /> Sois Authentique</span>

                    <img src={MIA} alt="Hello" />
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header;
