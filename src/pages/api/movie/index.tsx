import type { NextApiRequest, NextApiResponse } from "next";
import { MOVIE, KMDB } from "../../../lib/axios";
import {
  ActorProps,
  getFormatData,
  MovieDirectorsProps,
  RatingProps,
} from "../../../utils/formatData";

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
export interface DataProcessingProps {
  rank?: string;
  title?: string;
  openDt?: string;
  audiAcc?: string;
  directorNm?: MovieDirectorsProps;
  link?: string;
  image?: string;
  ratingGrade?: RatingProps;
  actor?: ActorProps;
  genre?: string;
}
const naverNews = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await MOVIE.get(
    `/kobisopenapi/webservice/rest/boxoffice/${req.query.q}.json?key=b7537dece115ba9accb305e88e2799d2&targetDt=20230113`
  );

  const movieData = data.boxOfficeResult.dailyBoxOfficeList;

  const searchData = await Promise.allSettled(
    movieData.map(async (list: MovieDataProps) => {
      const result = await KMDB.get(
        `/search_json2.jsp?collection=kmdb_new2&releaseDts=20221101&releaseDte=20231231&listCount=1&title=${list.movieNm}&ServiceKey=WK13388M4RFT56O24X8T`
      );
      return result.data.Data[0].Result;
    })
  );
  return res.status(200).json(getFormatData(movieData, searchData));
};

export default naverNews;
