import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontPage from './Views/FrontPage';
import SecondPage from './Views/SeoncdPage';

function App() {

  const [message, setMessage] = useState({});

  const handleMessage = (e) => {
    if(e.origin !== 'http://localhost:3002') return;
    console.log(e.data);
    setMessage(JSON.parse(e.data))
  }

  useEffect(() => {
    window.addEventListener('message', handleMessage, false);

    return () => {
      window.removeEventListener('message', handleMessage, false);
    }
  })

  return (
    <Router>
    <div className="App">
    <Header white={message.isTrue}/>
      <div className="app--content"> 
        <Switch>
          <Route exact path="/" render={() => <FrontPage isTrue={message.isTrue}/>}/>
          <Route path="/second" component={SecondPage} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
