import { FaArrowLeft } from "react-icons/fa";

const SteepTitle = ({title, index, icon}) => {
  return (
    <div className="actualState flex">
        {
            (index !== 1) && <div className="icon"><FaArrowLeft /></div>
        }
        {
          icon && <span className="icon">{icon}</span>
        }
        <h3>{title}</h3>
    </div>
  )
}

export default SteepTitle;