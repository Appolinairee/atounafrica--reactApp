import React, { useEffect } from "react";

const ScrollBarHider = ({ hidden, handleSearchState, className }) => {
   
    useEffect(() => {
      const handleScrollBar = () => {
         document.body.style.overflow = hidden ? "hidden" : "visible";
      };

      const showScrollBar = () => {
         document.body.style.overflow ="visible";
      };

      handleScrollBar();

      return () => showScrollBar();
   }, [hidden]);

   return (
      <div>
         {hidden && (
            <div
               className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50 ${className}`}
               onClick={handleSearchState}
            />
         )}
      </div>
   );
};

export default ScrollBarHider;
