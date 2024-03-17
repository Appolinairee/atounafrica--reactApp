import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Inscription = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const email = encodeURIComponent(searchParams.get("email"));
   const expires = searchParams.get("expires");
   const signature = searchParams.get("signature");

   const navigate = useNavigate();

   const mutation = useMutation(
      () =>
         axios.post(
            `http://127.0.0.1:8000/api/auth/email/verify?email=${email}&expires=${expires}&signature=${signature}`,
            {
               retry: 0,
            }
         ),
      {
         onSuccess: (response) => {
            console.log("User registered successfully");
            let data = response.data.data;
            localStorage.setItem("token", data.token);
            navigate("/");
         },
         onError: (error) => {
            console.error("Error during registration:", error);
            navigate("/error");
         },
      }
   );
   useEffect(() => {
      mutation.mutate();
   }, []);

   return null;
};

export default Inscription;
