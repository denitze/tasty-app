import { Link} from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav id="NAVI">
          
          <h3 id="logoTASTY">TASTY</h3>

        <ul id="navigation">
        
       
        <li>
          <Link to="/" >All Recipe</Link>
        </li>
        <li>
          <Link to="/today" >Today</Link>
        </li>
        <li>
          <Link to="/vegetarian" >Vegetarian</Link>
        </li>
        <li>
          <Link to="/bettereat" >Better eat</Link>
        </li>

        <li>
          <Link to="/randomrecipe" >Random recipe</Link>
        </li>
       
            
        </ul>
    </nav>
     );
}
 
export default Navigation;