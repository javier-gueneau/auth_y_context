import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes, useNavigate, useNavigation } from 'react-router-dom';
import Register_screen from './screens/Register_screen';
import Login_screen from './screens/Login_screen';
import Dashboard_screen from './screens/Dashboard';
import Add_card from './screens/Add_card';
import Dashboard from './screens/Dashboard';
import Edit_card from './screens/Edit_card';


function App() {


  
  return (
    <div className="App">

         
          
          <Routes>
              
                <Route path='/login' element={<Login_screen/> } />

                <Route path='/register' element={<Register_screen/> } />

                <Route path='/add_card' element={<Add_card/> } />
                <Route path='/edit_card' element={<Edit_card/> } />
                <Route path='/:id' element={<Edit_card/> } />
                
                <Route path='/' element={<Dashboard/> } />


          </Routes>
      


      </div>
  );
}

export default App;
