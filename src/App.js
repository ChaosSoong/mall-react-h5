import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>
          <Link to="/login">登录</Link>
        </Button>
      </header>
    </div>
  );
}

export default App;
