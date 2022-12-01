import React from "react";
import QuestionOneShifts from "./Frontend/question_one_shifts";
import MainScreen from "./Frontend/MainScreen";
import Jobs from "./Frontend/Jobs";
import Nurses from "./Frontend/Nurses";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <QuestionOneShifts /> */}
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />}/>
        <Route path="question_one_shift" element={<QuestionOneShifts />}/>
        <Route path="jobs" element={<Jobs />}/>
        <Route path="nurses" element={<Nurses />}/>
         
        
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
