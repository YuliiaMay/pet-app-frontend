import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 24px;
  margin-left: 16px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    font-size: 28px;
    margin-left: 0;
  }
`;
