import moment from "moment"

export const getDiffBetweenDates = (firstDate, secondDate, operator) => {
  return Math.abs(moment(firstDate).diff(moment(secondDate), operator))
}