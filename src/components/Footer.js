import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"


const Footer = () => {
    return ( 
        <footer>
        <div className="footer-social-icons">
      
            
            <FaFacebookF className="footerIcons"id="Facebook"  />

            <FaInstagram className="footerIcons"id="Instagram" />

            <FaTwitter className="footerIcons"id="Twitter" />
           
         </div>
        </footer>
     );
}
 
export default Footer;