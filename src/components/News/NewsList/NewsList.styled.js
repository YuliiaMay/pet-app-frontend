import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 44px;
  margin-top: 44px;
  margin-bottom: 20px;
  align-items: center;
  flex-grow: 1;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 46px;
    margin-top: 80px;
  }
`;

export const WrapperPagination = styled.div`
  display: inline-flex;
  justify-content: center;

  align-items: center;
  width: 100%;

  /* margin: 0 auto; */
  margin-top: 60px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    /* justify-content: center; */

    /* width: 357px; */
    width: 100%;
  }
`;
