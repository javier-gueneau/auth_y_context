import { Link } from "react-router-dom"
import Edit_card from "../screens/Edit_card"

const Card=({title,id})=>{
    return(
        <div className="Note">
            

            <Link to='/edit_card' title={'s'} supi={'shd'} > {title}{id} </Link>
            <Link to={`/${id}`} id={id} title={'s'} supi={'shd'} > {title}{id} </Link>
        </div>
    )
}

export default Card