import PropTypes from "prop-types";

import { Text } from "./NoItemsFound.styled";

const NoItemsFound = ({ text }) => {
  return <Text>{text}</Text>;
};

export default NoItemsFound;

NoItemsFound.propTypes = {
  text: PropTypes.string,
};
