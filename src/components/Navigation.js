import { Link} from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav id="navBar">
            <ul>
                <li>
                    <NavLink to="/" exact>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/entertainment">ENTERTAINMENT</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">SHOP</NavLink>
                </li>
                <li>
                    <NavLink to="/events">EVENTS</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;