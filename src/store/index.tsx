import create from "zustand";
import { persist } from "zustand/middleware";
import type { ParsedUrlQuery } from "querystring";
import { FilteredMovieDataProps } from "../pages/api/movie";
import { Dispatch, SetStateAction } from "react";

export interface MovieStoreProps {
  movieData: FilteredMovieDataProps[];
  setDailyMovieData: Dispatch<SetStateAction<FilteredMovieDataProps[] | any>>;
  setWeeklyMovieData: Dispatch<SetStateAction<FilteredMovieDataProps[] | any>>;
  filterMovieData: (query: ParsedUrlQuery) => FilteredMovieDataProps[];
}

export const useMovieStore = create<MovieStoreProps>()(
  persist(
    (set, get) => ({
      movieData: [],
      setDailyMovieData: (data: FilteredMovieDataProps[]) =>
        set({ movieData: data }),
      setWeeklyMovieData: (data: FilteredMovieDataProps[]) =>
        set({ movieData: data }),

      filterMovieData: (query: ParsedUrlQuery) => {
        const { id } = query;
        return get().movieData.filter(
          (data: FilteredMovieDataProps) => data.rnum === id
        );
      },
    }),

    {
      name: "movie-items",
      getStorage: () => localStorage,
    }
  )
);
