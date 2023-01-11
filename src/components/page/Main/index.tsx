import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StyledContainer>
      <StyledMainVideo>
        <StyledVideoTitle>
          <h2>영화로 채우는 하루의 노곤함</h2>
          <p>Movie + Daily</p>
        </StyledVideoTitle>

        <video autoPlay muted loop playsInline width="100%">
          <source src="/video/mainVideo.mp4" type="video/mp4" />
        </video>
      </StyledMainVideo>
      <h2>main</h2>
    </StyledContainer>
  );
};

export default MainPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  overflow: hidden;
  /* padding: 20px 30px; */
`;

const StyledMainVideo = styled.div`
  width: 100%;
  height: 500px;
`;

const StyledVideoTitle = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
