import { useState } from "react";
import ScrollBarHider from "../BaseComponents/ScrollBarHidden";

const AffiliationCard = ({ affiliateLink, setSelectedAffiliationLink }) => {
    const [hidder, setHidder] = useState(true);
 
    const handleAffiliationLink = () => {
       setHidder(!hidder);
       setSelectedAffiliationLink(!hidder);
    };
 
    return (
       <div>
          <ScrollBarHider
             hidden={hidder}
             handleSearchState={handleAffiliationLink}
             className="!z-40"
          />
 
          <div className="!z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light">
             <p>
                C'est le moment de gagner plus. Copier et partager ce lien pour
                faire 10% de commission
             </p>
 
             {affiliateLink}
          </div>
       </div>
    );
 }

export default AffiliationCard;