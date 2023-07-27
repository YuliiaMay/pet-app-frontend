import { styled } from "styled-components";

export const Item = styled.li`
  width: 370px;
  height: 287px;
  padding: 16px 12px;
  border-radius: 40px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  & > a > h2 {
    color: ${(props) => props.theme.color.blue};
    text-align: center;
    margin-bottom: 16px;
  }

  & > a > p {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 146px;
    margin-right: 20px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 206px;
  gap: 12px;
  flex-wrap: wrap;
  flex-direction: column;

  & > span {
    font-size: 16px;
    font-weight: 600;
  }

  & > span > p {
    font-size: 16px;
    font-weight: 400;
  }
`;
