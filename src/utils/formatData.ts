import React from "react";
import { MovieDataProps, SearchMovieProps } from "../pages/api/movie";

export const getFormatData = (
  movieData: MovieDataProps[],
  getSearchInfo: SearchMovieProps[]
) => {
  const searchData = getSearchInfo.flatMap(info => info.value.data.items);

  return movieData.map(data => {
    const filterSearchData = searchData.filter(
      el => filterProcess(el.title) === data.movieNm
    );

    return {
      ...data,
      link: filterSearchData[0]?.link,
      image: filterSearchData[0]?.image,
      subtitle: filterSearchData[0]?.subtitle,
      director: filterSearchData[0]?.director,
      actor: filterSearchData[0]?.actor,
      userRating: filterSearchData[0]?.userRating,
    };
  });
};

const filterProcess = (item: string) => {
  return item.replace("<b>", "").replace("</b>", "");
};
