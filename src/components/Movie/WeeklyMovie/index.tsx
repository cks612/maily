import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { NO_IMAGE } from "../../../constant/noImage";
import { FilteredMovieDataProps } from "../../../pages/api/movie";
import ContentTitle from "../../Content/ContentTitle";
import ContentWrapper from "../../Content/ContentWrapper";
import MovieCard from "../MovieCard";

interface DataProps {
  weekData: FilteredMovieDataProps[];
}
const WeeklyMovie = ({ weekData }: DataProps) => {
  return (
    <ContentWrapper>
      <ContentTitle>주간 박스 오피스</ContentTitle>
      <WeekMovieDataContainer>
        {weekData?.map((data: FilteredMovieDataProps) => {
          const { title, genre, openDt, audiAcc, link, image } = data;
          return (
            <>
              <Link href={link ? link : ""} target="_blank" key={Math.random()}>
                <MovieCard
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
