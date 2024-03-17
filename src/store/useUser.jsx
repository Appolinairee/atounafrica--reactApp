import axios from "axios";
import { useQuery } from "react-query";

const useUser = () => {
  const authToken = localStorage.getItem('token');

  const { data: user, isLoading: userLoading, isError: userError } = useQuery('user', async () => {
    if (authToken) {
      const response = await axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
          Authorization: `Bearer ${authToken}`
        },
        retry: false
      });
      console.log(response.data.data)
      return response.data;
    } else {
      return null;
    }
  });

  if (userLoading) {
    return { isLoading: true };
  }

  if (userError) {
    return { isLoading: false, isError: true };
  }

  return { user, isLoading: false };
};

export default useUser;