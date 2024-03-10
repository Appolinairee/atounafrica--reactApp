import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import Steep from "../components/ProcessAtoun";
import Message from "../components/Message";
import HomeHeader from "../components/HomeHeader";
import CategoriesFixed from "../components/CategoriesFixed";
import ProductsForUser from "../components/ProductsForUser";
import Newsletter from "../components/Newsletter";
// import CreatorSection from "../components/CreatorSection";
import Creators from "../components/Creator/Creators";

export default function Home() {
   return (
      <div>
         <HomeHeader />

         <div className="relative">
            <CategoriesFixed className="!sticky top-4 left-0 w-full md:top-3 xs:top-2" />
            {/* <Header /> */}
            {/* <Products /> */}
            <ProductsForUser />
            <Steep />
            <ProductsForUser />
            <Newsletter />
            <ProductsForUser />
            <Creators />
            <ProductsForUser />
            {/* <Categories />
            <Products />
            <Products /> */}
         </div>
      </div>
   );
}
