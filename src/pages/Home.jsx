import HomeHeader from "../components/HomeHeader";
import CategoriesFixed from "../components/CategoriesFixed";
import ProductsForUser from "../components/ProductsForUser";

export default function Home() {
   return (
      <div>
         {/* <HomeHeader /> */}

         <div className="relative">
            {/* <CategoriesFixed className="!sticky top-4 left-0 w-full md:top-3 xs:top-2" /> */}
            <ProductsForUser />
         </div>
      </div>
   );
}