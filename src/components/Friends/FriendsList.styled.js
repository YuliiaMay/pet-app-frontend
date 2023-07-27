import { styled } from "styled-components";

export const Section = styled.div`
  & > h1 {
    display: flex;
    margin-top: 80px;
    margin-bottom: 60px;
    justify-content: center;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  width: 100%;
  margin-bottom: 60px;

  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    column-gap: 32px;
    row-gap: 24px;
  }

  & > li > p {
    flex-grow: 1;
  }
`;
