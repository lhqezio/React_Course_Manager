/**
 * @file DropDown.jsx
 * @brief DropDown component
 * @version 1.0
 * @date 2022-12-09
 * @author Hoang Quoc Le
 */

function DropDown(props) {
  const { options, onChange, type } = props;
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
