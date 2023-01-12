import type { NextApiRequest, NextApiResponse } from "next";
import { MOVIE, NAVER_SEARCH } from "../../../lib/axios";
import { getFormatData } from "../../../utils/formatData";

export interface MovieDataProps {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
}
export interface SearchMovieProps {
  status: string;
  value: {
    statis: number;
    statusText: string;
    headers: [];
    config: [];
    request: [];
    data: ValueDataProps;
  };
}
interface ValueDataProps {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: SearchedDataProps[];
}

interface SearchedDataProps {
  title: string;
  link: string;
  image: string;
  subtitle: string;
  pubDate: string;
  director: string;
  actor: string;
  userRating: string;
}

const naverNews = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await MOVIE.get(
    `/kobisopenapi/webservice/rest/boxoffice/${req.query.q}.json?key=b7537dece115ba9accb305e88e2799d2&targetDt=20230111`
  );

  const searchList = data.boxOfficeResult.dailyBoxOfficeList;

  const getSearchData: any = await Promise.allSettled(
    searchList.map(async (list: MovieDataProps) => {
      const searchData = await NAVER_SEARCH.get(
        `/search/movie.json?query=${list.movieNm}&start=1&display=1&yearfrom=2022&yearto=2023`
      );
      return searchData;
    })
  );

  return res.status(200).json(getFormatData(searchList, getSearchData));
};

export default naverNews;
