import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { MovieDataProps } from "../../../pages/api/movie";

const MovieCard = ({
  rnum,
  movieNm,
  subtitle,
  userRating,
  link,
  image,
}: MovieDataProps) => {
  return (
    <CardWrapper>
      <Ranking>{rnum}</Ranking>
      <Image src={image!} width={130} height={200} alt="moviePoster" priority />
      <Title>{movieNm}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Rating>평점 : {userRating}</Rating>
    </CardWrapper>
  );
};

export default MovieCard;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px 20px;
  font-size: 1em;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;

  img {
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: 0.7em;
  font-weight: 900;
  text-align: center;
  display: -webkit-box;
  width: 120px;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const SubTitle = styled.h3`
  font-size: 0.5em;
  text-align: center;
  display: -webkit-box;
  width: 120px;
  overflow: hidden;
  vertical-align: top;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const Rating = styled.p`
  font-size: 0.3em;
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
