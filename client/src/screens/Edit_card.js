import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

const Edit_card=props=>{

    const {id}=useParams();

    /* useEffect(()=>{
        axios.get(`http://localhost:8000/api/card/${id}`)
    })
    .then(res=>{
        console.log('en then ?? ')
    },[])
    .catch(err=>{
        console.log('catch')
    }) */


    console.log('hi?')
    console.log(useParams)

    return(
        <div>
            <Navbar/>
a
            title IN EDIT CARD IS  ....{id} .....


            <Link to="/">Back to main</Link>

        </div>
    )
}

export default Edit_card