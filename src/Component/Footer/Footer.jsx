import "./Footer.css";
import HeaderLogo from "../../assets/img/ImgHeaders.svg";
import Iconface from '../../assets/img/Iconface..svg'
import IconInsta from '../../assets/img/IconInsta..svg'
import Iconytb from '../../assets/img/Iconytb..svg'

const Footer = () => {
  return (
    <div className="footer">
      <img className="titleFooter" src={HeaderLogo} />
      <div className="line"></div>
      <div className="nav-footer">
        <div className="nav1">
          <p>ABOUT US</p>
          <p>FAQ</p>
          <p>CONTACT</p>
        </div>
        <div className="nav2">
          <p>CUSTOMER SERVICE</p>
          <p>info@car.com</p>
          <p>240-865-3730</p>
        </div>
      <div className="nav3">
        <p>3926 Calvin Street, Baltimore, Maryland, 21201, United State</p>
        <div className="iconFooter">
            <img src={Iconface} />
            <img src={IconInsta} />
            <img src={Iconytb} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
