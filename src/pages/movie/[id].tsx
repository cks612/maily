import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import ContentWrapper from "../../components/Content/ContentWrapper";
import { useMovieStore } from "../../store";

const MovieDetail = () => {
  const router = useRouter();
  const { filterMovieData } = useMovieStore();
  const data = filterMovieData(router.query)[0];

  return (
    <MovieDetailWrapper>
      {data && (
        <>
          <Image
            src={data.image!}
            width={300}
            height={500}
            alt="moviePoster"
            priority
          ></Image>

          <DetailWrapper>
            <ContentContainer>
              <h2>{data.title}</h2>
            </ContentContainer>
            <ContentContainer>
              <ContentTitle>관람연령 :</ContentTitle>
              <span>{data.ratingGrade}</span>
            </ContentContainer>
            <ContentContainer>
              <ContentTitle>장르 :</ContentTitle>
              <span>{data.genre}</span>
            </ContentContainer>
            <ContentContainer>
              <ContentTitle> 개봉일 : </ContentTitle>
              <span>{data.openDt}</span>
            </ContentContainer>
            <ContentContainer>
              <ContentTitle>감독 :</ContentTitle>
              {data.directorNm!.map(data => (
                <span key={Math.random()}>{data}</span>
              ))}
            </ContentContainer>
            <ContentContainer>
              <ContentTitle> 줄거리 :</ContentTitle>
              <span>{data.plot}</span>
            </ContentContainer>
            <ContentContainer>
              <Link href={data.link!} target="_blank">
                링크
              </Link>
            </ContentContainer>
          </DetailWrapper>
        </>
      )}
    </MovieDetailWrapper>
  );
};

export default MovieDetail;

const MovieDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 700px;
  margin: 0 auto;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  font-weight: 700;
  gap: 10px;
  width: 100%;

  span {
    font-size: 0.7em;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    background: #fff;
    color: #000;

    &:hover {
      color: blue;
    }
  }
`;

const ContentTitle = styled.h3`
  display: flex;
  flex: 0 0 20%;
  color: gray;
`;
