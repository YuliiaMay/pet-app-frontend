/** @format */

import styled from "styled-components";

export const UserPageContainer = styled.div`

  min-width: ${(props) => props.theme.sizes.desk};
  padding: 20px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    min-width:${(props) => props.theme.sizes.tab};
    max-width:${(props) => props.theme.sizes.desk};
  }

  @media (min-width: ${(props) => props.theme.sizes.mobile}) {
    min-width:${(props) => props.theme.sizes.mobile};
    max-width:${(props) => props.theme.sizes.tab};
  }
`;

export const UserCardInfo = styled.div`
  background-color: ${(props) => props.theme.background.wight};
`;

export const PetCardInfo = styled.div`
  background-color: ${(props) => props.theme.background.wight};
`;