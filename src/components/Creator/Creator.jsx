const Creator = ({ image, name, stars=1 }) => {
   return (
      <div className="flex justify-between w-full border-solid border-0 border-b-[1px] border-dark/10 pb-1  ">
         <div className="flex w-fit gap-2 text-[14px]">
            <img
               className="rounded-full w-[40px] h-[40px]"
               src={image}
               alt={name}
            />

            <div>
               <p>{name}</p>
               <p>Etoiles</p>
            </div>
         </div>
      </div>
   );
};

export default Creator;