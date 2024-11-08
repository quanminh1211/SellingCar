import './SearchBtn.css'

const SearchBtn = (props) => {
    return (
        <div className="SearchInput">
            <input type={props.typeInput} placeholder={props.textPlace}/>
        </div>
        
    )
}

export default SearchBtn;