import axios from "axios";

export const fetcher = async (url: string[]) => {
  return await axios.get(`${url[0]}?q=${url[1]}`).then(data => data.data);
};
