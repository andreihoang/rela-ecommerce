import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummyproducts-api.herokuapp.com/api/v1",
});
