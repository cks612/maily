import Link from "next/link";
import React from "react";
import styled from "styled-components";

const GNB_MENU = [
  { id: 1, label: "로그인", url: "/login" },
  { id: 2, label: "영화", url: "/movie" },
  { id: 4, label: "FAQ", url: "/faq" },
];

const Gnb = () => {
  return (
    <StyledWrapper>
      <GnbTitle>Maily</GnbTitle>
      <StyledMenu>
        {GNB_MENU.map(menu => {
          const { id, label, url } = menu;
          return (
            <Link key={id} href={url}>
              <span>{label}</span>
            </Link>
          );
        })}
      </StyledMenu>
    </StyledWrapper>
  );
};

export default Gnb;

const StyledWrapper = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px 30px;
`;

const GnbTitle = styled.h1`
  font-size: 1em;
  color: #fff;
`;

const StyledMenu = styled.h3`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 50px;

  span {
    color: #fff;
    font-size: 0.75em;

    &:hover {
      color: gray;
    }
  }
`;
