import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 16px 0;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 32px 32px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 20px 20px 0;
  }
`;
