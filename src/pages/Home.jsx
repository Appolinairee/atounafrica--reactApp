import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import Steep from "../components/Steep/Steep";
import Message from "../components/Message";
import HomeHeader from "../components/HomeHeader";
import CategoriesFixed from "../components/CategoriesFixed";
import ProductsForUser from "../components/ProductsForUser";

export default function Home() {
   return (
      <div>
         <HomeHeader />

         <div className="relative">
            <CategoriesFixed className="!sticky top-4 left-0 w-full xs:top-2" />
            {/* <Header /> */}
            {/* <Products /> */}
            <ProductsForUser />
            <Categories />
            <Products />
            <Steep />
            <Products />
         </div>
      </div>
   );
}
