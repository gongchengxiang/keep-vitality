import {getDateTime, isToday, getEmoji} from './util';

export default function List(props) {
    const {data = []} = props;
    const getClassName = (item) => {
      if (isToday(item.date) && !item.count) {
        return 'today'
      } else {
        return item.count ? 'keeped' : 'lose';
      }
    };
    const getEmojiStr = (n) => {
      if (n <= 5) {
        return getEmoji(n);
      } else {
        return getEmoji(5).join('') + ` ...(${n})`;
      }
    };
    return (
        <ul className="list">
            {data.map(item => (
                <li className="list-item" key={item.date}>
                    <span className={getClassName(item)}>{getDateTime(item.date)}</span>
                    {!!item.count && <span className="icon">{getEmojiStr(item.count)}</span>}
                    {isToday(item.date) && !item.count && <span className="icon">(*￣∇￣*)</span>}
                    {!item.count && !isToday(item.date) && <span className="icon">💩</span>}
                </li>
            ))}
        </ul>
    );
}