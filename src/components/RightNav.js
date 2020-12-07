import React from 'react'
import { Link} from "react-router-dom";

const RightNav = (props) => {
    let BGID = ['UL-NavBar']
    
    
    if(props.show) {
      BGID = ['UL-NavBar open']
      
      
    }

    return ( 

        <ul className={BGID}>
        <li>
          <Link to="/">All Recipe</Link>
        </li>
        <li>
          <Link to="/today">Today</Link>
        </li>
        <li>
          <Link to="/vegetarian">Vegetarian</Link>
        </li>
        <li>
          <Link to="/bettereat">Better eat</Link>
        </li>

        <li>
          <Link to="/randomrecipe">Random recipe</Link>
        </li>
      </ul>


     );
}
 
export default RightNav;