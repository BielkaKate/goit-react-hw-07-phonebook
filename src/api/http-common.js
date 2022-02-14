import axios from "axios";

export const http = axios.create({
  baseURL: "https://620a2b4992946600171c5835.mockapi.io",
  headers: {
    "Content-type": "application/json",
  },
});
