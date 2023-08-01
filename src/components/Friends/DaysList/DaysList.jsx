import PropTypes from "prop-types";
import { useState } from "react";
import { Box, Container, DateBox, List } from "./DaysList.style";

export const DaysList = ({ workDays }) => {
  const [isOpen, setIsOpen] = useState(false);
  const firstDay = workDays[0];

  const handleToggleList = () => {
    setIsOpen(!isOpen);
  };

  const daysOfWeek = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

  return (
    <Container>
      {firstDay.from === "" && firstDay.to === "" ? (
        <Box>
          <p>Time:</p>
          <span>day and night</span>
        </Box>
      ) : (
        <DateBox
          onClick={handleToggleList}
          style={{ color: isOpen ? "#54ADFF" : "#111111" }}
        >
          <p>Time:</p>
          <span>
            {firstDay.from} - {firstDay.to}
          </span>
        </DateBox>
      )}

      {isOpen && (
        <List>
          {workDays.map((day, index) => (
            <li key={index}>
              <span> {daysOfWeek[index]}</span> {day.from} - {day.to}
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};

DaysList.propTypes = {
  workDays: PropTypes.array.isRequired,
};
