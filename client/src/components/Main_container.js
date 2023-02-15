import axios from "axios"
import { useEffect, useState } from "react"
import Adding_board_comp from "./Adding_board_comp"
import Board from "./Board"
import Test_comp from "./Test_comp"

const Main_container=()=>{
    const [boards,setBoards]=useState([])
    const[adding_board,setAdding_board]=useState(false)

    let userDetail=JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        axios.get('http://localhost:8000/api/board/list')
        .then(res=>{
            console.log('this is res.data....(main container) ', res.data)
            setBoards(res.data)
        })
    },[])


const Pushme=e=>{
    //e.preventDefault()
    console.log('yep')
    //setBoards([...boards,{title:'New Board'}])
    
    setAdding_board(true)
}

    return(
        <div className="main_container">

            <button onClick={e=>Pushme()} >Add board...</button>

            <div className="cool_container">
                {boards.map((a,i)=>{
                    return(
                        <Board key={i} title={a.title} id={a._id} user={userDetail.user.name} boards={boards} />    
                    )
                    })}
                
                {adding_board?
                    <Adding_board_comp />
                    :''
                }
            </div>
           
        </div>
    )
}

export default Main_container