import {emoji} from './const';

// 获取和设置每日锻炼结果，本地数据持久化
export const localData =  {
  get: () => {
      try {
          const listStr = localStorage.getItem('gcx-keep');
          const list = JSON.parse(listStr);
          return Array.isArray(list) ? list : [];
      } catch (error) {
          localStorage.setItem('gcx-keep', '');
          return [];
      }
  },
  set: (data) => {
      try {
          if (Array.isArray(data)) {
              const listStr = JSON.stringify(data);
              localStorage.setItem('gcx-keep', listStr);
              return true;
          } else {
              return false;
          }
      } catch (error) {
          return false;
      }
  }
}
// 年月日
export const getDateTime = (time, type = 'date') => {
    const date = time ? new Date(time) : new Date();
    const year = `${date.getFullYear()}`;
    const month = date.getMonth() + 1 > 9 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
    const day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`;
    const dateStr = `${year}-${month}-${day}`;
    if (type === 'datetime') {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return dateStr + ` ${hours}:${minutes}:${seconds}`
    } else {
        return dateStr;
    }
}
export const isToday = (date) => {
    return getDateTime() === getDateTime(date)
}
export const autoCompleteData = (list = []) => {
    const initTime = new Date(2022, 0, 1, 0, 0, 0, 0);
    const today = getDateTime();
    const completeDateList = [];
    let day = initTime;
    while(!completeDateList.includes(today)) {
        completeDateList.unshift(getDateTime(day));
        day = new Date(day.setDate(day.getDate() + 1));
    }
    const completeDataList = completeDateList.map(day => {
        const target = list.find(e => getDateTime(e.date) === day);
        const date = target ? target.date : new Date(day).getTime();
        const count = target ? target.count : 0;
        return {date, count};
    });
    console.log(completeDataList)
    return completeDataList;
}
// 获取指定个数的emoji
export const getEmoji = (n) => {
    const getRandomIndex = () => Number(Math.random() * (emoji.length - 1)).toFixed(0);
    const emojis = [];
    while (emojis.length < n) {
        emojis.push(emoji[getRandomIndex()])
    }
    return emojis;
};