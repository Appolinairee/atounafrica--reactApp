import Creator from "./Creator";
import { IoArrowForwardSharp } from "react-icons/io5";

// import creators images
import Creator1 from "../../assets/photos(exemples)/OIP (2).jpg";
import Creator2 from "../../assets/photos(exemples)/OIP (6).jpg";
import Creator3 from "../../assets/photos(exemples)/OIP (3).jpg";
import Creator4 from "../../assets/photos(exemples)/OIP (1).jpg";
import Creator5 from "../../assets/photos(exemples)/OIP (2).jpg";

// import creators product
import Product1 from "../../assets/photos(exemples)/OIP (2).jpg";
import Product2 from "../../assets/photos(exemples)/OIP (6).jpg";
import Product3 from "../../assets/photos(exemples)/OIP (3).jpg";
import Product4 from "../../assets/photos(exemples)/OIP (1).jpg";
import Product5 from "../../assets/photos(exemples)/OIP (2).jpg";
import Button from "../Button/Button";
import Button2 from "../../BaseComponents/Button2";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const Creators = () => {
   const containerRef = useRef(null);
   const [isAtStart, setIsAtStart] = useState(true);
   const [isAtEnd, setIsAtEnd] = useState(false);
   const [scrollStep, setScrollStep] = useState(0);
   const [scrollLeft, setScrollLeft] = useState(0);

   const CreatorArray = [
      {
         name: "King of Soto",
         product: Product1,
         creator: Creator1,
         location: "Calavi, Zogbadje",
      },

      {
         name: "King of Soto",
         product: Product2,
         creator: Creator2,
         location: "Calavi, Zogbadje",
      },
      {
         name: "King of Soto",
         product: Product3,
         creator: Creator3,
         location: "Calavi, Zogbadje",
      },
      {
         name: "King of Soto",
         product: Product4,
         creator: Creator4,
         location: "Calavi, Zogbadje",
      },
      {
         name: "King of Soto",
         product: Product5,
         creator: Creator5,
         location: "Calavi, Zogbadje",
      },
   ];

   const handleScroll = (direction) => {
      const container = containerRef.current;

      if (container) {
         const newScrollLeft =
            direction === "left"
               ? scrollLeft - scrollStep
               : scrollLeft + scrollStep;

         container.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
         });

         setScrollLeft(newScrollLeft);
      }
   };

   useEffect(() => {
      const container = containerRef.current;
      if (container) {
         const totalWidth = container.scrollWidth;
         const averageItemWidth = totalWidth / CreatorArray.length;

         setScrollStep(averageItemWidth);

         // Met à jour les états isAtStart et isAtEnd
         setIsAtStart(scrollLeft < 10);
         setIsAtEnd(scrollLeft + container.clientWidth >= totalWidth);
      }
   }, [scrollLeft]);

   return (
      <div className="my-2 bg-light px-sectionPadding py-6">
         <h3 className=" text-[2rem] font-semibold capitalize xs:text-[1.4rem]">
            Vendez vos créations <br className="hidden xs:block" /> Made In
            Africa.
         </h3>

         <p className="text-[1rem] font-medium">Nos vendeurs Atoun!</p>

         <div className="relative pb-4 mb-2">
            <div
               className="flex items-start gap-[3%] my-8 overflow-x-auto relative scrollbar-none xs:my-4"
               ref={containerRef}
            >
               {CreatorArray.map(({ name, creator, product }, index) => (
                  <div
                     key={index + name}
                     className="w-full productShadow rounded-xl p-[0.8rem] max-w-[400px] m-auto min-w-[250px]"
                  >
                     <Creator image={creator} name={name} stars={5} />

                     <Link>
                        <div className="w-full h-[180px] rounded-xl overflow-hidden my-3 relative">
                           <img
                              className="h-full w-auto m-auto"
                              src={product}
                              alt={name}
                           />
                        </div>
                     </Link>

                     <Link>
                        <p className="border-solid border-[0px] border-t-[1px] border-dark/10 pt-1">
                           Découvrir
                        </p>
                     </Link>
                  </div>
               ))}
            </div>


            <button
               className={`absolute w-fit bottom-0 bg-light transform -translate-y-1/2 right-[45px] ${
                  isAtStart ? "opacity-0" : "absolute-100"
               } border-solid rounded-full border-[1px] p-[3px] border-dark/50 large:right-[35px] xs:p-[2px] xs:-bottom-1`}
               onClick={() => handleScroll("left")}
            >
               <MdKeyboardArrowLeft />
            </button>

            <button
               className={`absolute  bottom-0 bg-light right-0 transform -translate-y-1/2 ${
                  isAtEnd ? "opacity-0" : "absolute-100"
               } border-solid rounded-full border-[1px] p-[3px] border-dark/50 large:right-1 xs:p-[2px] xs:-bottom-1`}
               onClick={() => handleScroll("right")}
            >
               <MdKeyboardArrowRight />
            </button>
         </div>

         <Button2 Text="Devenir vendeur" className="!w-[230px]" />
      </div>
   );
};

export default Creators;
