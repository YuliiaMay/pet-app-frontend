import styled from "styled-components";

// const breakpoints = [320, 768, 1280];
// const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const ResponsiveContainer = styled.div`
  // mobile
  @media screen and (min-width: 320px) {
    margin: 0 auto;
    padding: 0 20px;
  }

  // tablet
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    
  }

  // desktop
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
