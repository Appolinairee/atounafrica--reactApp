import { FaFilePdf } from "react-icons/fa";
import Button1 from "./Button1";
import Button2 from "./Button2";

const PdfViewer = ({ pdfUrl }) => {
   return (
      <div className="">
         <h4 className="text-2xl font-semibold mb-4">Lire le Pdf détaillé</h4>

         <div className="">
            <FaFilePdf className="text-primary text-[7rem]" /> <br />
            <p className="text-gray-600 mb-3">
               Ouvrir ou télécharger la brochure PDF.
            </p>
         </div>

         <div className="flex items-center justify-center gap-4 w-fit xs:block">
            <a
               href="../assets/Note de service_004.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className=""
            >
               <button className=" p-1 border-solid border-[1px] px-2 rounded-lg whitespace-nowrap">Ouvrir le PDF</button>
            </a>

            <a
               href="../assets/Note de service_004.pdf"
               download="atounAfrica.pdf"
               className=""
            >
               <button className=" p-1 border-solid border-[1px] px-2 rounded-lg whitespace-nowrap xs:mt-2">Télécharger PDF</button>
            </a>
         </div>
      </div>
   );
};

export default PdfViewer;
