import create from "zustand";
import { persist } from "zustand/middleware";
import type { ParsedUrlQuery } from "querystring";
import { FilteredMovieDataProps } from "../pages/api/movie";
import { Dispatch, SetStateAction } from "react";

export interface MovieStoreProps {
  movieData: FilteredMovieDataProps[];
  setDailyMovieData: Dispatch<SetStateAction<FilteredMovieDataProps[] | any>>;
  setWeeklyMovieData: Dispatch<SetStateAction<FilteredMovieDataProps[] | any>>;
}

export const useMovieStore = create<MovieStoreProps>()(
  persist(
    (set, get) => ({
      movieData: [],
      setDailyMovieData: (data: FilteredMovieDataProps[]) =>
        set({ movieData: data }),
      setWeeklyMovieData: (data: FilteredMovieDataProps[]) =>
        set({ movieData: data }),
      // todoData: [],

      // filterToFindTodo: (query: ParsedUrlQuery) => {
      //   const { id } = query;

      //   return get().todoData.filter(
      //     (item: TodoItemProps) => item.data.id === id
      //   );
      // },
    }),

    {
      name: "movie-items",
      getStorage: () => localStorage,
    }
  )
);
