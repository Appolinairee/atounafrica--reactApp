import Research from "../Header/Research/Research";
import "./CategoriesPages.css";

const CategoriesPages = () => {
  return (
    <div className="categoriesSectionDiv">
            <div className="categoriesSection">
                <Research />
                
                <CategoriesPages />

                <div className="categorieSection vendorsSection">
                    <h4>Devenir vendeur du Made In Africa</h4>
            
                    <div className="categories vendors flex">
                        <div className="vendor">
                            <div className="hProductCreator flex">
                                <img src="../assets/photos(exemples)/OIP (2).jpg" alt="" />
                 
                                <div>
                                    <p>King of Soto tdfvdcevf fdtgfd</p>
                                    <span>Calavi</span>
                                </div>
                            </div>
                            <img className="vendor_image" src="../assets/photos(exemples)/OIP (3).jpg" alt="Etape 1" />
                            <p className="discover">Découvrir</p>
                        </div>
            
                        <div className="vendor">
                            <div className="vendor_details flex">
                                <img src="../assets/photos(exemples)/OIP (6).jpg" alt="Logo Entreprise" />
            
                                <div className="creatorDetails">
                                    <p>King of Soto</p>
                                    <span>Bénin</span>
                                </div>
                            </div>
                            <img className="vendor_image" src="../assets/photos(exemples)/OIP (3).jpg" alt="Etape 1" />
                            <p className="discover">Découvrir</p>
                        </div>
            
                        <div className="vendor">
                            <div className="vendor_details flex">
                                <img src="../assets/photos(exemples)/OIP (6).jpg" alt="Logo Entreprise" />
            
                                <div className="creatorDetails">
                                    <p>King of Soto</p>
                                    <span>Bénin</span>
                                </div>
                            </div>
                            <img className="vendor_image" src="../assets/photos(exemples)/OIP (3).jpg" alt="Etape 1" />
                            <p className="discover">Découvrir</p>
                        </div>
                    </div>
            
                    <button className="button button2">Vendons nos créations Made In Africa</button>
                </div>
            </div>
    </div>
  )
}

export default CategoriesPages;