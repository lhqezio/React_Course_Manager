
function DropDown(props){
    const {options, onChange, type} = props;
    return (
        <select onChange={onChange} className={type}>
        {options.map((option) => (
            <option value={option.value} key={option.value}>
            {option.label}
            </option>
        ))}
        </select>
    );
}

export default DropDown;