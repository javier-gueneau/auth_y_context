//import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import moment from 'moment';
//import Stock from '../components/Stock';
//import Resumen from '../components/Resumen';
import CommentComponent from '../components/CommentComponent';
import List from '../components/List';
import Main_container from '../components/Main_container';
import Navbar from '../components/Navbar';
/* 
import List from '../components/List'; */


const Dashboard=()=>{

  const [titleOfPost,setTitleOfPost]=useState('')
  const[post,setPost]=useState('')
  let userDetail=JSON.parse(localStorage.getItem('user'))
  
    return(


        
        <div className="App">
            <Navbar/>


        <div className='container-fluid' >
            <div className='row'>
                <div className='col-sm-12' >col one</div>
                <div className='col-sm-12' >col two</div>

            </div>
            aa
        </div>


            <Main_container/>
        </div>

    )
}

export default Dashboard
