import axios from "axios";

export const resourceAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
