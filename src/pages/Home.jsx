import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Categories from "../components/Categories/Categories";
import Steep from "../components/Steep/Steep";

export default function Home() {
  return (
    <div>
      <Header />
      <Products />
      <Categories />
      <Products />
      <Steep />
      <Products />
    </div>
  )
}
