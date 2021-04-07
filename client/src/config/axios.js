import axios from "axios";

export const instance = axios.create({
  baseURL: "https://amazon-clone-app-server.herokuapp.com/",
});
