import axios from "axios";
import { BASE_URL } from "../Config/BaseUrl";

const token = localStorage.getItem("token");

export const OrgAPI = {
  getAllOrg: async (data) => {
    var axiosConfig = {
      method: "post",
      url: `${BASE_URL}get_organization/`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    };
    return await axios(axiosConfig);
  },
  createOrg: async (data) => {
    var axiosConfig = {
      method: "post",
      url: `${BASE_URL}register_organization/`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    };
    return await axios(axiosConfig);
  },
  updateOrg: async (data) => {
    var axiosConfig = {
      method: "post",
      url: `${BASE_URL}edit_organization/`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    };
    return await axios(axiosConfig);
  },
  deleteOrg: async (data) => {
    var axiosConfig = {
      method: "post",
      url: `${BASE_URL}delete_organization/`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    };
    return await axios(axiosConfig);
  },
};
