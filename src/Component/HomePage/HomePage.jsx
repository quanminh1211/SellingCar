import  './HomePage.css'
import BackGround from '../Header/BackGround.jsx'
import SearchGroup from '../SearchGroup/SearchGroup.jsx'
import CarList from '../CarList/CarList.jsx'
import CompareCar from '../CompareCar/CompareCar.jsx'
import ReviewUser from '../Review/ReviewUser.jsx'
import AboutUs from '../AboutUs/AboutUs.jsx'
import OurService from '../OurService/OurService.jsx'
import LogoGroup from '../LogoGgroup/LogoGroup.jsx'
import Contact from '../Contact/Contact.jsx'
import BackgroundImg from '../../assets/img/imgBackground.svg'
import ImgAbout from "../../assets/img/imgAbout..svg";



const HomePage = () => {
    return (
        <div className="home-page">
            <BackGround imgBg={BackgroundImg} />
            <SearchGroup />
            <CarList />
            <CompareCar />
            <ReviewUser />
            <AboutUs imgAbout={ImgAbout} />
            <OurService />
            <Contact />
            <LogoGroup />
        </div>
    )
}

export default HomePage;
