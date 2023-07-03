import axios from "axios";
import { BASE_URL } from "../Config/BaseUrl";



export const AuthAPI = {
    login: async (data) => {
        return await axios.post(`${BASE_URL}user_login/`, data);
    },
 
   
}