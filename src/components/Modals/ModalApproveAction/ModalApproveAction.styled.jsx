import styled from "styled-components";

export const WrapperModal = styled.div`
  width: 280px;
  min-height: 302px;

  display: flex;
  padding: 45px 20px 16px 20px;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    width: fit-content;
    padding: 32px 32px 24px 32px;
    margin: 0 auto;
  }
`;

export const CloseIcon = styled.div`
  width: 24px;
  height: 24px;

  position: absolute;

  right: 18px;
  top: 18px;

  transition: 0.5s;

  color: #54adff;
  cursor: pointer;
  use {
    padding: 10px;
  }
  :hover {
    use {
      fill: #3cd95b;
      stroke: #3cd95b;
    }
  }
  @media screen and (min-width: 768px) {
    right: 24px;
    top: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: center;
    letter-spacing: 1.44px;
  }
`;

export const WrapperBtn = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 17px;
  }
`;

export const CancelBtn = styled.button`
  margin-bottom: 8px;

  width: 100%;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  font-size: 16px;
  color: #54adff;

  letter-spacing: 0.64px;

  border-radius: 40px;

  background: #ffffff;
  border: 2px solid #54adff;
  &:hover {
    background: #54adff;
    color: #fef9f9;

    & use {
      fill: #54adff;
      stroke: #54adff;
    }
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  font-size: 16px;

  letter-spacing: 0.64px;

  border-radius: 40px;
  color: #fef9f9;
  background: #54adff;

  border: 2px solid #54adff;
  &:hover {
    background: #ffffff;
    color: #54adff;

    & use {
      fill: #54adff;
      stroke: #54adff;
    }
  }
  & svg {
    margin-left: 8px;
  }
`;
