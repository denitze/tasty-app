import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"


const Footer = () => {
    return ( 
        <footer>
        <div className="footer-social-icons">
      
            
            <FaFacebookF id="Facebook"  />

            <FaInstagram id="Instagram" />

            <FaTwitter id="Twitter" />
           
         </div>
        </footer>
     );
}
 
export default Footer;