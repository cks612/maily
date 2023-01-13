import React from "react";
import MainPage from "../components/page/Main";
import { fetcher } from "../lib/fetcher";
import { GetStaticProps } from "next";
import { SWRConfig, unstable_serialize } from "swr";

export default function Home({ fallback }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <MainPage />
    </SWRConfig>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const urlOption = "searchDailyBoxOfficeList";

  const homeInitialData = await fetcher([
    "http://localhost:3000/api/movie",
    urlOption,
  ]);

  return {
    props: {
      fallback: {
        // unstable_serialize()에 배열 스타일의 키
        [unstable_serialize(["/api/movie", urlOption])]: homeInitialData,
      },
    },
  };
};
