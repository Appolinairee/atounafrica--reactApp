import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "../Features/authSlice";


const useFetchUser = () => {
   const dispatch = useDispatch();
   const authToken = useSelector((state) => state.auth.authToken);
   const user = useSelector((state) => state.auth.user);



   useEffect(() => {
      const fetchUserData = async () => {
         if (!user && authToken) {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/user", {
                   headers: {
                      Authorization: `Bearer ${authToken}`,
                   },
                   retry: false,
                });


                dispatch(login(response.data.data));

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
