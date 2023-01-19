//format

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
