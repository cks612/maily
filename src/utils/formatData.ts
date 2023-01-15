import React from "react";
import { MovieDataProps } from "../pages/api/movie";

export interface SearchMovieProps {
  status: string;
  value?: SearchedDataProps[];
}
export interface SearchedDataProps {
  DOCID?: string;
  movieId?: string;
  movieSeq?: string;
  title?: string;
  titleEng?: string;
  titleOrg?: string;
  titleEtc?: string;
  prodYear?: string;
  directors?: any;
  actors?: any;
  nation?: string;
  company?: string;
  plots?: any;
  runtime?: string;
  rating?: string;
  genre?: string;
  kmdbUrl?: string;
  type?: string;
  use?: string;
  episodes?: string;
  ratedYn?: string;
  repRatDate?: string;
  repRlsDate?: string;
  ratings?: any;
  keywords?: string;
  posters?: string;
  stlls?: string;
  staffs?: string;
  vods?: any;
  openThtr?: string;
  stat?: any;
  screenArea?: string;
  screenCnt?: string;
  salesAcc?: string;
  audiAcc?: string;
  statSouce?: string;
  statDate?: string;
  themeSong?: string;
  soundtrack?: string;
  fLocation?: string;
  Awards1?: string;
  Awards2?: string;
  regDate?: string;
  modDate?: string;
  Codes?: any;
  CommCodes?: any;
  ALIAS?: string;
}
export interface MovieDirectorsProps {
  directorNm: string;
  directorEnNm: string;
  directorId: string;
}

export interface RatingProps {
  ratingMain: string;
  ratingDate: string;
  ratingNo: string;
  ratingGrade: string;
  releaseDate: string;
  runtime: string;
}

export interface ActorProps {
  actorNm: string;
  actorEnNm: string;
  actorId: string;
}

export interface PlotProps {
  plotLang: string;
  plotText: string;
}

export const getFormatData = (
  movieData: MovieDataProps[],
  searchData: SearchMovieProps[]
) => {
  const combineData = searchData.flatMap(info => info.value);

  return movieData.map(data => {
    const filterData = combineData.filter(
      el => filterTitle(el?.title!) === filterTitle(data.movieNm!)
    );

    return {
      rank: data.rank,
      title: data.movieNm,
      openDt: data.openDt,
      audiAcc: data.audiAcc,
      directorNm: filterDirectors(filterData[0]?.directors.director),
      link: filterData[0]?.kmdbUrl,
      image: filterPoster(filterData[0]?.posters),
      ratingGrade: filterRating(filterData[0]?.ratings.rating),
      actor: filterActors(filterData[0]?.actors.actor),
      genre: filterData[0]?.genre,
      plot: filterData[0]?.plots.plot[0].plotText,
    };
  });
};

const filterTitle = (item: string) => {
  return item.replace(/["!HES"]|\s/g, "");
};

const filterDirectors = (directors: MovieDirectorsProps[]) => {
  return directors?.map(director => director.directorNm);
};

const filterPoster = (posters: string | undefined) => {
  if (!posters) return "";
  const findInx = posters.indexOf("|");
  return posters.substring(0, findInx);
};

const filterRating = (rating: RatingProps[]) => {
  return rating[0].ratingGrade;
};

const filterActors = (actor: ActorProps[]) => {
  return actor.map(res => res.actorNm).slice(0, 5);
};
