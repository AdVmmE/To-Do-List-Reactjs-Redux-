import React, {useContext, useEffect, useState} from 'react';
import TaskForm from './components/TaskForm';

import FilterTasks from './components/FilterTasks';
import TaskTable from "./components/TaskTable";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ThemeContext} from "./ThemeContext";


const App = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
          <div className={`App ${theme}`}>


          <Header ></Header>
          <div className={`full-page ${theme}`} style={{ backgroundColor: theme === 'darkMode' ? '#333' : '#b0b0b0' }}>
              <div className={`center-container ${theme}`} style={{ backgroundColor: theme === 'darkMode' ? '#121212' : '#ffffff' }}>

                  <Routes>
                      <Route  path="/" element={<div className={"App"}>

                          {/*<TaskForm />*/}
                          <FilterTasks/>
                          <TaskTable/>
                      </div>}/>
                      <Route path="/newtask" element={<TaskForm/>}/>
                  </Routes>
              </div>
          </div>
          </div>


  );
};

export default App;