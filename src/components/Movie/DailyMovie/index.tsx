import React from "react";
import styled from "styled-components";
import { MovieDataProps } from "../../../pages/api/movie";
import ContentTitle from "../../Content/ContentTitle";
import ContentWrapper from "../../Content/ContentWrapper";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NO_IMAGE } from "../../../constant/noImage";

interface DataProps {
  items: MovieDataProps[];
}

const Card = ({ items }: DataProps) => {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <ContentWrapper>
      <ContentTitle>일일 박스 오피스</ContentTitle>

      <StyledDailyMovie>
        <StyledSlider {...settings}>
          {items?.map((item: MovieDataProps) => {
            const { movieNm, subtitle, userRating, link, image, rnum } = item;
            return (
              <MovieCard
                key={rnum}
                rnum={rnum}
                movieNm={movieNm}
                subtitle={subtitle ? subtitle : "정보가 없습니다"}
                userRating={userRating ? userRating : "평점이 없습니다"}
                link={link}
                image={image ? image : NO_IMAGE}
              />
            );
          })}
        </StyledSlider>
      </StyledDailyMovie>
    </ContentWrapper>
  );
};

export default Card;

const StyledDailyMovie = styled.div`
  height: 450px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 10px 5px;
    margin: 0 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }
`;
