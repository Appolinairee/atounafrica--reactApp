import { BrowserRouter, Routes, Route } from "react-router-dom";

// import General Components
import NavBar from "./components/navBar/NavBar";

// Import Pages
import Home from "./pages/Home";
import ProductResult from "./components/ProductResults/ProductResult";
import CategoriesPages from "./components/CategoriesPage.jsx/CategoriesPages";
import ProductPayment from "./components/ProductPayment/ProductPayment";
import ProductReceive from "./components/ProductReceive/ProductReceive";
import Inscription from "./pages/account/Inscription";
import Connexion from "./pages/account/Connexion";
import ForgetPass from "./pages/account/ForgetPass";
import ResetPass from "./pages/account/ResetPass";
import Profil from "./pages/Profil";
import CreatorProfil from "./pages/CreatorProfil";
import CreatorSign from "./pages/CreatorSign";
import CreatorDashboard from "./components/CreatorComponents/CreatorDashboard";
import VerifyEmail from "./pages/account/VerifyEmail";
import { useSelector } from "react-redux";
import useFetchUser from "./Features/useFetchUser";
import OrderProcess from "./components/OrderProcess";
import OrderGroup from "./components/OrderGroup";
import Delievering from "./components/Delievering"
import ProductOrder from "./components/ProductOrder";
import Toaster from "./BaseComponents/Toaster";

const App = () => {
   const user = useSelector((state) => state.auth.user);
   useFetchUser();

   return (
      <div>
         <BrowserRouter>
            <NavBar user={user} /> 

            <Routes>
               <Route path="" element={<Home />} />

               {/* Auths */}
               <Route path="/inscription" element={<Inscription />} />
               <Route path="/connexion" element={<Connexion />} />
               <Route path="/forget" element={<ForgetPass />} />
               <Route path="/api/auth/email/verify" element={<VerifyEmail />} />
               <Route path="/api/auth/password/reset" element={<ResetPass />} />

               {/* Product */}
               <Route path="/produit/:slug_name" element={<ProductOrder />} />
               <Route path="/commande/:order_id" element={<OrderProcess state={0} />} />
               <Route path="/commande/:order_id/paiement" element={<OrderProcess state={1} />} />
               <Route path="/commande/:order_id/livraison" element={<OrderProcess state={2} />} />
               <Route path="/commande/:order_id/reception" element={<OrderProcess state={3} />} />
               
               <Route path="/achats" element={<OrderGroup />} />

               <Route path="/payment" element={<ProductPayment />} />
               <Route path="/deliever" element={<Delievering />} />
               <Route path="/reception" element={<ProductReceive />} />

               <Route path="/research" element={<ProductResult />} />
               <Route path="/categories" element={<CategoriesPages />} />

               {/* Profils */}
               <Route path="/profil" element={<Profil />} />
               <Route path="/profil/creator" element={<CreatorProfil />} />
               <Route path="/creator" element={<CreatorSign />} />
               <Route path="/creator/tableau" element={<CreatorDashboard />} />

               <Route path="*" element={<Home />} />
            </Routes>

            <Toaster />
         </BrowserRouter>
      </div>
   );
};

export default App;