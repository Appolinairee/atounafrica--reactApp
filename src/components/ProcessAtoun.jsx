import Button from "./Button/Button";

// Steep Images
import Steep1 from "../assets/photos(exemples)/SteepImages/undraw_discover.png";
import Steep2 from "../assets/photos(exemples)/SteepImages/undraw_Meeting.png";
import Steep3 from "../assets/photos(exemples)/SteepImages/undraw_payments.png";
import Steep4 from "../assets/photos(exemples)/SteepImages/undraw_serve.png";
import { IoArrowForward } from "react-icons/io5";
import Button2 from "../BaseComponents/Button2";

const Steep = () => {
   const Process = [
      {
         image: Steep1,
         name: "Commander",
      },
      {
         image: Steep2,
         name: "échanger",
      },
      {
         image: Steep3,
         name: "Payer",
      },
      {
         image: Steep4,
         name: "Se faire livrer",
      },
   ];

   return (
      <div className=" my-2 bg-light px-sectionPadding py-6">
         <h3 className=" text-[2rem] font-semibold capitalize xs:text-[1.6rem]">
            être Africain, <br className="hidden md:block" /> être Authentique.
         </h3>

         <p className="text-[1rem] font-medium">C'est en quelques clics!</p>

         <div className="grid grid-cols-4 gap-[5%] my-4 large:grid-cols-2 xs:gap-[10px]">
            {Process.map(({ image, name }, index) => (
               <div className="p-3">
                  <div className="h-[180px] md:h-[150px] xs:h-[90px]">
                     <img className="h-full w-auto" src={image} alt={name} />
                  </div>

                  <p className="text-center font-bold text-[15px] capitalize border-solid border-dark/40 border-0 pt-2 border-t-[1px] xs:text-[14px]">
                     {name}
                  </p>
               </div>
            ))}
         </div>

         <Button2 Text="En savoir plus" className="!w-[200px] !m-auto !mt-4 left-1/2 -translate-x-1/2 xs:!mt-1" />
      </div>
   );
};

export default Steep;
