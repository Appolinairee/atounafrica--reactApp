const MessageListElement= ({element, handleChat}) => {
    console.log(element);
    
    return (
      <div className="flex justify-between items-center gap-2 text-[13px] cursor-pointer border-solid border-0 border-b-[1px] border-dark/5 pb-3" onClick={handleChat}>
        <div className="max-w-[40px] h-[36px] rounded-full w-[15%] border-solid border-dark/5 border-[1px]">
            <img className="w-full h-full" src={element.image} alt={element.name} />
        </div>
        
        <div className="relative w-[70%]">
            <h4 className="font-medium text-[14px]">{element.name}</h4>
            
            <p className="text-dark/80 whitespace-nowrap">
                {element.message.slice(0, 30)}

                {
                    (element.message.length > 30) &&
                    <span >...</span>
                }
            </p>
            
        </div>

        <div className="w-[15%] text-right">
            <span className="text-[10px] whitespace-nowrap">{element.date}</span>
            <br />

            {
                element.number > 0 &&
                <span className="bg-primary rounded-full px-1 text-light text-[10px] font-medium ">{element.number}</span>
            }
        </div>

      </div>
    )
}
export default MessageListElement;