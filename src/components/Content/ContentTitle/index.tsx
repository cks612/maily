import React from "react";
import { StyledTitle } from "./styles";

interface ChildrenProps {
  children: React.ReactNode;
}

const ContentTitle = ({ children }: ChildrenProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default ContentTitle;
