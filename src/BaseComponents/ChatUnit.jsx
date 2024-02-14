const ChatUnit = ({message}) => {
  return (
    <div className="bg-green-700 flex items-end justify-end w-full">
        <div className={`py-2 max-w-[80%] px-1 rounded-[10px] ${message.type == 1 ? 'bg-primary text-light' : 'bg-light'}`}>
            <p className="text-[13px]">{message.message}</p>

            <p className="text-[9px] text-dark/70 ">{message.time}</p>
        </div>
    </div>
  )
}

export default ChatUnit
