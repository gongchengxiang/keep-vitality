import React from 'react';
import {localData, getEmoji, autoCompleteData, isToday} from './util';
import {emoji, statusMap} from './const';
import List from './List';
import './App.scss';

class App extends React.Component {
    emoji = emoji;
    statusMap = statusMap;
    state = {
        keepList: autoCompleteData(localData.get()),
        status: 'KEEP',
        headEmojis: getEmoji(3)
    };
    refreshData = () => {
        const keepList = localData.get();
        const getEmojiNumRandom = () => Number(Math.random() * 5  + 1).toFixed(0);
        this.setState({
            keepList,
            headEmojis: getEmoji(getEmojiNumRandom())
        });
    };
    KeepTouchStart = () => {
        const {touching} = this.state;
        !touching && this.setState({
            touching: true,
            status: 'KEEPING'
        });
    };
    KeepTouchEnd = () => {
        const {keepList} = this.state;
        const head = keepList[0];
        if (isToday(head.date)) {
            head.count = Number(head.count) + 1;
            head.date = new Date().getTime();
        } else {
            keepList.unshift({
                date: new Date().getTime(),
                count: 1
            });
        }
        this.setState({
            keepList,
            touching: false,
            status: 'KEEPED'
        }, () => {
            localData.set(this.state.keepList);
        });
    };
    render() {
        return (
            <div className="keep-app">
                <header>
                    Life is wonderful !
                    <span className="emoji" onClick={this.refreshData}>{this.state.headEmojis}</span>
                </header>
                <div className="keep-btn">
                    <span
                        className={this.state.touching ? 'btn touching' : 'btn'}
                        onTouchStart={this.KeepTouchStart}
                        onTouchEnd={this.KeepTouchEnd}
                    >
                        {this.statusMap[this.state.status]}
                    </span>
                </div>
                <List data={this.state.keepList}/>
            </div>
        );
    };
}

export default App;