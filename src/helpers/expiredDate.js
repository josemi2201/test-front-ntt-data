import { getDiffBetweenDates } from "./time";

const TIME_TO_UPDATE = 1;
const TIME_OPERATOR = "hours";

export const validateExpiredDate = (object, condition) => {

  const updateAt = object
    ? object.updateAt
    : null;


  const diffHours = getDiffBetweenDates(
    updateAt,
    new Date(),
    TIME_OPERATOR
  );

  return diffHours >= TIME_TO_UPDATE ||
    !updateAt ||
    condition;

};
