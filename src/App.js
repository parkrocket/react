import React from 'react';
import './App.css';
import Main from './page/Component/Main/Main.js';
import App2 from './page/App2.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} ></Route>
          <Route path='/sub' element={<App2 />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
