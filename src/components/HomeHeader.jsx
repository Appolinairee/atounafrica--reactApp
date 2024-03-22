import {
   BiSlider,
   BiSolidArrowToLeft,
   BiSolidArrowToRight,
} from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Slide1 from "../assets/photos(exemples)/OIP (1).jpeg";
import Slide2 from "../assets/photos(exemples)/OIP (3).jpeg";
import { useEffect, useState } from "react";
import Button1 from "../BaseComponents/Button1";
import Button2 from "../BaseComponents/Button2";
import Overflow from "../BaseComponents/Overflow";
import { useSelector } from "react-redux";
import { selectPresentations } from "../Features/products/presentationsSlice";
import { useFetchPresentations } from "../Features/products/useFetchPresentations";

const HomeHeader = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const { isLoading, isError } = useFetchPresentations();
   const PresentationsProducts = useSelector(selectPresentations).presentations;
   const [slide, setSlide] = useState({});
   const [slides, setSlides] = useState([]);

   console.log(PresentationsProducts)


   const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) =>
         prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
   };

   const handleNextSlide = () => {
      setCurrentSlide((prevSlide) =>
         prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
   };

   const handleSlideClick = (state) => {
      setCurrentSlide(state);
   };

   useEffect(() => {
      const titleElement = document.getElementById("slideeTitle");
      const ButtonElement = document.querySelector(".secondButton");

      if (titleElement && ButtonElement) {
         titleElement.classList.add("fade-in");
         ButtonElement.classList.add("zoom-in");
      }

      const animationTimeout = setTimeout(() => {
         if (titleElement && ButtonElement) {
            titleElement.classList.remove("fade-in");
            ButtonElement.classList.remove("zoom-in");
         }
      }, 1000);

      return () => clearTimeout(animationTimeout);
   }, [currentSlide]);

   const Slides = [
      {
         caracteristics: ["Meubles", "Authenticité", "Made In Africa"],
         title: "Le Made Africa qui rayonne de plus belle",
         image: Slide1,
         type: true,
      },
      {
         caracteristics: ["Meubles", "Authenticité", "Made In Africa"],
         title: "Le Made n Africa qui rayonne de plus belle",
         image: Slide2,
      },
      {
         caracteristics: ["Meubles", "Authenticité", "Made In Africa"],
         title: "Le Made n Africa qui rayonne de plus belle",
         image: Slide2,
      },
   ];

   useEffect(() => {
      let currentSlideData = {};

      if (!isLoading && !isError && PresentationsProducts?.length > 0) {
         setSlides(PresentationsProducts);

         currentSlideData = {
            title: PresentationsProducts[currentSlide].title,
            caracteristics: PresentationsProducts[currentSlide].caracteristics
               .split(";;")
               .map((item) => item.trim()),
            // image: process.env.PUBLIC_URL + "public/storage/" + PresentationsProducts[currentSlide].medias[0].link,
            image: Slide1,
            type: PresentationsProducts[currentSlide].status === 2,
         };
      } else {
         setSlides(Slides);

         currentSlideData = {
            title: Slides[currentSlide].title,
            caracteristics: Slides[currentSlide].caracteristics,
            image: Slides[currentSlide].image,
            type: Slides[currentSlide].type,
         };
      }

      setSlide(currentSlideData);
   }, [isLoading, isError, PresentationsProducts, currentSlide]);

   return (
      <div className="bg-light py-2 px-sectionPadding ">
         <div className="h-[400px] xs:h-[350px] rounded-[30px] bg-dark/10 flex items-center justify-start overflow-hidden xs:rounded-[15px]">
            <div className="flex h-full w-full relative !items-start justify-between large:!h-full large:text-light">
               <div className="pl-[5%] pr-0 py-[3%] large:relative large:z-10 h-full pb-[80px] flex flex-col justify-between !items-start large:pt-[5%]">
                  <div className="flex gap-2 w-fit  xs:max-w-[80%] whitespace-nowrap xs:flex-wrap">
                     {slide.caracteristics?.slice(0, 2).map((item, i) => (
                        <span
                           className="bg-dark/20  rounded-lg p-1 large:text-light font-medium large:py-[3px] large:text-[14px] large:px-2 large:bg-dark/40  xs:!text-[14px]"
                           key={i}
                        >
                           {item}
                        </span>
                     ))}
                  </div>

                  <h2
                     className="my-[5%] font-semibold text-[40px] max-w-[80%] md:max-w-[95%]  line-clamp-3 overflow-ellipsis xs:text-[35px] xs:max-w-[90%]"
                     id="slideeTitle"
                  >
                     {slide.title}
                  </h2>

                  {slide.type ? (
                     <div className="flex gap-4 w-fit ">
                        <Button1 Text="Contactez" className="xs:hidden" />
                        <div className="secondButton">
                           <Button2 Text="Vendre" />
                        </div>
                     </div>
                  ) : (
                     <div className="flex gap-4 w-fit ">
                        <Button1 Text="Voir" className="xs:hidden" />
                        <div className="secondButton">
                           <Button2 Text="Commander" />
                        </div>
                     </div>
                  )}

                  <SlidesPaginator
                     length={
                        !!PresentationsProducts
                           ? PresentationsProducts?.length
                           : Slides.length
                     }
                     currentSlide={currentSlide}
                     handleSlideClick={handleSlideClick}
                     handleNextSlide={handleNextSlide}
                     handlePrevSlide={handlePrevSlide}
                  />
               </div>

               <div className="!w-[60%] h-full overflow-hidden large:absolute top-0 left-0 large:!w-full large:z-0">
                  <img className="w-full h-full" src={slide.image} alt={slide.title} />
               </div>


               <Overflow className="!bg-dark/50 !w-full !right-0 !z-0 hidden large:!block" />
            </div>
         </div>
      </div>
   );
};

const SlidesPaginator = ({
   length,
   currentSlide,
   handleSlideClick,
   handleNextSlide,
   handlePrevSlide,
}) => {
   return (
      <div className="flex items-center w-fit gap-2 *:cursor-pointer font-bold absolute !bottom-[30px] left-[5%]">
         <BsArrowLeft
            className="text-[25px] border-solid border-dark rounded-full p-[0px] px-[5px] border-[1px] duration-75 hover:border-transparent hover:bg-primary hover:text-light xs:text-[22px] large:border-light"
            onClick={handlePrevSlide}
         />
         <div className="flex gap-[3px]">
            {Array.from({ length }, (_, index) => (
               <span
                  key={index}
                  className={`relative p-[4px] border-solid border-dark/60 border-[1px] rounded-full large:border-light xs:p-[3px] ${
                     index === currentSlide
                        ? "px-3 xs:px-[7px] bg-primary border-transparent rounded-lg large:border-transparent"
                        : ""
                  }`}
                  onClick={() => handleSlideClick(index)}
               ></span>
            ))}
         </div>

         <BsArrowRight
            className="text-[25px] border-solid border-dark rounded-full p-[0px] px-[5px] border-[1px] duration-75 hover:border-transparent large:border-light hover:bg-primary hover:text-light xs:text-[22px]"
            onClick={handleNextSlide}
         />
      </div>
   );
};

export default HomeHeader;
