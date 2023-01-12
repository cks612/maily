import axios from "axios";
import React from "react";

export const fetcher = async (url: string) => {
  return await axios.get(`${url[0]}?q=${url[1]}`).then(data => data.data);
};
