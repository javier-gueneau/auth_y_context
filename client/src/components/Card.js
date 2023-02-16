import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Edit_card from "../screens/Edit_card"

const Card=({title,id,user,comment})=>{

const navigate=useNavigate()
const handleDelete=()=>{
    console.log('were in delete in Card componnnt')
    var answer=window.confirm('Warning! Are you sure want to DELETE this card?')
        if (answer){
            console.log('yes')
            axios.delete(`http://localhost:8000/api/card/${id}`)
            .then (res=>{
                console.log('in then of the delete ... (Should navigate now.., to / ) ')
                navigate('/')

            } )

        }
        else{
            console.log('no')
        }
}


    return(
        <div className="card">
            
            <p className="p_large">{title}</p>
            <Link to={`/${id}`}> 
            <p className="p_tight">{comment}</p>
            </Link>
            <p>Created by {user} </p>
            <button onClick={e=>handleDelete()} >Delete card</button>
        </div>
    )
}

export default Card