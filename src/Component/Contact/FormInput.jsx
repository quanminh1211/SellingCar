import './FormInput.css'
const FormInput = (props) => {
    return (
        <div className="formInput">
            {/* <label htmlFor="">Name</label> */}
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput;