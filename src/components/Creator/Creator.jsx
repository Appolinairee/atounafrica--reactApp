import "./creator.css";

const Creator = ({creatorImage}) => {
  return (
    <div className="hProductCreator flex">
        <img src={creatorImage} alt="" />
     
        <div>
            <p>King of Soto fgf fnfhfj fufjhfgh</p>
            <span>Calavi</span>
        </div>
    </div>
  )
}

export default Creator;