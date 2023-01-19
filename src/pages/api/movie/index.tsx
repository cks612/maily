import { getFormatData } from "@utils/formatData";
import { formatDate } from "@utils/getDate";
import { KMDB_KEY, KOBIS_KEY } from "constant/auth";
import { KMDB, MOVIE } from "lib/axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { MovieDataProps } from "types";

const naverNews = async (req: NextApiRequest, res: NextApiResponse) => {
  const dailyDate = formatDate("day");
  const releaseDate = formatDate("month");
  const endOfYear = formatDate("year");
  const weekDate = formatDate("week");

  const movieType = req.query.q;
  let movieData = [];

  if (movieType === "searchDailyBoxOfficeList") {
    const { data } = await MOVIE.get(
      `/kobisopenapi/webservice/rest/boxoffice/${movieType}.json?key=${KOBIS_KEY}&targetDt=${dailyDate}`
    );
    movieData = data.boxOfficeResult.dailyBoxOfficeList;
  }

  if (movieType === "searchWeeklyBoxOfficeList") {
    const { data } = await MOVIE.get(
      `/kobisopenapi/webservice/rest/boxoffice/${movieType}.json?key=${KOBIS_KEY}&targetDt=${weekDate}&weekGb=0`
    );
    movieData = data.boxOfficeResult.weeklyBoxOfficeList;
  }

  const searchData = await Promise.allSettled(
    movieData.map(async (list: MovieDataProps) => {
      const result = await KMDB.get(
        `/search_json2.jsp?collection=kmdb_new2&releaseDts=${releaseDate}&releaseDte=${endOfYear}&listCount=1&title=${list.movieNm}&ServiceKey=${KMDB_KEY}`
      );
      return result.data.Data[0].Result;
    })
  );
  return res.status(200).json(getFormatData(movieData, searchData));
};

export default naverNews;
