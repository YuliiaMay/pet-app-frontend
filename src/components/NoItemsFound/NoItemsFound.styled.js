import styled from "styled-components";

const Text = styled.p`
  padding-top: 32px;
  font-size: 24px;
  color: ${(props) => props.theme.color.error};
  text-align: center;
  margin: 0 auto;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    padding: 64px 0;
    font-size: 28px;
  }
`;

export { Text };
