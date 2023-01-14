import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { DataProcessingProps, MovieDataProps } from "../../../pages/api/movie";

const MovieCard = ({
  rank,
  title,
  audiAcc,
  link,
  openDt,
  genre,
  image,
}: DataProcessingProps) => {
  return (
    <CardWrapper>
      <Ranking>{rank}</Ranking>
      <Image src={image!} width={150} height={200} alt="moviePoster" priority />

      <CardContainer>
        <Title>{title}</Title>
        <Description>
          장르 : <span>{genre}</span>
        </Description>
        <Description>
          관객 수 : <span>{audiAcc}</span>
        </Description>
        <Description>
          개봉 : <span>{openDt}</span>
        </Description>
      </CardContainer>
    </CardWrapper>
  );
};

export default MovieCard;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 20px;
  font-size: 1em;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;

  img {
    width: 100%;
    height: auto;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const Title = styled.h2`
  font-size: 0.8em;
  font-weight: 900;
  display: -webkit-box;
  width: 170px;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const Description = styled(Title)`
  font-size: 0.5em;
  font-weight: 900;
  width: 170px;

  span {
    font-size: 0.3em;
    font-weight: 500;
  }
`;

const Ranking = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ae7400;
  top: -10px;
  left: -10px;
  width: 30px;
  height: 30px;
  background: #ffea08;
  border-radius: 50%;
`;
