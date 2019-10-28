import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const isTrue = useRef(false)

  const handleMessage = (e) => {
    if(e.origin !== 'http://localhost:3000') return;
    const data = JSON.parse(e.data);
    console.log(data, isTrue.current);
    if(Object.entries(data).length !== 0 && data.constructor === Object) isTrue.current = data.isTrue;
  }

  const postMessage = (show) => {
    isTrue.current = show
    window.parent.postMessage(JSON.stringify({isTrue: show}), 'http://localhost:3000')
  }
  useEffect(() => {

    window.addEventListener('message', handleMessage, false);
    return () => {
      window.removeEventListener('message', handleMessage, false);
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => postMessage(!isTrue.current)}>ButtonClicked</button>
      </header>
    </div>
  );
}

export default App;
