import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 320px) {
    margin-top: 40px;
  }
`;

export const TitleSearch = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;

export const FormSearch = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 280px;

  @media (min-width: 768px) {
    width: 608px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.56px;
  padding: 14px 20px;
  border-radius: 20px;
  border: transparent;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: ${(props) => props.theme.color.grey};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: transparent;
    box-shadow: ${(props) => props.theme.color.blue} 0px 2px 8px 0px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.8px;
    padding: 10px 20px;
  }
`;

export const ButtonSearch = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  right: ${(props) => (props.position ? "37px" : "13px")};
  @media (min-width: 768px) {
    right: ${(props) => (props.position ? "47px" : "20px")};
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 13px;
  border: none;
  background-color: inherit;
`;
