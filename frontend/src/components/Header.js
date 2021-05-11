import React from 'react'
import{NavLink} from 'react-router-dom'

const Header=()=>{
    return(
    <div>   
        <div  className="header">
            <div className="link-footer">
                <NavLink exact to="/"><h2 className="link">Home</h2></NavLink>
                <NavLink exact to="/signup"><h2 className="link">signup</h2></NavLink>
                <NavLink exact to="/signin"><h2 className="link">signin</h2></NavLink>
                <NavLink exact to="/dashboard"><h2 className="link">dashboard</h2></NavLink>
            </div>
       </div>     
</div>
    )
}
export default Header