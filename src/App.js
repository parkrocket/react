import React from 'react';
import './App.css';
import Main from './page/Main.js';
import App2 from './page/App2.js';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main />} ></Route>
          <Route exact path='/sub' element={<App2 />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
