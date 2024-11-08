import "./FAQ.css";
import TitlePage from "../TitlePage/TitlePage.jsx";

const FAQ = () => {
  return (
    <div className="FAQ-container">
      <TitlePage titlePage="FAQ" />
      <div className="FAQ-body">
        <div className="titleFAQ">
          <h2>Frequently Asked Questions</h2>
          <p>
            Frequently asked questions about our online marketplace and selling
            cars.
          </p>
          <div className="questionFAQ">
            <ul className="listQuestion">
                <li>Car</li>
                <li>Buy</li>
                <li>Sell</li>
                <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
