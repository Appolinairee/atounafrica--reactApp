import { BiSlider } from "react-icons/bi";
import Slide1 from "../assets/photos(exemples)/OIP (1).jpeg";
import Slide2 from "../assets/photos(exemples)/OIP (3).jpeg";
import Button from "./Button/Button";

const HomeHeader = () => {
   const Slides = [
      {
         keys: ["Meubles", "Authenticité", "Made In Africa"],
         title: "Le Made In Africa qui rayonne de plus belle",
         image: Slide1,
      },
   ];

   return (
      <div className="bg-light py-2 px-sectionPadding ">
         <div className="h-[400px] rounded-[30px] bg-dark/20 flex items-center justify-start overflow-hidden">
            {Slides.map(({ keys, title, image }, index) => (
               <div
                  key={index + title}
                  className="flex  h-full w-full relative !items-start justify-between"
               >
                  <div className="p-[5%] py-[3%]">
                     <div className="flex gap-2 w-fit">
                        {keys.map((item, i) => (
                           <span className="bg-dark/20 rounded-lg p-1" key={i}>
                              {item}
                           </span>
                        ))}
                     </div>

                     <h2 className="my-4 font-semibold text-[40px] max-w-[80%]">
                        {title}
                    </h2>

                     <Button />
                  </div>

                  <div className="w-[50%] h-full overflow-hidden">
                     <img className="w-full h-full" src={image} alt={title} />
                  </div>
               </div>
            ))}

            <BiSlider className="fixed" />
         </div>
      </div>
   );
};

export default HomeHeader;
