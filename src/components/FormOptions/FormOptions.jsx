import FormOptionCard from '../FormOptionCard/FormOptionCard';
import './styles.scss';

function FormOptions(props) {
  const { name, options, selectedOption, handleOptionChange } = props;

  return (
    <div className="formoptions">
      {
        options.map((option) => (
          <FormOptionCard
            key={option.id}
            name={name}
            id={option.id}
            title={option.title}
            description={option.description}
            isSelected={selectedOption === option.id}
            handleOptionChange={handleOptionChange}
          />
        ))
      }
    </div>
  );
}

export default FormOptions;
