import './ResultFilter.css'
import SearchBtn from '../SearchGroup/SearchBtn';
import SortType1 from '../../assets/img/sortType1..svg'
import SortType2 from '../../assets/img/sortType2..svg'
import ListCarSearch from './ListCarSearch';

const ResultFilter = () => {
    return (
        <div className="resultFilter-container">
            <SearchBtn typeInput="text" textPlace="Search"/>
            <div className="sort-container">
                <p>65 Results</p>
            <div className="sort">
                <select className="sort-box">
                    <option value="default">Default</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                    <option value="year-asc">Year (Newest to Oldest)</option>
                    <option value="year-desc">Year (Oldest to Newest)</option>
                </select>
                <button className="sort-btn">Sort</button>
            <img src={SortType1}/>
            <img src={SortType2}/>
            </div>
            </div>
            <ListCarSearch/>
        </div>
    )
}

export default ResultFilter;