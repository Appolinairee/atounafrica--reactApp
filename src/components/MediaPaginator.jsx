import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MediaPaginator = ({
   length,
   handlePrevMedia,
   handleNextMedia,
   mediaState,
   handleMediaClick,
}) => {
   return (
      <div className="flex items-center w-fit gap-1 *:cursor-pointer font-bold absolute !bottom-[15px] left-1/2 -translate-x-1/2 bg-light/80 shadow-boxShadow1 p-[2px] px-[5px] rounded-[5px]">
         <MdKeyboardArrowLeft
            className="text-[16px] border-solid border-dark/50 rounded-full p-[0px] px-[0px] border-[1px] duration-75 hover:border-transparent hover:bg-primary hover:text-light xs:text-[22px] large:border-light "
            onClick={handlePrevMedia}
         />

         <div className="flex gap-[2px]">
            {Array.from({ length }, (_, index) => (
               <span
                  key={index}
                  className={`relative p-[3px] border-solid border-dark/60 border-[1px] rounded-full  ${
                     index === mediaState
                        ? "bg-primary px-[6px] border-transparent rounded-lg "
                        : ""
                  }`}
                  onClick={() => handleMediaClick(index)}
               ></span>
            ))}
         </div>

         <MdKeyboardArrowRight
            className="text-[16px] border-solid border-dark/50 rounded-full p-[0px] px-[0px] border-[1px] duration-75 hover:border-transparent hover:bg-primary hover:text-light xs:text-[22px] large:border-light"
            onClick={handleNextMedia}
         />
      </div>
   );
};

export default MediaPaginator;