import styled from "styled-components";

export const Bar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    gap: 16px;
    margin-bottom: 40px;
  }
`;

export const OptionStepTitle = styled.h2`
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 12px;
  color: ${(props) => {
    if (props.$formStage === 1) {
      return props.theme.color.blue;
    } else if (props.$formStage > 1 || props.$formStage === "success") {
      return props.theme.color.success;
    }
  }};

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    font-size: 16px;
  }
`;

export const OptionIndication = styled.div`
  width: 80px;
  height: 8px;
  border-radius: 8px;
  margin-top: 12px;
  background-color: ${(props) => {
    if (props.$formStage === 1) {
      return props.theme.background.blue;
    } else if (props.$formStage > 1 || props.$formStage === "success") {
      return props.theme.background.success;
    }
  }};

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 120px;
  }
`;

export const DetailsStep = styled.div``;

export const DetailsStepTitle = styled.h2`
  font-size: 10px;
  font-weight: 500;
  color: ${(props) => {
    if (props.$formStage === 2) {
      return props.theme.color.blue;
    } else if (props.$formStage > 2 || props.$formStage === "success") {
      return props.theme.color.success;
    } else {
      return props.theme.color.grey;
    }
  }};

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    font-size: 16px;
  }
`;

export const DetailsIndication = styled.div`
  width: 80px;
  height: 8px;
  border-radius: 8px;
  margin-top: 12px;
  background-color: ${(props) => {
    if (props.$formStage === 2) {
      return props.theme.background.blue;
    } else if (props.$formStage > 2 || props.$formStage === "success") {
      return props.theme.background.success;
    } else {
      return props.theme.background.lightBlue;
    }
  }};

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 120px;
  }
`;

export const MoreInfoStep = styled.div``;

export const MoreInfoStepTitle = styled.h2`
  font-size: 10px;
  font-weight: 500;
  color: ${(props) => {
    if (props.$formStage === 3) {
      return props.theme.color.blue;
    } else if (props.$formStage === "success") {
      return props.theme.color.success;
    } else {
      return props.theme.color.grey;
    }
  }};

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    font-size: 16px;
  }
`;

export const MoreInfoIndication = styled.div`
  width: 80px;
  height: 8px;
  border-radius: 8px;
  margin-top: 12px;
  background-color: ${(props) => {
    if (props.$formStage === 3) {
      return props.theme.background.blue;
    } else if (props.$formStage === "success") {
      return props.theme.background.success;
    } else {
      return props.theme.background.lightBlue;
    }
  }};

  @media screen and (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 120px;
  }
`;
