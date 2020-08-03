import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './img/logo.png';
import MyComp from './pages/Index/MyComp';
import './index.less';

class App extends Component {

  componentWillMount() {
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded结束')
      console.timeEnd()
      console.time()
    })
    window.addEventListener('load', () => {
      console.log('load结束')
      console.timeEnd()
    })
  }

  componentDidMount() {
    console.log('componentDidMount结束')
    // 这个最先打印，说明DidMount在页面DOMContentLoaded之前
  }

  render() {
    return (
      <div>
        <div className="name">你哈基督教</div>
        <img src={logo} alt="" />
        <MyComp></MyComp>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'), () => { console.log(1), console.time() })