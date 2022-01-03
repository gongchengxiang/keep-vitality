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
// 检查本地数据，看哪天没锻炼，补齐数据，打上标记
// 本地数据结果 [{date: 1641021901368, status: xxx},...]
// status
// KEEP: 'KEEP',
// KEEPING: 'KEEPING',
// KEEPED: 'KEEPED'
export const badDayCheck = () => {

}