import React from 'react';
import {localData} from './util';
import './App.scss';


function List(props) {
    const {data = []} = props;
    return (
        <ul className="list">
            {data.map(keeped => (
                <li className="list-item" key={keeped.date}>
                    <span>{keeped.date}</span>
                    {/* <span>补签1</span> */}
                    <span className="icon">🙄</span>
                </li>
            ))}
        </ul>
    );
}

class App extends React.Component {
    emoji = [
        '😆','😅','🙃','😉','😇','😀','😀','😉','😊','😁','🤕',
        '🤣','😜','🙃','😄','☺️','🤑','🤓','😎','🙄','🤔','🤗',
        '😌','😆','😇','😳','😞','😟','😠','😕','☹️','🙄','😭',
        '😰','🤢','😢','😫','😦','😲','😯','🤥','🤧','🤐','🤒'
    ]
    statusMap = {
        KEEP: 'KEEP',
        KEEPING: 'KEEPING',
        KEEPED: 'KEEPED'
    }
    state = {
        // keepList: localData.get(),
        keepList: [{date: '2021-01-03'},{date: '2021-01-02'},{date: '2021-01-01'}],
        status: 'KEEP'
    }
    getEmoji = () => {
        const getRandomIndex = () => Number(Math.random() * (this.emoji.length - 1)).toFixed(0);
        const emojis = [];
        while (emojis.length < 3) {
            emojis.push(this.emoji[getRandomIndex()])
        }
        return emojis;
    }
    refreshEmoji = () => {
        this.setState({});
    }
    keep = () => {
        // const {status, keepList} = this.state;
        // if (status === 'KEEP') {
        // } else if () {

        // } else if () {
            
        // }
    }
    render() {
        const emojis = this.getEmoji();
        return (
            <div className="keep-app">
                <header>
                    Life is wonderful !
                    <span className="emoji" onClick={this.refreshEmoji}>{emojis}</span>
                </header>
                <div className="keep-btn">
                    <span className="btn" onClick={this.keep}>
                        {this.statusMap[this.state.status]}
                    </span>
                </div>
                <List data={this.state.keepList}/>
            </div>
        );
    }
}

export default App;