import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import LikeButton from './LikeButton';
import Header from './Header';
import Clock from './Clock';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isShowHeader: true,
      isShowClock: true
    }
  }
  handleShowOrHideHeader() {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }
  handleSHowOrHideClock() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Title/>
        <hr/>
        <LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}} onClick={() => console.log('click on like button!')}/>
        <hr/>
        <div>
          {this.state.isShowHeader ? <Header/> : null}
          <button onClick={this.handleShowOrHideHeader.bind(this)}>
            {this.state.isShowHeader?'隐藏':'显示'}标题
          </button>
        </div>
        <hr/>
        <div>
          {this.state.isShowClock?<Clock/>:null}
          <button onClick={this.handleSHowOrHideClock.bind(this)}>
            {this.state.isShowClock?"隐藏":"显示"}时钟
          </button>
        </div>
      </div>
    );
  }
}

export default App;