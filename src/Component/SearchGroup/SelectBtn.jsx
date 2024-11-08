import './SelectBtn.css'

const SelectBtn = (props) => {
    return (
        <div className="selectoption">
        <select className="selectOption-box">
          <option value="">{props.option1}</option>
          <option value="">{props.option2}</option>
          <option value="">{props.option3}</option>
        </select>
        </div>
        )
}

export default SelectBtn;