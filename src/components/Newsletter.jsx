import { IoMailUnreadOutline } from "react-icons/io5";

const Newsletter = () => {
   return (
      <div>
         <form
            action=""
            className="flex py-[15px] px-sectionPadding my-2 bg-light"
         >
            <input
               type="email"
               placeholder="Entrer votre mail! Suivez notre newsletter..."
               className="w-2/3 bg-dark placeholder:text-dark placeholder:capitalize bg-dark/5 px-4 py-[0.93rem] rounded-tl-2xl rounded-bl-2xl  md:!text-[14px]"
               required
            />

            <button
               type="submit"
               className=" w-1/3 bg-dark text-light font-semibold text-xl py-[0.8rem] rounded-tr-2xl rounded-br-2xl xs:py-[0.5rem] "
            >
               <div className="flex content-center w-fit items-center relative left-1/2 -translate-x-1/2 justify-center gap-4 md:text-[16px] md:gap-2 xs:gap-1 xs:text-[15px]">
                  <p>Souscrire</p>
                  <IoMailUnreadOutline />
               </div>
            </button>
         </form>
      </div>
   );
};

export default Newsletter;
