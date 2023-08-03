import styled from "styled-components";

const Text = styled.p`
  padding-top: 32px;
  font-size: 24px;
  color: ${(props) => props.theme.color.yellow};
  text-align: center;

  opacity: 0.3;

  @media screen and (min-width: 768px){
    padding: 64px 0;
    font-size: 28px;
  }
`;

export { Text };
