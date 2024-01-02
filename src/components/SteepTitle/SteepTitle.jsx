import { FaArrowLeft } from "react-icons/fa";

const SteepTitle = ({title, index}) => {
  return (
    <div className="actualState flex">
        {
            (index != 1) && <div className="icon"><FaArrowLeft /></div>
        }
        <span>{index}</span>
        <h3>{title}</h3>
    </div>
  )
}

export default SteepTitle;