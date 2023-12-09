import "./categories.css";
import { MdShoppingCart } from "react-icons/md";


const Categories = () => {
    const Categories = [
        {
            name: "Tout",
            icon: <MdShoppingCart />,
            number: 12422,
        },

        {
            name: "Mobilier",
            icon: <MdShoppingCart />,
            number: 12422,
        },
        {
            name: "Technologie et Innovations",
            icon: <MdShoppingCart />,
            number: 1242,
        },
        {
            name: "Produits",
            icon: <MdShoppingCart />,
            number: 1242,
        },

        {
            name: "Art et Artisanat",
            icon: <MdShoppingCart />,
            number: 1242,
        },

        {
            name: "Livres et Documents",
            icon: <MdShoppingCart />,
            number: 1242,
        },
    ]

  return (
    <div className="categorieSection section">
        <h4>Parcourez nos Catégories</h4>

        <div className="categories flex">
            {
                Categories.map((category, index) => (
                    <div key={index} className="category active">
                        <div className="icon"> {category.icon} </div>
                        <p> {category.name} </p>
                        <span>{category.number}</span>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Categories
