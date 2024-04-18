import { CiEdit } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

const Steps = [
   {
      name: "Commande",
      number: "1",
      icon: <MdShoppingCart />,
      link: ``,
   },
   {
      name: "Paiement",
      number: "2",
      icon: <RiSecurePaymentFill />,
   },
   {
      name: "Avis Livraison",
      number: "3",
      icon: <FaTruckFast />,
   },
   {
      name: "Avis",
      number: "4",
      icon: <CiEdit />,
   },
];

export default Steps;