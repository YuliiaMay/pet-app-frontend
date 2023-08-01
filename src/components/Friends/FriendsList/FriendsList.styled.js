import { styled } from "styled-components";

export const Section = styled.div`
  & > h1 {
    display: flex;
    font-size: 24px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 24px;
    justify-content: center;

    @media screen and (min-width: 768px) {
      font-size: 48px;
      margin-top: 80px;
      margin-bottom: 40px;
    }

    @media screen and (min-width: 1280px) {
      margin-bottom: 60px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 75px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 69px;
    gap: 32px;
  }
`;
