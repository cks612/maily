import {
  ActorProps,
  MovieDataProps,
  MovieDirectorsProps,
  RatingProps,
  SearchMovieProps,
} from "types";

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
      rnum: data.rnum,
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
