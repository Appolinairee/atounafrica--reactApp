import Image from "../assets/images/illu-undraw_walking_outside_5ueb.svg";

const NothingToDisplay = ({text, children}) => {
  return (
    <div className="px-[18%] relative top-1/2 translate-y-[50%] m-auto">
      <img className="w-full" src={Image} alt={text} />
      <p className="mt-4 text-center font-semibold text-[14px]">{text}</p>

      {children}
    </div>
  )
}

export default NothingToDisplay;