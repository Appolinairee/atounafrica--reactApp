import FilterSection from "../FilterSection/FilterSection";
import Products from "../Products/Products";
import "./productResult.css";

const ProductResult = () => {
  return (
    <div className="categorieResultContent topSection">
            <div className="categorieResult">
                <h4>Art et Artisant</h4>
    
                <FilterSection />
                <Products />
            </div>
    </div>
  )
}

export default ProductResult;