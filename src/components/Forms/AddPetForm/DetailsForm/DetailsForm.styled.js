import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  margin-top: 16px;
`;

export const Label = styled.label`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: ${(props) => props.theme.border.radius};
  border: ${(props) => props.theme.border.blue};
  margin-top: 4px;
  margin-bottom: 20px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.color.grey};

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    padding: 12px 16px;
  }
`;
