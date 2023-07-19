import { createGlobalStyle } from "styled-components";

import RegularWoff from '../fonts/Manrope-Regular.woff';
import RegularWoff2 from '../fonts/Manrope-Regular.woff2';
import MediumWoff from '../fonts/Manrope-Medium.woff';
import MediumWoff2 from '../fonts/Manrope-Medium.woff2';
import SemiBoldWoff from '../fonts/Manrope-Regular.woff';
import SemiBoldWoff2 from '../fonts/Manrope-SemiBold.woff2';
import BoldWoff from '../fonts/Manrope-Regular.woff';
import BoldWoff2 from '../fonts/Manrope-Regular.woff2';
import ExtraBoldWoff from '../fonts/Manrope-Regular.woff';
import ExtraBoldWoff2 from '../fonts/Manrope-Regular.woff2';




export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Manrope';
        src: 
            local('Manrope'), 
            url(${RegularWoff}) format('woff'),
            url(${RegularWoff2}), format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Manrope';
        src: 
            local('Manrope'), 
            url(${MediumWoff}) format('woff'),
            url(${MediumWoff2}), format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Manrope';
        src: 
            local('Manrope'), 
            url(${SemiBoldWoff}) format('woff'),
            url(${SemiBoldWoff2}), format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Manrope';
        src: 
            local('Manrope'), 
            url(${BoldWoff}) format('woff'),
            url(${BoldWoff2}), format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Manrope';
        src: 
            local('Manrope'), 
            url(${ExtraBoldWoff}) format('woff'),
            url(${ExtraBoldWoff2}), format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`