import React, { useState } from "react";
import "./FilterComponent.css";
import SearchBtn from "../SearchGroup/SearchBtn";
import SelectBtn from "../SearchGroup/SelectBtn";
import * as datatypeOption from '../../typeOption.js'

const FilterComponent = () => {
    const [year, setYear] = useState([]);
    const [brand, setBrand] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 3000000]);

    const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setYear((prev) =>
        prev.includes(selectedYear)
        ? prev.filter((y) => y !== selectedYear)
        : [...prev, selectedYear]
    );
};

    const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand((prev) =>
        prev.includes(selectedBrand)
        ? prev.filter((b) => b !== selectedBrand)
        : [...prev, selectedBrand]
    );
};

//     const handlePriceChange = (e) => {
//     setPriceRange([e.target.value[0], e.target.value[1]]);
// };

    return (
    <div className="filter-container">
        <h2>Filter</h2>

      {/* Search Input */}
        <SearchBtn typeInput="text" textPlace="Search" />
      {/* Year Filter */}
        <div className="filter-section">
        <label>Year</label>
        <div className="checkbox-group">
            {[2016, 2017, 2018, 2019].map((yr) => (
            <label key={yr}>
                <input
                type="checkbox"
                value={yr}
                onChange={handleYearChange}
                checked={year.includes(yr)}
                />
                {yr}
            </label>
            ))}
        </div>
        <a href="#">See More</a>
        </div>

      {/* Brand Filter */}
        <div className="filter-section">
        <label>Brand</label>
        <SearchBtn typeInput="text" textPlace="Search" />

        <div className="checkbox-group">
            {["Audi", "BMW", "Chevrolet", "Ford"].map((br) => (
            <label key={br}>
                <input
                type="checkbox"
                value={br}
                onChange={handleBrandChange}
                checked={brand.includes(br)}
                />
                {br}
            </label>
            ))}
        </div>
        <a href="#">See More</a>
        </div>

      {/* Other filters like Model, Body Type, Transmission */}
        <div className="filter-section">
        <label>Model</label>
        <SelectBtn/>
        </div>

        <div className="filter-section">
        <label>Body Type</label>
        <SelectBtn/>
        </div>

        <div className="filter-section">
        <label>Transmission</label>
        <SelectBtn/>
        </div>

        <div className="filter-section">
        <label>Fuel Type</label>
        <SelectBtn/>
        </div>

        <div className="filter-section">
        <label>Drivetrain</label>
        <SelectBtn/>
        </div>

        <div className="filter-section">
        <label>Passenger Capacity</label>
        <SelectBtn/>
        </div>

        <div className="filter-section">
        <label>Exterior Color</label>
        <SelectBtn/>
        </div>

      {/* Price Range */}
        <div className="filter-section">
        <label>Price Range</label>
        <input
        className="filter"
            type="range"
            min="0"
            max="3000000"
            step="1000"
            // value={priceRange[1]}
            // onChange={handlePriceChange}
        />
        <p>
            ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
        </p>
        </div>
        <button>Reset Filter</button>
    </div>
    );
};

export default FilterComponent;
