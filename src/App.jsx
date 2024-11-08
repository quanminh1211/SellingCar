import { useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header.jsx";
import HeaderLogo from "./assets/img/ImgHeaders.svg";
import HomePage from "./Component/HomePage/HomePage.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import FilterComponent from "./Component/FilterSearch/FilterComponent.jsx";
import ResultFilter from "./Component/ResultFilter/ResultFilter.jsx";
import ChangePage from "./Component/ChangePage/ChangePage.jsx"
import TitlePage from "./Component/TitlePage/TitlePage.jsx";
import SellCar from "./Component/SellCar/SellCar.jsx";
import FAQ from "./Component/FAQ/FAQ.jsx";
import SignIn from "./Component/SignIn-Up/SignIn.jsx";

function App() {
  return (
    <>
        <Header imgHeader={HeaderLogo} />
        <HomePage/>

        {/* <Background imgBg={BackgroundImg} />
        <SearchGroup />
        <CarList />
        <CompareCar />
        <ReviewUser />
        <AboutUs imgAbout={ImgAbout} />
        <OurService />
        <Contact />
        <LogoGroup /> */}
        <Footer />
        <TitlePage titlePage="New Cars" />
        <div className="NewCar-page">
          <FilterComponent />
          <div className="NewCar-left">
          <ResultFilter />
          <ChangePage />
          </div>
        </div>
        <TitlePage titlePage="Used Cars" />
        <div className="Used-page">
          <FilterComponent />
          <div className="Used-left">
          <ResultFilter />
          <ChangePage />
          </div>
        </div>
        <SellCar />
        <FAQ />
        <SignIn />
      
    </>
  );
}

export default App;
