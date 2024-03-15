import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Inscription = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);

   const { email, expires, signature } = useQuery("params", () => {
      const params = {};
      for (let [key, value] of searchParams.entries()) {
         params[key] = value;
      }
      return params;
   });

   const mutation = useMutation(
      () => axios.post(`http://127.0.0.1:8000/api/auth/email/verify`, { email, expires, signature }),
      {
         onSuccess: () => {
            console.log("User registered successfully");
         },
         onError: (error) => {
            console.error("Error during registration:", error);
         },
      }
   );

   console.log(`http://127.0.0.1:8000/api/auth/email/verify`, { email, expires, signature });

   mutation.mutate();

   return (
        (
            <p>Hello</p>
        )
   );
};

export default Inscription;