// icons
import { IoArrowForwardSharp } from "react-icons/io5";

//imges
import Product1 from "../assets/photos(exemples)/OIP (2).jpg";
import Product2 from "../assets/photos(exemples)/OIP (6).jpg";
import Product3 from "../assets/photos(exemples)/OIP (3).jpg";
import Product4 from "../assets/photos(exemples)/OIP (1).jpg";
import Product5 from "../assets/photos(exemples)/OIP (2).jpg";

import Video from "../assets/video.mp4";
import PdfViewer from "../BaseComponents/PdfViewer";
import AudioPlayer from "../BaseComponents/AudioPlayer";
import { useState } from "react";

const SlideButton = ({ className }) => {
   return (
      <span
         className={` cursor-pointer relative bg-light w-[9px] h-[8px] rounded-lg ${className}`}
      ></span>
   );
};

const CreatorRules = () => {

   const Rules = [
      {
         name: "Authenticité Africaine",
         keywords: ["artisanat", "tradition"],
         icon: <IoArrowForwardSharp />,
         image: Product1,
         description:
            "Mettez en avant l'authenticité africaine dans vos créations. Proposez des produits faits main qui reflètent la richesse de la culture et de l'artisanat africains. Chaque article devrait raconter une histoire unique.",
      },
      {
         name: "Durabilité",
         keywords: ["écologique", "recyclé"],
         icon: <IoArrowForwardSharp />,
         image: Product2,
         description:
            "Favorisez la durabilité dans vos créations. Utilisez des matériaux recyclés, adoptez des pratiques respectueuses de l'environnement, et mettez en avant des produits éthiques. Contribuez à un monde plus vert.",
      },
      {
         name: "Innovation Africaine",
         keywords: ["innovation", "originalité"],
         icon: <IoArrowForwardSharp />,
         image: Product3,
         description:
            "Célébrez l'innovation africaine dans vos créations. Soyez audacieux dans le design, proposez des concepts uniques et embrassez la créativité. Vos produits devraient refléter le dynamisme de l'Afrique contemporaine.",
      },
      // Ajoutez d'autres règles selon vos besoins
   ];

   return (
      <div className="my-8 large:mb-[7rem] xs:!mt-4">
         <div className="my-14 grid grid-cols-2 items-start justify-start gap-[5%] h-fit large:grid-cols-1 large:w-[80%] large:ml-[10%] xs:!w-[100%] xs:gap-2 xs:!ml-[0%]">
            
            <h2 className=" font-bold text-2xl hidden xs:block text-[17px]">
               Et si on s'entendait sur quelques règles simples ?
            </h2>

            <div className="overflow-hidden flex items-center relative max-w-[500px] min-h-[55vh] large:min-h-[200px] rounded-[20px] xs:!min-h-[150px]">
               {Rules.map(({ name, keywords, image }, index) => (
                  <div key={index} className="min-w-full">
                     <img
                        src={image}
                        className="w-full h-auto absolute left-0 top-0"
                        alt={name}
                     />

                     <div className="absolute z-10 top-0 left-0 h-full w-full bg-dark/20 rounded "></div>

                     <div className="z-20 text-light p-[10%] absolute bottom-[10%] xs:p-[5%] xs:top-[5%]">
                        <h3 className="font-bold text-[22px] whitespace-nowrap ">
                           {name}
                        </h3>

                        <div className="flex justify-start gap-2 items-center w-fit mt-[5%]">
                           {keywords.map((keyword, index) => (
                              <span
                                 className="bg-dark/50 rounded-[7px] p-1 whitespace-nowrap px-2"
                                 key={index}
                              >
                                 {" "}
                                 {keyword}{" "}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}

               <div className="absolute bottom-[5%] w-fit bg-red z-20 left-[10%] gap-2 flex items-center xs:left-[5%] xs:bottom-[8%]">
                  <SlideButton />
                  <SlideButton className="!w-[20px] !rounded-lg bg-primary" />
                  <SlideButton />
               </div>
            </div>

            <div className="">
               <h2 className=" font-semibold text-2xl xs:hidden">
                  Et si on s'entendait sur quelques règles simples ?
               </h2>

               <div className="">
                  {Rules.map(({ name, icon, description }, index) => (
                     <div key={index} className=" my-6 xs:text-[15px]">
                        <div className="flex items-center gap-2 w-fit b mb-1 font-medium">
                           <p>{icon}</p>
                           <h4>{name}</h4>
                        </div>

                        <p className="border-solid border-0 border-l-[2px] border-dark/40 ml-2  pl-[7%] xs:text-[13px]">
                           {description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="flex items-center justify-center gap-[10%] large:block">
            <div className=" max-w-[40%] large:max-w-[80%] large:m-auto xs:!max-w-[95%]">
               <video width="700" height="100" controls>
                  <source src={Video} type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture de la
                  vidéo.
               </video>
            </div>

            <div className="w-[45%] large:w-[80%] large:m-auto xs:!w-[95%]">
               <AudioPlayer audioUrl="../assets/Un rien peut tout changer Atomic Habits - 25.mp3" />

               <PdfViewer />
            </div>
         </div>
      </div>
   );
};

export default CreatorRules;
