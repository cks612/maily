import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <StyledContainer>
        <h2>main</h2>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  padding: 30px 30px;
`;
