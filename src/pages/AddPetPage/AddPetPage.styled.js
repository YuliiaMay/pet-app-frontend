import styled from 'styled-components';
import bgrMob1 from "../../images/backgraund/bg-mob@1x.png";
import bgrMob2 from "../../images/backgraund/bg-mob@2x.png";
import bgrTab1 from "../../images/backgraund/bg-tab@1x.png";
import bgrTab2 from "../../images/backgraund/bg-tab@2x.png";
import bgrDesk1 from "../../images/backgraund/bg-des@1x.png";
import bgrDesk2 from "../../images/backgraund/bg-des@2x.png";


export const Overlay = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;    
    background-image: url(${bgrMob1});

    @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
        background-image: url(${bgrMob2});
    }

    //Tablet hero-img
    @media screen and (min-width: 768px) {
        max-width: 768px;
        background-image: url(${bgrTab1});

        @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
                background-image: url(${bgrTab2});
            }
    }

    //Desktop hero-img
    @media screen and (min-width: 1200px) {
        background-image: url(${bgrDesk1});
        height: 600px;
        max-width: 1600px;

        @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${bgrDesk2});
        }
    }
`