import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");
const DATE = dayjs();

export const formatDate = (type: string) => {
  let newDate = "";
  const dateType = "YYYYMMDD";

  switch (type) {
    case "day":
      newDate = DATE.subtract(1, "d").format(dateType);
      break;
    case "month":
      newDate = DATE.subtract(6, "M").format(dateType);
      break;
    case "year":
      newDate = DATE.endOf("year").format(dateType);
      break;
    case "week":
      newDate = DATE.subtract(7, "d").format(dateType);
  }
  return newDate;
};
