import { RotatingTriangles } from "react-loader-spinner";
import { LoaderContainer } from "./loader.styled";

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingTriangles
        visible={true}
        height="100"
        width="100"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
        colors={["#54ADFF", "#CCE4FB", "#FFC107"]}
      />
    </LoaderContainer>
  );
};
