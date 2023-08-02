import { styled } from "styled-components";

export const Span = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
`;

export const Li = styled.li`

  cursor: pointer;
  align-items: center;
  background-color: ${(props) => props.theme.background.lightBlue};
  border-radius: 16px;
  color: ${(props) => props.theme.color.main};
  stroke: ${(props) => props.theme.color.blue};
  display: flex;
  gap: 3px;
  justify-content: center;
  width: 81px;
  height: 28px;
  padding: 0 5px;

  transition: 250ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.background.accentBlue};
    transition: 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
    color: ${(props) => props.theme.color.wight};
    & use {
      stroke: ${(props) => props.theme.color.wight};
      fill: ${(props) => props.theme.color.wight};
    }
  }
`;

export const Info = styled.li`
  /* margin: 0 auto; */
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 24px;
  border-radius: 0 0 40px 40px;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: ${(props) => props.theme.color.wight};

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const Div = styled.div`
  height: 288px;
  display: block;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Div1 = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 12px;
  top: 12px;
`;

export const PP = styled.p`
  align-items: center;
  background-color: ${(props) => props.theme.background.lightBlue};
  border-radius: 0 16px 16px 0;
  color: ${(props) => props.theme.color.main};
  display: flex;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  line-height: 19px;

  width: 126px;
  height: 32px;
`;

export const Div2 = styled.div`
  display: block;
`;

export const Button = styled.button`
  align-items: center;

  background-color: ${(props) => props.theme.background.lightBlue};
  border: none;
  border-radius: 50%;
  color: transparent;
  display: flex;
  height: 40px;
  justify-content: center;
  line-height: 0;
  margin: 0;
  padding: 0;
  width: 40px;
  margin-bottom: 15px;
  fill: #cce4fb;
  &:hover,
  focus {
    background-color: ${(props) => props.theme.background.lightBlue};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover > svg {
    stroke: ${(props) => props.theme.color.blue};
    fill: ${(props) => props.theme.color.blue};
    //  box-shadow: ${(props) => props.theme.color.blue} 0px 2px 8px 0px;
  }
`;

export const Ul = styled.ul`
  bottom: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
  left: 8px;
  list-style: none;
  position: absolute;
  right: 8px;
  padding: 0;
  @media screen and (min-width: 768px) {
    left: 24px;
    right: 24px;

    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    left: 12px;
    right: 12px;

    gap: 12px;
  }
`;
