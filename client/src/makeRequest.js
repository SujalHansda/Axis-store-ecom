import axios from "axios";

export const makeRequest = axios.create({
  baseURL: API_URL,
  headers: { Authorization: "bearer " + API_TOKEN },
});
