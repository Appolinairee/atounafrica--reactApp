import axios from "../services/axiosConfig";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "./authSlice";

const useFetchUser = () => {
   const dispatch = useDispatch();
   const authToken = useSelector((state) => state.auth.authToken);
   const user = useSelector((state) => state.auth.user);

   useEffect(() => {
      const fetchUserData = async () => {
         if (!user && authToken) {
            try {
               const response = await axios.get("user", {
                  retry: { retries: 2 },
               });

               if(response.data.data){
                  dispatch(login({ user: response.data.data, token: authToken }));
               }
            } catch (error) {
               console.error('Error fetching user data:', error);
               dispatch(setError());
            }
         }
      };

      fetchUserData();
   }, [authToken, user, dispatch]);
};

export default useFetchUser;
