import { useState } from 'react';
import FormOptions from '../FormOptions/FormOptions';
import './styles.scss';

function SubscriptionForm(props) {
  const { options } = props;

  const [opt1Selected, setOpt1Selected] = useState(null);
  const [opt2Selected, setOpt2Selected] = useState(null);

  const handleOption1Change = (e) => {
    setOpt1Selected(e.target.value);
  };
  
  const handleOption2Change = (e) => {
    setOpt2Selected(e.target.value);
  };

  return (
    <div className="subscrition-form">
      <form>
        <FormOptions
          name="options1"
          options={options[0]}
          selectedOption={opt1Selected}
          handleOptionChange={handleOption1Change}
        />
        <FormOptions
          name="options1"
          options={options[1]}
          selectedOption={opt2Selected}
          handleOptionChange={handleOption2Change}
        />
      </form>
    </div>
  );
}

export default SubscriptionForm;
