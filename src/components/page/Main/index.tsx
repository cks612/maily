import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "../../../lib/fetcher";
import Card from "../../Movie/DailyMovie";

const MainPage = () => {
  const urlOption = "searchDailyBoxOfficeList";
  const { data, error } = useSWR(["/api/movie", urlOption], fetcher);
  console.log(data);
  // const { cache } = useSWRConfig();
  // console.log(cache);
  return (
    <StyledContainer>
      {/* component */}
      <StyledMainVideo>
        <StyledVideoTitle>
          <h2>영화로 채우는 하루의 노곤함</h2>
          <p>Movie + Daily</p>
        </StyledVideoTitle>

        <video autoPlay muted loop playsInline width="100%">
          <source src="/video/mainVideo.mp4" type="video/mp4" />
        </video>

        {/* component */}
        <InputWrapper>
          <InputContainer>
            <SearchInput placeholder="영화 찾기" />
            <FontAwesomeIcon className="spinner" icon={faSearch} size="2x" />
          </InputContainer>
        </InputWrapper>
      </StyledMainVideo>

      <Card items={data} />

      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
      <h2>main</h2>
    </StyledContainer>
  );
};

export default MainPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;
  /* padding: 20px 30px; */
`;

const StyledMainVideo = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const StyledVideoTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 35%;
  line-height: 40px;
  color: #fff;
  animation: smoothAppear 5s;

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1.5em;
  }

  @keyframes smoothAppear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 100px;
  animation: smoothAppear 5s;

  @keyframes smoothAppear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 20px 20px;
  border-radius: 15px;
  background: #fff;
  color: #000;
`;

const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  color: #000;
  font-size: 1.3em;
`;
