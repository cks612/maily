import React from "react";
import { StyledContainer } from "./styles";

interface ChildrenProps {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: ChildrenProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ContentWrapper;
