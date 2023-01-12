import axios from "axios";
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from "../constant/auth";

export const MOVIE = axios.create({
  baseURL: "http://kobis.or.kr",
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export const NAVER_SEARCH = axios.create({
  baseURL: "https://openapi.naver.com/v1",
  headers: {
    "X-Naver-Client-Id": NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    Accept: "application/json",
  },
  withCredentials: true,
});
