import React, { useState } from "react";
import "./DropDown.css";
import filterData from "../../typeOption.js";
const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Select option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = filterData[props.dataIndex];

  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <div className="selected" onClick={toggleDropdown}>
        {selectedOption}
      </div>
      {isOpen && (
        <div className="options">
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={handleSearch}
          />
          {filteredOptions.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
