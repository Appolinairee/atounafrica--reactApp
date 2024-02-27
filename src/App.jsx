import { BrowserRouter, Routes, Route } from "react-router-dom";

// import General Components
import NavBar from "./components/navBar/NavBar";

// Import Pages
import Home from "./pages/Home";
import ProductResult from "./components/ProductResults/ProductResult";
import CategoriesPages from "./components/CategoriesPage.jsx/CategoriesPages";
import ProductPresentation from "./components/ProductPresentation/ProductPresentation";
import ProductPayment from "./components/ProductPayment/ProductPayment";
import ProductDeliever from "./components/ProductDelivering/ProductDelievering";
import ProductReceive from "./components/ProductReceive/ProductReceive";
import Inscription from "./pages/account/Inscription";
import Connexion from "./pages/account/Connexion";
import ForgetPass from "./pages/account/ForgetPass";
import ResetPass from "./pages/account/ResetPass";
import Profil from "./pages/Profil";
import CreatorProfil from "./pages/CreatorProfil";


const App = () => {
   return (
      <div>
         <BrowserRouter>
            <NavBar />

            <Routes>
               <Route path="" element={<Home />} />
               <Route path="/research" element={<ProductResult />} />
               <Route path="/categories" element={<CategoriesPages />} />
               <Route path="/order" element={<ProductPresentation />} />
               <Route path="/payment" element={<ProductPayment />} />
               <Route path="/deliever" element={<ProductDeliever />} />
               <Route path="/reception" element={<ProductReceive />} />

               {/* Auths */}
               <Route path="/inscription" element={<Inscription />} />
               <Route path="/connexion" element={<Connexion />} />
               <Route path="/forget" element={<ForgetPass />} />
               <Route path="/reset" element={<ResetPass />} />

               {/* Profils */}
               <Route path="/profil" element={<Profil />} />
               <Route path="/profil/creator" element={<CreatorProfil />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
};

export default App; 