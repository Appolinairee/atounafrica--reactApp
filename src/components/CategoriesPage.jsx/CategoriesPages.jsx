import Research from "../Header/Research/Research";
import FilterSection from "../FilterSection/FilterSection"
import Products from "../Products/Products";
import "./CategoriesPages.css";
import Categories from "../Categories/Categories";
import Creators from "../Creator/creators";

const CategoriesPages = () => {
    return (
    <div className="categoriesSectionDiv topSection">
        <div className="categoriesSection">
            <Research />
            <FilterSection />
            <Categories />

            <Creators />
        </div>
    </div>
)
}

export default CategoriesPages;

