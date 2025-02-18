import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav2 from './assets/components/navbarpages/nav2';
import Footer from './assets/components/footer/footer';
import Log from './assets/components/login/log';
import Student_dash from './assets/components/student_dashboard/main'
import Im1 from './assets/components/home_image/im1'
import Register from './assets/components/Regestraions/main'
import Dashboard from './assets/components/mixing/dashboard';
import Admin from './assets/components/mixing/a_admin';
import { Statistics1 } from './assets/components/proj/Graphspage1';
import { ProcedurePage } from './assets/components/PROCEDURE PAGE/ProcedurePage';
// import Statistics2 from './assets/components/Testing_123.jsx/Overallpage_';

function App() {
  return (

<>
     {/* <Statistics1/> */}
    {/* <Footer/> */}
    {/* <Admin/> */}
    <BrowserRouter> 

    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Log/>}/>
      <Route path='/register' element = {<Register/>}/>/
      <Route path='/admin' element = { <Admin/>}/>
      <Route path = '/procedure' element = {<ProcedurePage/>}/>
      {/* <Route path='*' element={<Navigate to="/" replace />}/> */}
    </Routes>
     </BrowserRouter>
     {/* <Student_dash/>
     <Register/> */}

     {/* <Admin/> */}
    </>
  );
}

export default App;
