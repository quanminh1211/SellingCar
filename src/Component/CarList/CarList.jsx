import './CarList.css'
import CarItem from './CarItem.jsx';
import {CarItemList} from './data.js';
import ArrowRight from '../../assets/img/arrowRight.svg'

const CarList = () => {
    return (
        <div className='ListItem'>
            <p className='title'>Recommended Cars</p>
        <div className="title-list">
            <div className="nav-car">
                <a href="">News</a>
                <a href="">Used</a>
            </div>
            <div className="seeMore">
                <a href="">See more</a>
                <img src={ArrowRight} />
            </div>
        </div>
        <div className="carList">
            {CarItemList.map((carItem) => {
                return <CarItem key={carItem.id} imgItem={carItem.imgItem}
                nameItem={carItem.nameItem} price={carItem.price} status={carItem.status}
                location={carItem.location} year={carItem.year} yearIcon={carItem.yearIcon}
                wheelDriveIcon={carItem.wheelDriveIcon} wheelDrive={carItem.wheelDrive}
                petrolIcon={carItem.petrolIcon} petrol={carItem.petrol} peopleIcon={carItem.peopleIcon}
                people={carItem.people} Star={carItem.Star}/>
            })}

        </div>
        </div>
    )
}

export default CarList;