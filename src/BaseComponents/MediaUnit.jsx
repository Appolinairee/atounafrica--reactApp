import Image from "../assets/photos(exemples)/OIP (3).jpg";

const MediaUnit = ({
   media,
   altText,
   className = "",
   index,
   handleMediaClick,
}) => {
   return (
      <>
         {media && media.type === "video" && (
            <video
               controls
               className={`w-auto h-[250px] mx-auto ${className}`}
               onClick={() => handleMediaClick(index)}
            >
               <source
                  src={
                     media?.link
                        ? process.env.REACT_APP_API_URL +
                          "storage/" +
                          media.link
                        : ""
                  }
                  type="video/mp4"
               />
               Your browser does not support the video tag.
            </video>
         )}

         {media && media.type === "image" && (
            <img
               className={`w-auto h-[250px] mx-auto ${className}`}
               src={
                  media?.link
                     ? process.env.REACT_APP_API_URL + "storage/" + media.link
                     : Image
               }
               onClick={() => handleMediaClick(index)}
               alt={altText}
            />
         )}
      </>
   );
};

export default MediaUnit;
