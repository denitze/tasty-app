import { Link} from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav id="NAVI">
          
          <h3 id="logoTASTY">TASTY</h3>

        <ul id="navigation">
        
        <li>
          <Link to="/today" style={{color:"black" ,textDecoration: "none",}}>Today</Link>
        </li>
        <li>
          <Link to="/allrecipe" style={{color:"black",textDecoration: "none"}}>All Recipe</Link>
        </li>
        <li>
          <Link to="/vegetarian" style={{color:"black",textDecoration: "none"}}>Vegetarian</Link>
        </li>
        <li>
          <Link to="/bettereat" style={{color:"black",textDecoration: "none"}}>Better eat</Link>
        </li>

        <li>
          <Link to="/rondomrecipe" style={{color:"black",textDecoration: "none"}}>Rondom recipe</Link>
        </li>
       
            
        </ul>
    </nav>
     );
}
 
export default Navigation;