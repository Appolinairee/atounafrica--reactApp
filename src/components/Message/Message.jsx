import  "./Message.css";

import Receptor from "../../assets/photos(exemples)/OIP (6).jpg";
import { FaDiscourse, FaSeedling, FaImage } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Message = ({className, handleMessageState, messageState}) => {
  return (
    <div className={`topSection relative ${className}`}>
        <div className="discussSection top-10">
            <div className="disHeader rounded-full">
              <div className="disTitle flex">
                <div className="icon"><FaDiscourse /></div>
                <p>conversation</p>
              </div>

              <div className="disImages flex">
                <img src={Receptor} alt="Sender" />
                <img src={Receptor} alt="Receptor" />
              </div>

              <div className="disDetails">
                <p className="disText">Des question? Discutons-en!</p>
                <p className="state">Actif le 18/08/2024</p>
              </div>
            </div>

            <div className="disBody">
              <div className="msg flex mymsg">
                <img
                  src={Receptor}
                  alt="author of Image"
                />

                <div className="msgContent">
                  <span className="msgAuthor">Octolio</span>
                  <p className="msgText">Bonjour! Comment puis-je vous aider? </p>
                </div>
              </div>

              <div className="msg flex">
                <img
                  src={Receptor} alt="author of Image"
                />

                <div className="msgContent">
                  <span className="msgAuthor">Octolio</span>
                  <p className="msgText">Bonjour! Comment puis-je vous aider? </p>
                </div>
              </div>
            </div>

            <div className="fixed bottom-1 w-full left-0  px-4">
              <form action="">
                <div className="firstForm flex">
                  <textarea
                    name="message"
                    id=""
                    cols="10"
                    rows="10"
                    placeholder="Votre message ici..."
                    className="w-full border-teal-500 p-3 px-5 pr-[70px] h-[100px] text-[15px] border-t border-solid border-x-0 border-b-0"
                  ></textarea>

                  <button type="submit" className="absolute top-2 left-2 p-2 rounded-lg text-dark/70" > 
                    <FaImage /> 
                  </button>

                  <button type="submit" className="absolute top-2 right-6 p-2 rounded-lg bg-primary text-light " > <FaSeedling /> </button>
                </div>
              </form>
            </div>

            <div onClick={() => handleMessageState()} className="fixed top-5 rounded-full cursor-pointer right-4 bg-light px-1 py-0.5">
              <FaAngleDown />
            </div>
        </div>

        <div onClick={() => handleMessageState()} className={`fixed transition-all duration-50 z-50 bg-dark/40 top-0 left-0 w-full h-full cursor-pointer ${messageState ? 'translate-0 opacity-100' : 'opacity-0 !-translate-y-[150vh]'}`}></div>
    </div>
  );
};

export default Message;