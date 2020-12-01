import { Link} from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav id="navBar">
            <ul>
                <li>
                    <Link to="/" exact>HOME</Link>
                </li>
                <li>
                    <Link to="/entertainment">ENTERTAINMENT</Link>
                </li>
                <li>
                    <Link to="/shop">SHOP</Link>
                </li>
                <li>
                    <Link to="/events">EVENTS</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;