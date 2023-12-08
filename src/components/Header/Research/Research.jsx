import "./research.css";

import { IoSearch } from "react-icons/io5";

function Research() {
  return (
    <form action="" className="flex research">
        <div className="icon"><IoSearch /></div>
        
        <input type="search" name="" id="" placeholder="Entrer un produit..." />
        <button type="submit" className="submit">
            <p>Trouver</p>
        </button>
    </form>
  )
}

export default Research
