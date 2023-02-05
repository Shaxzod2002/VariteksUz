import axios from "axios";
const VARITEKS_API = "https://azamjon.pythonanywhere.com/";
export const Axios = axios.create({
  baseURL: VARITEKS_API,
  "Content-Type": "application/json",
  Vary: "Accept",
});
