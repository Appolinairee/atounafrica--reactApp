import Product from "../Products/Product";

const ProductResult = () => {
  return (
    <div className="categorieResultContent">
            <div className="categorieResult">
                <h4>Art et Artisant</h4>
    
                <div className="productFilters flex">
                    <div className="productFiltersList flex">
                        <span>Plus populaire</span>
                        <span>Bas prix</span>
                        <span>Bénin</span>
                        <span>Livraison gratuite</span>
                        <span>Plus populaire</span>
                    </div>
                    
                    <p className="find">Trouver</p>
                </div>

                <Product />
            </div>
    </div>
  )
}

export default ProductResult;