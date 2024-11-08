import "./SearchGroup.css";
import SearchBtn from "./SearchBtn.jsx";
import SelectBtn from "./SelectBtn.jsx";
import * as datatypeOption from '../../typeOption.js'
const SearchGroup = () => {
  return (
    <div className="searchGroup">
      <div className="searchTop">
        <a href="">All</a>
        <a href="">News</a>
        <a href="">Used</a>
      </div>
      <div className="searchBottom">
        <div className="search">
        <SearchBtn typeInput="text" textPlace="Search" />
        <SelectBtn />
        <SelectBtn />
        </div>
        <div className="select">
        <SearchBtn typeInput="text" textPlace="Location" />
        <SearchBtn typeInput="range" />

        </div>
      </div>
    </div>
  );
};
export default SearchGroup;
