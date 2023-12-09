import { FiFilter } from "react-icons/fi";
import "./FilterSection.css";

const FilterSection = () => {
  return (
    <div className="productFilters flex topSection">
        <div className="productFiltersList flex">
            <span className="active">Tout</span>
            <span>Plus populaire</span>
            <span>à la mode</span>
            <span>Le luxe</span>
            <span>Pas chers</span>
            <span>Plus en vue</span>
        </div>
        
        <div className="filterButton flex">
            <div className="icon"><FiFilter /></div>
            <p className="find">Filtrer mieux</p>
        </div>
    </div>
  )
}

export default FilterSection