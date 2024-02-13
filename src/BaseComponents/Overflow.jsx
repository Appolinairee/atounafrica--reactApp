const Overflow = ({handleOverflow, className=""}) => {
  return (
    <div className={`absolute z-40 bg-transparent top-0 right-[340px] h-full w-full ${className}`} onClick={handleOverflow}></div>
  )
}

export default Overflow;