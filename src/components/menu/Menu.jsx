import "./menu.css";

const Menu = ({barState, handleBar}) => {
  return (
    <div className="allMenus">  
        <div className="overlay" onClick={ handleBar }></div>
        <div className={ (barState)? "menus": "menus menusActive"}>

            <div className="menu menu1">
                <ul className="flex">
                    <li href="">
                        <a className="menuLink flex active">
                            <i className="fa-solid fa-house"></i>
                            <p>Accueil</p>
                        </a>
                    </li>

                    <li href="" className="researchBar">
                        <a className="menuLink flex">
                            <i className="fa-solid fa-search"></i>
                            <p>Recherchez</p>
                        </a>
                    </li>

                    <li href="">
                        <a className="menuLink flex">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Panier</p>
                        </a>
                    </li>

                    <li href="">
                        <a className="menuLink flex">
                            <i className="fa-solid fa-braille"></i>
                            <p>Catégories</p>
                        </a>
                    </li>

                    <li href="">
                        <a className="menuLink flex">
                            <i className="fa-regular fa-user"></i>
                            <p>Profil</p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="menu menu1 menu2">
                <ul className="flex">
                    <li href="">
                        <a className="menuLink flex active">
                            <i className="fa-solid fa-house"></i>
                            <p>Tableau de bord Vendeur</p>
                        </a>
                    </li>

                    <li href="" className="researchBar">
                        <a className="menuLink flex">
                            <i className="fa-solid fa-search"></i>
                            <p>Profil Vendeur</p>
                        </a>
                    </li>

                    <li href="">
                        <a className="menuLink flex">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p>Gestion produit</p>
                        </a>
                    </li>

                    <li href="">
                        <a className="menuLink flex">
                            <i className="fa-solid fa-braille"></i>
                            <p>Portefeuille</p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="clickSection">
                <h4>C'est en quelques clics</h4>

                <div className="clicks">
                    <div className="click active">
                        <img src="../assets/photos(exemples)/SteepImages/undraw_discover.png" alt="Etape 1" />
                        <p>Commander</p>
                    </div>

                    <div className="click active">
                        <img src="../assets/photos(exemples)/SteepImages/undraw_Meeting.png" alt="Etape 1" />
                        <p>échanger</p>
                    </div>

                    <div className="click active">
                        <img src="../assets/photos(exemples)/SteepImages/undraw_payments.png" alt="Etape 1" />
                        <p>Payer à Atoun</p>
                    </div>

                    <div className="click active">
                        <img src="../assets/photos(exemples)/SteepImages/undraw_serve.png" alt="Etape 1" />
                        <p>Livraison</p>
                    </div>
                </div>

                <button className="button button4">Abonnez-vous à notre Newsletter</button>

                <p className="slogan">Soyez Africain, Soyez Authentique</p>
            </div>
        </div>
    </div>
  )
}

export default Menu;
