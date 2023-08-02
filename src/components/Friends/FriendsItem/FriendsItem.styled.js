import { styled } from "styled-components";

export const Item = styled.li`
  width: 256px;
  padding: 16px 12px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  background-color: ${(props) => props.theme.background.wight};

  @media screen and (min-width: 768px) {
    width: 312px;
  }

  @media screen and (min-width: 1280px) {
    width: 371px;
  }
`;

export const TitleBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  & > a {
    display: inline-block;
    justify-content: center;
    color: ${(props) => props.theme.color.blue};
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: ${(props) => props.theme.color.yellow};
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 100px;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
      width: 124px;
      margin-right: 20px;
    }

    @media screen and (min-width: 1280px) {
      width: 146px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: column;

  & > span {
    font-size: 12px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }

  & > span > p {
    font-size: 12px;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 16px;
    }
  }
`;

export const Link = styled.a`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${(props) => props.theme.color.blue};
  }
`;
