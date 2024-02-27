import Logo from "../assets/photos(exemples)/OIP (2).jpeg";
import { BiMessageRoundedDetail } from "react-icons/bi";
import CreatorHeader from "../components/CreatorHeader";
import Products from "../components/Products/Products";

const CreatorProfil = () => {
   return (
      <div className="pt-10">
         <div className="mt-12 mx-[3%] bg-light px-3">
            <div className="flex items-center justify-center py-2 cursor-pointer">
               <div className=" rounded-tl-full flex items-center gap-2">
                  <img
                     src={Logo}
                     className="rounded-[20px] rounded-tl-[0px] w-[70px] h-[50px]"
                     alt="Logo de..."
                  />
                  <h4 className="text-[19px] font-medium">King of Soto</h4>
               </div>

               <div className="flex gap-2 items-center justify-center cursor-pointer">
                  <BiMessageRoundedDetail />
                  <p>Discussion</p>
               </div>
            </div>

            <CreatorHeader />

            <div>
               Description, Localisation,.. Informations (seul pour le créateur)
            </div>

            <Products />
         </div>
      </div>
   );
};

export default CreatorProfil;
