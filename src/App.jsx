import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import { Sidebar } from './components/sidebar/Sidebar';

const App = () => {
  // [{ val: 1 }, { val: 2 }, { val: 3 }];

  function transformToObjects(numberArray) {
    let arr = [...numberArray];
    // ! ({ val: el }) Возвращает обьект вместо просто елемента
    const editedArr = arr.map((el) => ({ val: el }));
    return editedArr;
  }

  console.log(transformToObjects([1, 2, 3, 4]));

  return (
    <>
      <Sidebar />

      {/* ! Разобраться с outlet ! */}
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
