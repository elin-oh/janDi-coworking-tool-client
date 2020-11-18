
//특정 날짜 구하기
// var lastDate = new Date(2019, 2, 0).getDate();
// console.log(lastDate); 그달의 마지막날을 알수 있다.


//작년의 금주에 해당되는 일요일 날짜 구하기
function setStartDay() {
  //오늘날짜구하기
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  let endDate = `${year}-${month}-${date}`;

  year--;

  //작년의 일요일
  let lastYearToday = new Date(`${year}-${month}-${date}`);
  let day = lastYearToday.getDay();

  while (day > 0) {
    day--;
    if (date > 1) {
      date--;
    } else {
      month--;
      date = new Date(year, month, 0).getDate();
    }
  }
  let startDate = `${year}-${month}-${date}`;

  return [startDate, endDate];
}

let dayList = [];
let [startDate, endDate] = setStartDay();

//각달의 마지막 Date 구하기
for (let i = 0; i < 12; i++) {
  let start = new Date(startDate);
  let year = start.getFullYear();
  let month = start.getMonth() + 1 + i;

  if (month > 12) {
    month = month - 12;
    year++;
  }
  let lastDate = new Date(year, month, 0).getDate();
  dayList.push(lastDate);
}

console.log(dayList)

export const generateJandi = function () {
  let totalDayList = [];
  let start = new Date(startDate);
  let year = start.getFullYear();
  let month = start.getMonth() + 1;
  let date = start.getDate();

  let pointer = 0;
  totalDayList.push(`${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`);
  while (endDate !== `${year}-${month}-${date}`) {
    if (date >= dayList[pointer]) {
      if (month >= 12) {
        year++;
        month = 1;
        date = 1;
      } else {
        month++;
        date = 1;
      }
      pointer++;
    } else {
      date++;
    }
    totalDayList.push(`${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`);
  }
  return totalDayList;
}
