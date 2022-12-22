import moment from "moment";

export const getDiffBetweenDates = (firstDate, secondDate, operator) => {

  Math.abs(moment(firstDate).diff(
    moment(secondDate),
    operator
  ));

};
