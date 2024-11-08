import React, { useState } from "react";
import "./FeatureSelector.css";

const featuresList = [
  "Power Steering",
  "AC",
  "Alarm",
  "Bluetooth",
  "Heated Seats",
  "Wifi",
  "Cruise Control",
  "Front Parking Sensor",
  "Rear Parking Sensor",
  "Roof Rack",
  "Power Windows",
  "Sunroof",
  "USB Port",
  "Sound System",
  "Memory Seat",
  "Other",
];

function FeatureSelector() {
//Khai báo một state searchTerm để lưu trữ từ khóa tìm kiếm, mặc định là chuỗi rỗng. setSearchTerm là hàm để cập nhật searchTerm.
  const [searchTerm, setSearchTerm] = useState("");
//Khai báo state selectedFeatures để lưu danh sách các tính năng đã được chọn, mặc định là một mảng rỗng.
  const [selectedFeatures, setSelectedFeatures] = useState([]);
//Khai báo state additionalFeature để lưu trữ giá trị từ textarea cho phép người dùng nhập một tính năng tùy chỉnh, mặc định là chuỗi rỗng.
  const [additionalFeature, setAdditionalFeature] = useState("");

//Hàm handleSearch là hàm xử lý sự kiện khi người dùng nhập vào ô tìm kiếm.
//Cập nhật searchTerm bằng giá trị người dùng nhập vào từ sự kiện e.
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
//Hàm handleCheckboxChange xử lý sự kiện khi người dùng chọn hoặc bỏ chọn một checkbox.
  const handleCheckboxChange = (feature) => {
//Cập nhật selectedFeatures dựa trên danh sách các tính năng đã chọn trước đó (prevFeatures).
    setSelectedFeatures((prevFeatures) =>
//Kiểm tra nếu tính năng feature đã có trong prevFeatures.
//Nếu có (true), loại bỏ tính năng này khỏi selectedFeatures bằng cách sử dụng filter.
//Nếu chưa có (false), thêm tính năng vào selectedFeatures bằng cách sử dụng cú pháp spread [...prevFeatures, feature].
      prevFeatures.includes(feature)
        ? prevFeatures.filter((f) => f !== feature)
        : [...prevFeatures, feature]
    );
  };

  const handleTextareaChange = (e) => {
    setAdditionalFeature(e.target.value);
  };

  const filteredFeatures = featuresList.filter((feature) =>
    feature.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="feature-selector-container">
      <h2>Features</h2>
      <input
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="features-grid">
        {filteredFeatures.map((feature, index) => (
          <label key={index} className="feature-item">
            <input
              type="checkbox"
              checked={selectedFeatures.includes(feature)}
              onChange={() => handleCheckboxChange(feature)}
            />
            {feature}
          </label>
        ))}
      </div>
      <textarea
        placeholder="Write another feature here"
        value={additionalFeature}
        onChange={handleTextareaChange}
        className="additional-feature"
      />
    </div>
  );
}

export default FeatureSelector;
