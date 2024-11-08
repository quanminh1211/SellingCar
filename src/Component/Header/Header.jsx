import "./Header.css";

const Header = (props) => {
  return (
    <div className="header-home">
        <img src={props.imgHeader} alt />
      <div className="menuItem1">
        <a href="">New Cars</a>
        <a href="">Used Cars</a>
        <a href="">Compare</a>
        <a href="">Sell</a>
        <div className="select-container">
        <select className="select-box">
          <option value="">Article</option>
          <option value="">Car Review</option>
          <option value="">News</option>
        </select>
        </div>
      </div>
      <div className="menuItem2">
        <div className="select-container">
        <select className="select-box">
          <option value="">ENG</option>
          <option value="">VIE</option>
        </select>
        </div>
        <div className="SignIn-Up">
          <img src={props.imgAccount} />
          <a href="">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
