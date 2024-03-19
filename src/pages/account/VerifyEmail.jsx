import { useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Features/authSlice";

const Inscription = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const email = encodeURIComponent(searchParams.get("email"));
   const expires = searchParams.get("expires");
   const signature = searchParams.get("signature");

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const mutation = useMutation(
      () =>
         axios.post(
            `http://127.0.0.1:8000/api/auth/email/verify?email=${email}&expires=${expires}&signature=${signature}`,
            {
               retry: { retries: 0 },
            }
         ),
      {
         onSuccess: (response) => {
            let data = response.data.data;

            dispatch(login({ user: data.user, token: data.token }));
            navigate("/");
         },
         onError: (error) => {
            console.error("Error during registration:", error);
            navigate("/");
         },
      }
   );
   useEffect(() => {
      mutation.mutate();
   }, []);

   return <h2>En cours de confirmation. Dans un instant ...</h2>;
};

export default Inscription;
