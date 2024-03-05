import {
   FaClock,
   FaCog,
   FaMoneyBillAlt,
   FaTag,
   FaTags,
   FaAccusoft,
   FaArrowRight,
   FaProductHunt,
} from "react-icons/fa";
import Image from "../../assets/signImage.png";
import Products from "../Products/Products";

const Statistic = ({ title, icon, value, description, className = "" }) => {
   return (
      <div
         className={`bg-primary/20 rounded-2xl p-4 px-6 cursor-pointer xs:p-2 ${className}`}
      >
         <div className="flex items-center w-fit gap-2">
            <p className="text-primary">{icon}</p>

            <span className="large:text-[14px] xs:text-[12px]">{title}</span>
         </div>

         <h3 className="font-semibold text-2xl my-2 mb-4 large:text-xl xs:!text-[14px]">{value}</h3>
         <span className=" text-[14px] xs:text-[11px]">{description}</span>
      </div>
   );
};

const SubLink = ({ icon, name, className, subClass }) => {
   return (
      <div
         className={`flex items-start p-3 cursor-pointer  shadow-boxShadow1 mb-4 px-6 rounded-2xl  gap-2 justify-start font-medium ${className} large:text-[16px]`}
      >
         <p className={`text-primary ${subClass}`}>{icon}</p>
         <p>{name}</p>
      </div>
   );
};

const CreatorDashboard = () => {
   return (
      <div className="pt-24">
         <div className="bg-red mb-24 rounded-lg bg-light mx-[3%] p-2 px-[5%] py-6">
            <div className="">
               <div className="flex justify-between items-start md:flex-col-reverse xs:justify-start">
                  <h2 className=" font-semibold text-2xl md:mt-3 xs:text-xl">
                     Bienvenue, King Of Soto
                  </h2>

                  <div className="flex items-center justify-center gap-2 cursor-pointer">
                     <img
                        className="w-[50px] h-[45px] rounded-2xl border-solid border-dark/30 border-[1px] p-1 "
                        src={Image}
                        alt="Logo entreprise"
                     />
                     <p className="font-medium">King Of Soto</p>
                  </div>
               </div>

               <div className="my-8 mb-12 grid grid-cols-3 items-center justify-between gap-[5%] large:grid-cols-2 xs:bg-primary xs:p-2 xs:pb-8 rounded-bl-3xl rounded-br-3xl">
                  <Statistic
                     title="Total customers"
                     icon={<FaMoneyBillAlt />}
                     value="2426253 Fcfa"
                     description="Lorem ipsum sit amet."
                     className=" bg-yellow-50"
                  />

                  <Statistic
                     title="Total customers"
                     icon={<FaMoneyBillAlt />}
                     value="2426253 Fcfa"
                     description="Lorem ipsum sit amet."
                     className=" !bg-red-100 "
                  />

                  <Statistic
                     title="Total customers"
                     icon={<FaMoneyBillAlt />}
                     value="2426253 Fcfa"
                     description="Lorem ipsum sit amet."
                     className="!bg-green-100"
                  />
               </div>
            </div>


            <div className="grid grid-cols-4 gap-4 justify-start large:grid-cols-1 large:gap-0 ">
               {/* SubLink = ({ icon, name }) */}
               <div className=" large:grid grid-cols-2 gap-3 xs:grid-cols-1">
                  <SubLink
                     icon={<FaClock />}
                     name="Manager vos produits"
                     className="!bg-primary !text-light"
                     subClass=" bg-light text-primary  rounded-full"
                  />

                  <SubLink icon={<FaCog />} name="Vente au cours" />

                  <SubLink
                     icon={<FaMoneyBillAlt />}
                     name="Discussions Clients"
                  />
                  <SubLink icon={<FaTag />} name="Marketing" />
                  <SubLink icon={<FaAccusoft />} name="Vos informations" />
               </div>

               <div className="pt-4 col-span-3 large:hidden">
                  <Products />
               </div>
            </div>
         </div>
      </div>
   );
};

export default CreatorDashboard;
