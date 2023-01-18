import React from "react";
import { fetcher } from "../lib/fetcher";
import { GetStaticProps } from "next";
import { SWRConfig, unstable_serialize } from "swr";
import MainPage from "../components/page/Main";

export default function Home({ fallback }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <MainPage />
    </SWRConfig>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const urlOption = ["searchDailyBoxOfficeList", "searchWeeklyBoxOfficeList"];

  const dailyInitialData = await fetcher([
    "http://localhost:3000/api/movie",
    urlOption[0],
  ]);
  const weeklyInitialData = await fetcher([
    "http://localhost:3000/api/movie",
    urlOption[1],
  ]);

  return {
    props: {
      fallback: {
        // unstable_serialize()에 배열 스타일의 키
        [unstable_serialize(["/api/movie", urlOption[0]])]: dailyInitialData,
        [unstable_serialize(["/api/movie", urlOption[1]])]: weeklyInitialData,
      },
    },
  };
};
