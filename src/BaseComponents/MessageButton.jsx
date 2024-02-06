import { BiMessageRoundedDetail } from "react-icons/bi";

const MessageButton = () => {
  return (
    <button className="fixed bottom-3 right-3 w-fit h-fit bg-black p-3 rounded-full shadow-boxShadow1">
        <BiMessageRoundedDetail  className="text-3xl text-light" />
    </button>
  )
}

export default MessageButton;