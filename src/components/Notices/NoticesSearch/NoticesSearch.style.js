import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  align-items: center;
`;

export const TitleSearch = styled.h2`
  font-size: 48px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 40px;
`;

export const FormSearch = styled.form`
  display: flex;
  position: relative;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 608px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  border-radius: 20px;
  border: transparent;
  padding: 10px 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  /* box-shadow: ${(props) => props.theme.border.shadow};
  color: ${(props) => props.theme.color.yellow}; */
  &:focus {
    outline: none;
  }
`;

export const ButtonSearch = styled.button`
  position: absolute;
  right: 20px;
  border: none;
  background-color: inherit;
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 20px;
  border: none;
  background-color: inherit;
`;
