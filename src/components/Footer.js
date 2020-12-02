import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
// import { IoLogoYoutube } from "react-icons/io"


const Footer = () => {
    return ( 
        <footer>
        <div class="footer-social-icons">
      
            
            <FaFacebookF id="Facebook"  />

            <FaInstagram id="Instagram" />

            <FaTwitter id="Twitter" />

            {/* <IoLogoYoutube id="Youtube" /> */}
           
         </div>
        </footer>
     );
}
 
export default Footer;