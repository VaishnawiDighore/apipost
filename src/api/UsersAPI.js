import axios from "axios";
import { BASE_URL } from "../Config/BaseUrl";
const token = localStorage.getItem("token");
export const UsersAPI = {
    getAllUsers: async (data) => {
      var axiosConfig = {
        method: "post",
        url: `${BASE_URL}get_school_user/`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data,
      };
      return await axios(axiosConfig);
    },
    createUsers: async (data) => {
        var axiosConfig = {
          method: "post",
          url: `${BASE_URL}register_school_user/`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data,
        };
        return await axios(axiosConfig);
      },
      deleteUsers: async (data) => {
        var axiosConfig = {
          method: "post",
          url: `${BASE_URL}delete_school_user/`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data,
        };
        return await axios(axiosConfig);
      },
    };