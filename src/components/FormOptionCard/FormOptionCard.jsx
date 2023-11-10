import './styles.scss';

function FormOptionCard(props) {
  const { name, id, title, description, isSelected, handleOptionChange } = props;
  console.log(isSelected)
  return (
    <label key={id} className="optioncard">
      <input
        type="radio"
        name={name}
        value={id}
        checked={isSelected}
        onChange={handleOptionChange}
      />
      <div className={`optioncard-content${isSelected ? '-selected' : ''}`}>
        <p className="font-h4">{title}</p>
        <p className="body-font">{description}</p>
      </div>
    </label>
  );
}

export default FormOptionCard;
