import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 32px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 20px;
  }
`;
