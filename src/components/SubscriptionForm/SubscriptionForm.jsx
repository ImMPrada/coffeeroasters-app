import { useState } from 'react';
import FormOptions from '../FormOptions/FormOptions';
import AccordionSection from '../AccordionSection/AccordionSection';
import './styles.scss';

function SubscriptionForm(props) {
  const { options } = props;

  const [opt1Selected, setOpt1Selected] = useState(null);
  const [opt2Selected, setOpt2Selected] = useState(null);
  const [opt3Selected, setOpt3Selected] = useState(null);

  const handleOption1Change = (e) => {
    setOpt1Selected(e.target.value);
  };
  
  const handleOption2Change = (e) => {
    setOpt2Selected(e.target.value);
  };

  const handleOption3Change = (e) => {
    setOpt3Selected(e.target.value);
  };

  return (
    <div className="subscrition-form">
      <form>
        <AccordionSection
          expand={false}
          isEnabled={false}
          title="How do you drink your coffee?"
        >
          <FormOptions
            name="options1"
            options={options[0]}
            selectedOption={opt1Selected}
            handleOptionChange={handleOption1Change}
          />
        </AccordionSection>
        <AccordionSection
          expand={true}
          isEnabled={true}
          title="What type of coffee?"
        >
          <FormOptions
            name="options1"
            options={options[1]}
            selectedOption={opt2Selected}
            handleOptionChange={handleOption2Change}
          />
        </AccordionSection>
        <AccordionSection
          expand={false}
          isEnabled={true}
          title="What type of coffee?"
        >
          <FormOptions
            name="options3"
            options={options[2]}
            selectedOption={opt3Selected}
            handleOptionChange={handleOption3Change}
          />
        </AccordionSection>
      </form>
    </div>
  );
}

export default SubscriptionForm;
