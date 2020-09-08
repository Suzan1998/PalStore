import React, { Fragment, useEffect, useStat,Component } from 'react';
import Main from './components/MainComponent';
import { render } from 'react-dom';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

const   img='/assets/images/pal2.png'

class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
       <div className="App">
            <Main/>
       </div>
      </BrowserRouter>
       
  
  );
  }

};

export default App;