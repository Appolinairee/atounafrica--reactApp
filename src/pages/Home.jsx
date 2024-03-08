import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import Steep from "../components/Steep/Steep";
import Message from "../components/Message";
import HomeHeader from "../components/HomeHeader";
import CategoriesFixed from "../components/CategoriesFixed";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <CategoriesFixed />
      <Header />
      <Products />
      <Categories />
      <Products />
      <Steep />
      <Products />
    </div>
  )
}
