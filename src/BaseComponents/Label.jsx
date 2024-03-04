import React from "react";

const Label = ({ name, htmlFor, icon, required = false }) => {
   return (
      <label htmlFor={htmlFor} className="flex items-center w-fit gap-1 mb-1">
         <p className="text-primary">{icon}</p>

         <p className="text-[17px] xs:!text-[15px] font-medium">
            {name}
            {required && <span className="text-primary"> *</span>}
         </p>
      </label>
   );
};

export default Label;
