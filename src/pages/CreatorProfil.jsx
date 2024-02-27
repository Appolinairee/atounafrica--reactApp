import Logo from "../assets/photos(exemples)/OIP (2).jpeg";
import { BiMessageRoundedDetail } from "react-icons/bi";
import CreatorHeader from "../components/CreatorHeader";

const CreatorProfil = () => {

  return (
    <div className="pt-10">
        <div className="mt-12 mx-[3%] bg-light px-3">
            <div className="flex items-center justify-center py-2">
                <div className="rounded-lg flex itesm-center gap-2">
                    <img src={Logo} className="rounded-2xl w-[70px] h-[50    px]" alt="Logo de..." />
                    <h4 className="text-[19px] font-medium">King of Soto</h4>
                </div>

                <div className="flex gap-2 items-center justify-center">
                    <BiMessageRoundedDetail />
                    <p>Discussion</p>
                </div>
            </div>

            {/* <div className="min-h-[400px] mt-3 rounded-2xl border-solid border-[1px]">
                <div className="">
                    <div>
                        Categories
                    </div>

                    <div>Nom Produit</div>
                    Images en background
                    Petite description du produit

                </div>
            </div> */}

            <CreatorHeader />

            <div>
                Description, Localisation,..
                Informations (seul pour le créateur)
            </div>

            <div>
                Products
            </div>
        </div>

    </div>
  )
}

export default CreatorProfil;