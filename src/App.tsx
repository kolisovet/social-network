import React from 'react';
import './App.css';


const App = () => {
  return (
      <div>
              <Header />
    <div className="App">
     Hello, samurai! Let's go!
    </div>
      </div>
  );
}

const Header = () => {
    return (
        <div className="Header">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}
export default App;
