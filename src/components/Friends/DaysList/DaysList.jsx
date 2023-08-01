import PropTypes from "prop-types";

export const DaysList = ({ workDays }) => {
  console.log(workDays);
  return (
    <>
      {/* {workDays.map(({ isOpen, from, to }) => (
        <>
          <p>
            {from}-{to}
          </p>
        </>
      ))} */}
    </>
  );
};

DaysList.propTypes = {
  workDays: PropTypes.array.isRequired,
};
