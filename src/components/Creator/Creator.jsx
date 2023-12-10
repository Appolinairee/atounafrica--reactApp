import "./creator.css";

const Creator = ({image, name, location}) => {
  return (
    <div className="hProductCreator flex">
        <img src={image} alt="" />
     
        <div>
            <p>{name}</p>
            <span>{location}</span>
        </div>
    </div>
  )
}

export default Creator;