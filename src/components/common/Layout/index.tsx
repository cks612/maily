import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Gnb from "../Gnb";

type ChildrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <StyledLayout>
      <Gnb />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  position: relative;
  width: 100%;

  margin: 0 auto;
`;
