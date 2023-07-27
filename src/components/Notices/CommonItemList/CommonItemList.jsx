import PropTypes from "prop-types";
import icons from "../../../images/Icon/Icon.svg";

import { Span, Li } from "./CommonItemList.styled";

export const CommonItemList = ({
  iconName,
  width,
  height,
  stroke,
  fill,
  children,
}) => {
  return (
    <>
      <Li>
        <svg width={width || "24px"} height={height || "24px"}>
          <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
        </svg>
        <Span>{children}</Span>
      </Li>
    </>
  );
};

CommonItemList.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  children: PropTypes.string,
};
