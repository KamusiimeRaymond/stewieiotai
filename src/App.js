import React from 'react';
import Chatlist from './components/chatlist';
import Footer from './components/footer';
import './mainscreen.css';

class App extends React.Component{

  render(){

  return (
    <div className="App">
      <div className="header">
        <div className="content">
          <h1>Stewie</h1>
          <p>The AI Assistant</p>
        </div>
      </div>
      <div className="mainscreen">
        <div className="chatbot">
          <Chatlist />
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
}

export default App;
