import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import { AppProvider } from './context';  //wrap the app to provide context data to components
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ArtList from './components/ArtList/ArtList';
import Details from './components/Details/Details';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}>
            <Route path='about' element= {<About/>} />
            <Route path='art' element= {<ArtList/>} />
            <Route path='/art/:id' element={<Details/>}/> //render the art detail 
          </Route>
        </Routes>
      </BrowserRouter>
  </AppProvider>

);


