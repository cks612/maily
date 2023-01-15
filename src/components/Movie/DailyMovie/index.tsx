import React from "react";
import styled from "styled-components";
import { DataProcessingProps } from "../../../pages/api/movie";
import ContentTitle from "../../Content/ContentTitle";
import MovieCard from "../MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NO_IMAGE } from "../../../constant/noImage";

interface DataProps {
  items: DataProcessingProps[];
}

const Card = ({ items }: DataProps) => {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <CardWrapper>
      <ContentTitle>일일 박스 오피스</ContentTitle>

      <StyledDailyMovie>
        <StyledSlider {...settings}>
          {items?.map((item: DataProcessingProps) => {
            const { title, audiAcc, link, image, rank, genre, openDt } = item;
            return (
              <MovieCard
                key={Math.random()}
                rank={rank}
                title={title}
                genre={genre}
                openDt={openDt}
                audiAcc={audiAcc ? parseInt(audiAcc).toLocaleString() : "0"}
                link={link}
                image={image ? image : NO_IMAGE}
              />
            );
          })}
        </StyledSlider>
      </StyledDailyMovie>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 450px;
  padding: 20px 20px;
`;

const StyledDailyMovie = styled.div`
  height: 100%;
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
