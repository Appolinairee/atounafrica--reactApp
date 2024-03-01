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

         <div className="flex items-center justify-center gap-4 w-fit">
            <a
               href="../assets/Note de service_004.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className=""
            >
               <Button2 Text="Ouvrir le PDF" className=" w-40 !text-[13px] xs:!w-30" />
            </a>

            <a
               href="../assets/Note de service_004.pdf"
               download="atounAfrica.pdf"
               className=""
            >
               <Button1 Text="Télécharger PDF" className="!text-[12px] !p-2" />
            </a>
         </div>
      </div>
   );
};

export default PdfViewer;
