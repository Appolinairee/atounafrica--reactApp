import React from "react";

const AudioPlayer = ({ audioUrl }) => {
   return (
      <div className="my-8">
         <h4 className="text-2xl font-semibold mb-4 capitalize">écouter l'audio</h4>

         <audio controls>
            <source
               src="../assets/1984 George Orwell _32kbps.mp3"
               type="audio/mp3"
            />
            Votre navigateur ne prend pas en charge l'élément audio.
         </audio>
      </div>
   );
};

export default AudioPlayer;
