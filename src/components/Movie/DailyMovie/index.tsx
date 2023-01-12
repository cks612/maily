import React from "react";
import styled from "styled-components";
import { MovieDataProps } from "../../../pages/api/movie";
import ContentTitle from "../../Content/ContentTitle";
import ContentWrapper from "../../Content/ContentWrapper";
import MovieCard from "../MovieCard";

interface DataProps {
  items: MovieDataProps[];
}
const Card = ({ items }: DataProps) => {
  return (
    <ContentWrapper>
      <ContentTitle>일일 박스 오피스</ContentTitle>

      <StyledDailyMovie>
        {items?.map((item: MovieDataProps) => {
          const { movieNm, subtitle, userRating, link, image, rnum } = item;
          return (
            <MovieCard
              key={rnum}
              rnum={rnum}
              movieNm={movieNm}
              subtitle={subtitle}
              userRating={userRating}
              link={link}
              image={image}
            />
          );
        })}
      </StyledDailyMovie>
    </ContentWrapper>
  );
};

export default Card;

const StyledDailyMovie = styled.div`
  display: -webkit-box;
  gap: 50px;
`;

// poster, title, rating, subtitle
