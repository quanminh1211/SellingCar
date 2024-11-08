import './CompareCar.css'
import { CompareCarList } from '../CarList/data.js'
import CarItem from '../CarList/CarItem.jsx'

const CompareCar = () => {
    return (
        <div className='CompareLst'>
        <h2>Compare Cars</h2>
        <div className="ItemCompare">
        {CompareCarList.map((CompareItem) => {
            return <CarItem key={CompareItem.id} imgItem={CompareItem.imgItem}
                nameItem={CompareItem.nameItem} price={CompareItem.price}
                location={CompareItem.location} year={CompareItem.year} yearIcon={CompareItem.yearIcon}
                wheelDriveIcon={CompareItem.wheelDriveIcon} wheelDrive={CompareItem.wheelDrive}
                petrolIcon={CompareItem.petrolIcon} petrol={CompareItem.petrol} peopleIcon={CompareItem.peopleIcon}
                people={CompareItem.people}/>
        })}
        </div>
        </div>
    )
}

export default CompareCar;