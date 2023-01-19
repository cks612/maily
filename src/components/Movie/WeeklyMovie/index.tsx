import React from "react";
import Link from "next/link";
import styled from "styled-components";
import ContentTitle from "@components/Content/ContentTitle";
import ContentWrapper from "@components/Content/ContentWrapper";
import MovieCard from "../MovieCard";
import { NO_IMAGE } from "constant/noImage";
import { FilteredMovieDataProps } from "types";

interface DataProps {
  weekData: FilteredMovieDataProps[];
}
const WeeklyMovie = ({ weekData }: DataProps) => {
  return (
    <ContentWrapper>
      <ContentTitle>주간 박스 오피스</ContentTitle>
      <WeekMovieDataContainer>
        {weekData?.map((data: FilteredMovieDataProps) => {
          const { rnum, title, genre, openDt, audiAcc, link, image } = data;
          return (
            <>
              <Link href={`/movie/${rnum}`} target="_blank" key={Math.random()}>
                <MovieCard
                  rnum={rnum}
                  title={title}
                  genre={genre}
                  openDt={openDt}
                  audiAcc={audiAcc ? parseInt(audiAcc).toLocaleString() : "0"}
                  link={link}
                  image={image ? image : NO_IMAGE}
                />
              </Link>
            </>
          );
        })}
      </WeekMovieDataContainer>
    </ContentWrapper>
  );
};

export default WeeklyMovie;

const WeekMovieDataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;
