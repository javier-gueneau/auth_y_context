import { Navigate, useNavigate } from "react-router-dom"

const Navbar=()=>{

    const navigate=useNavigate()

    let userDetail=JSON.parse(localStorage.getItem('user'))
  
    const handleClick=e=>{
        //e.preventDefault()
        //console.log('userDetail is ...', userDetail)
        console.log(localStorage)
        //console.log(userDetail.user)
        //console.log(userDetail.user.name)
      }

    return(

        <div className='navbar'>
                <h1>Posting Wall</h1>
                <div className='navbar2' >
                    <h4>
                      {userDetail.user.name}
                    </h4>
                    <button onClick={()=>navigate('/login') } >log out</button>
                    <button onClick={e=>handleClick() } >action</button>
                </div>
        </div>
    )
}

export default Navbar