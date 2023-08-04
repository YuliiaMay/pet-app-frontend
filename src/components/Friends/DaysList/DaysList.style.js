import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-weight: 400;
  }
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  & > span {
    font-weight: 400;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: ${(props) => props.theme.color.blue};
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  width: 90px;
  top: 100%;
  left: 0;
  padding: 8px;
  border: 1px solid #54adff;
  border-radius: 8px;
  background-color: ${(props) => props.theme.background.wight};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  z-index: 1;

  @media screen and (min-width: 1280px) {
    width: 102px;
    padding: 12px;
  }

  & > li {
    display: flex;
    font-size: 10px;
    font-weight: 500;
    justify-content: flex-start;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (min-width: 1280px) {
      font-size: 12px;
      width: 102px;
    }
  }

  & > li > span {
    font-size: 10px;
    font-weight: 500;
    width: 15px;
    margin-right: 9px;

    @media screen and (min-width: 1280px) {
      font-size: 12px;
      margin-right: 12px;
    }
  }
`;
