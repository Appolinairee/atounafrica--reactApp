import { useState } from "react";

import Cover from "../assets/photos(exemples)/OIP (2).jpg";
import ProfilImage from "../assets/photos(exemples)/OIP (4).jpg";
import { FaCamera } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";


const Profil = () => {

    const [isEditing, setIsEditing] = useState(true);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    }; 

    const Profils = [
        {
            icon: <LuUser />,
            type: "Nom Entreprise",
            value: "King Of Soto"
        },
        {
            icon: <CiMail />,
            type: "Email",
            value: "nicolas@gmail?com"
        },
        {
            icon: <FaPhone />,
            type: "Numéro de téléphone",
            value: "+229 57001067"
        },
        {
            icon: <CiLocationOn />,
            type: "Option de livraison par défaut",
            value: "AtounAfrica, Sois-même"
        },
        {
            icon: <RiSecurePaymentFill />,
            type: "Méthode de paiement",
            value: "MTN money"
        }
    ]

  return (
    <div className="w-full pt-[100px] lg:pt-[80px] xs:pt-[70px]">
        
        <div className="w-[75%] m-auto bg-white px-[5%] py-6 lg:w-[90%] xs:w-[95%]">
            <div className="flex items-center justify-center mb-5 text-[27px]">
                <h3 className="text-xl font-semibold ">Profil Personnel</h3>
                <CiEdit className="cursor-pointer rounded-full hover:bg-dark/20 p-1 " onClick={handleEditClick} />
            </div>
 
            <div className="grid grid-cols-2 items-start justify-start w-full  h-full mb-14 gap-[5%] sm:block">
                
                <div className="w-full sm:mb-8">
                    <div className="relative rounded-xl h-full min-h-[150px] xs:min-h-[100px]">
                        <div className="absolute top-0 left-0 w-full h-full ">
                            <img src={Cover} alt="Couverture" className="w-full h-full rounded-xl" />
                        </div>
                        
                        <div>
                            <div className="absolute left-1/2 -bottom-[35px] max-w-[80px] -translate-x-1/2 h-auto rounded-1/2 rounded-[30px] border-[1.5px] border-dark/70 xs:max-w-[60px] xs:-bottom-[27px]">
                                <img className="rounded-[30px] border-[1.5px] " src={ProfilImage} alt="Profil" />

                                <FaCamera className="absolute -right-1 -bottom-1 border-solid text-2xl border-[1px] rounded-full border-dark p-[3px] cursor-pointer font-bold" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="">
                    <div className="mb-8">
                        <div className="flex w-fit gap-2 justify-start ">
                            <CiMoneyCheck1 />
                            <p>Portefeuille AtounAfrica</p>
                        </div>
        
                        <div className="my-2 px-4 py-3 border-solid border-dark/50 rounded-xl border-[1px] cursor-pointer">
                            
                            <div className="flex items-center py-1">
                                <div className="flex items-center justify-center gap-2">
                                    <p>Total: <b>100000000 fcfa</b></p>
                                </div>

                                <span className=" bg-dark text-[13px] text-light rounded-md px-[5px] py-[2px]">
                                    Retrait
                                </span>
                            </div>

                            <div className="my-2 pl-2 text-[15px] border-solid border-0 border-l-[1px] border-dark/50 ">
                                <p>Somme courante: <span className="font-medium">50000000 Fcfa</span></p>
                                <p>Portefeuille Affiliation: <span className="font-medium">5000000 Fcfa</span></p>
                            </div>
                        </div>

                        <p className="text-[14px] cursor-pointer">En savoir plus +</p>
                    </div>

                </div>
            </div>

            

            <hr />

            <div className=" grid grid-cols-2 w-full gap-[5%] text-[17px] md:block xs:text-[14px]">
                {
                    Profils.map((profil, index) => (
                        <div key={index+profil.value} className="w-full md:mb-4">
                            <div className="w-full">
                                <div className="flex items-center text-dark/80 gap-2 w-fit">
                                    {profil.icon}
                                    <p>{profil.type}</p>
                                </div>

                                {isEditing ? (
                                    <input
                                    className="w-full my-1 ml-6 border-solid border-[1px] border-dark/80 rounded-xl p-2 md:m-0"
                                    value={profil.value}
                                    />
                                ) : (
                                    <p className="my-1 ml-6 font-medium">{profil.value}</p>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>

            {isEditing ? 
                <div className="my-16 flex items-center gap-5 md:mt-0 md:mb-[5rem] xs:gap-2">
                    <div className=" w-[30%] text-light bg-dark text-center py-3 cursor-pointer rounded-xl md:py-2 xs:text-[16px]" onClick={handleEditClick}>
                        <p>Annuler</p>
                    </div>

                    <div className="w-[70%] bg-primary text-xl text-light text-center py-3 cursor-pointer rounded-xl md:py-2 xs:text-[16px]" >
                        <p>Soumettre</p>
                    </div>
                </div>
                
            
            :

                <div className="my-14 bg-dark text-xl text-light text-center py-3 cursor-pointer rounded-xl md:mt-0 md:mb-[5rem] md:py-2 xs:text-[16px]" onClick={handleEditClick}>
                    <p>Modifier</p>
                </div>
        } 
        </div>
    </div>
  )
}

export default Profil;