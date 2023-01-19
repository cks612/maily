import type { NextApiRequest, NextApiResponse } from "next";
import { MOVIE, KMDB } from "../../../lib/axios";
import {
  ActorProps,
  getFormatData,
  MovieDirectorsProps,
  RatingProps,
} from "../../../utils/formatData";
import { formatDate } from "../../../utils/getDate";

export interface MovieDataProps {
  rnum?: string;
  rank?: string;
  rankInten?: string;
  rankOldAndNew?: string;
  movieCd?: string;
  movieNm?: string;
  openDt?: string;
  salesAmt?: string;
  salesShare?: string;
  salesInten?: string;
  salesChange?: string;
  salesAcc?: string;
  audiCnt?: string;
  audiInten?: string;
  audiChange?: string;
  audiAcc?: string;
  scrnCnt?: string;
  showCnt?: string;
  link?: string;
  image?: string;
  subtitle?: string;
  director?: string;
  actor?: string;
  userRating?: string;
}
export interface FilteredMovieDataProps {
  rnum?: string;
  rank?: string;
  title?: string;
  openDt?: string;
  audiAcc?: string;
  directorNm?: string[];
  link?: string;
  image?: string;
  ratingGrade?: string;
  actor?: ActorProps;
  genre?: string;
  plot?: string;
}
const naverNews = async (req: NextApiRequest, res: NextApiResponse) => {
  const dailyDate = formatDate("day");
  const releaseDate = formatDate("month");
  const endOfYear = formatDate("year");
  const weekDate = formatDate("week");

  const movieType = req.query.q;
  let movieData = [];

  if (movieType === "searchDailyBoxOfficeList") {
    const { data } = await MOVIE.get(
      `/kobisopenapi/webservice/rest/boxoffice/${movieType}.json?key=b7537dece115ba9accb305e88e2799d2&targetDt=${dailyDate}`
    );
    movieData = data.boxOfficeResult.dailyBoxOfficeList;
  }

  if (movieType === "searchWeeklyBoxOfficeList") {
    const { data } = await MOVIE.get(
      `/kobisopenapi/webservice/rest/boxoffice/${movieType}.json?key=b7537dece115ba9accb305e88e2799d2&targetDt=${weekDate}&weekGb=0`
    );
    movieData = data.boxOfficeResult.weeklyBoxOfficeList;
  }

  const searchData = await Promise.allSettled(
    movieData.map(async (list: MovieDataProps) => {
      const result = await KMDB.get(
        `/search_json2.jsp?collection=kmdb_new2&releaseDts=${releaseDate}&releaseDte=${endOfYear}&listCount=1&title=${list.movieNm}&ServiceKey=WK13388M4RFT56O24X8T`
      );
      return result.data.Data[0].Result;
    })
  );
  return res.status(200).json(getFormatData(movieData, searchData));
};

export default naverNews;
