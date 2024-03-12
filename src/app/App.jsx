import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// import General Components
import NavBar from "../components/navBar/NavBar";

// Import Pages
import Home from "../pages/Home";
import ProductResult from "../components/ProductResults/ProductResult";
import CategoriesPages from "../components/CategoriesPage.jsx/CategoriesPages";
import ProductPresentation from "../components/ProductPresentation/ProductPresentation";
import ProductPayment from "../components/ProductPayment/ProductPayment";
import ProductDeliever from "../components/ProductDelivering/ProductDelievering";
import ProductReceive from "../components/ProductReceive/ProductReceive";
import Inscription from "../pages/account/Inscription";
import Connexion from "../pages/account/Connexion";
import ForgetPass from "../pages/account/ForgetPass";
import ResetPass from "../pages/account/ResetPass";
import Profil from "../pages/Profil";
import CreatorProfil from "../pages/CreatorProfil";
import CreatorSign from "../pages/CreatorSign";
import CreatorDashboard from "../components/CreatorComponents/CreatorDashboard";

const App = () => {
   return (
      <Provider store={store}>
         <div>
         <BrowserRouter>
            <NavBar />

            <Routes>
               <Route path="" element={<Home />} />

               {/* Auths */}
               <Route path="/inscription" element={<Inscription />} />
               <Route path="/connexion" element={<Connexion />} />
               <Route path="/forget" element={<ForgetPass />} />
               <Route path="/reset" element={<ResetPass />} />

               {/* Product */}
               <Route path="/research" element={<ProductResult />} />
               <Route path="/categories" element={<CategoriesPages />} />
               <Route path="/order" element={<ProductPresentation />} />
               <Route path="/payment" element={<ProductPayment />} />
               <Route path="/deliever" element={<ProductDeliever />} />
               <Route path="/reception" element={<ProductReceive />} />

               {/* Profils */}
               <Route path="/profil" element={<Profil />} />
               <Route path="/profil/creator" element={<CreatorProfil />} />
               <Route path="/creator" element={<CreatorSign />} />
               <Route path="/creator/tableau" element={<CreatorDashboard />} />

               <Route path="*" element={<Home />} />
            </Routes>
         </BrowserRouter>
      </div>
      </Provider>
   );
};

export default App;
