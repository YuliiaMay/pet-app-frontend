import PropTypes from "prop-types";
import icons from "../../images/Icon/Icon.svg";

export const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width || "24px"} height={height || "24px"}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};
