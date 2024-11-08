import './ListCarSearch.css'
import {CarItemList} from "../CarList/data.js";
import ItemCarSearch from './ItemCarSearch.jsx';


const ListCarSearch = () => {
    return (
        <>
        {CarItemList.map((carItem)=> {
            return <ItemCarSearch key={carItem.id} imgItem={carItem.imgItem}
            nameItem={carItem.nameItem} price={carItem.price} status={carItem.status}
            location={carItem.location} year={carItem.year} yearIcon={carItem.yearIcon}
            wheelDriveIcon={carItem.wheelDriveIcon} wheelDrive={carItem.wheelDrive}
            petrolIcon={carItem.petrolIcon} petrol={carItem.petrol} peopleIcon={carItem.peopleIcon}
            people={carItem.people} Star={carItem.Star} />
        })}
        </>
    )
}

export default ListCarSearch;
