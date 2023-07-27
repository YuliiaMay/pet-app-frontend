import styled from "styled-components";

// export const WrapperModal = styled.div`
//   width: 280px;
//   display: flex;
//   padding: 45px 20px 16px 20px;
//   flex-direction: column;

//   @media screen and (min-width: 768px) {
//     width: 681px;
//     min-height: 540px;
//     padding: 32px 32px 24px 32px;
//     justify-content: space-between;
//   }
// `;
export const CloseIcon = styled.div`
  margin-left: auto;
  text-align: right;
  margin-top: 24px;
  padding-right: 24px;
`;

export const Wrapper = styled.div`
  width: 608px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h2 {
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 700;
  }

  & p {
    text-align: center;
    font-weight: 500;
    line-height: 1.4;
    width: 393px;
  }

  & span {
    font-weight: 700;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 17px;
  margin-top: 48px;
`;

export const CloseBtn = styled.button`
  padding: 8px 20px;
  border: 1px solid #54adff;
  border-radius: 40px;
  font-weight: 700;
  color: #54adff;
  width: 130px;
`;

export const YesBtn = styled.button`
  padding: 8px 20px;
  background-color: #54adff;
  border-radius: 40px;
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 130px;
`;
export const DeleteIcon = styled.div``;
