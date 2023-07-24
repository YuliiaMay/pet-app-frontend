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
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 479px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const FormSearch = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 608px;

  @media (max-width: 479px) {
    width: 280px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  color: ${(props) => props.theme.color.grey};

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.56px;
    padding: 14px 20px;
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  right: ${(props) => (props.position ? "47px" : "20px")};

  @media (max-width: 480px) {
    right: ${(props) => (props.position ? "37px" : "13px")};
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
