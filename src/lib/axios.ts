import axios from "axios";

export const MOVIE = axios.create({
  baseURL: "http://kobis.or.kr",
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export const KMDB = axios.create({
  baseURL: "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api",
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});
