import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Create />} path='/create' />
      <Route element={<Update />} path='/edit/:id' />
    </Routes>
  );
};

export default App;
