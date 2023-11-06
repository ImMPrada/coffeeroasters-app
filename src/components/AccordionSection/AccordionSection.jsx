import { useState } from 'react';
import './styles.scss';
import AccordionToOpen from '../../assets/AccordionToOpen.svg'
import AccordionToClose from '../../assets/AccordionToClose.svg'

function AccordionSection(props) {
  const { expand, title, children, isEnabled } = props;
  const [isExpanded, setIsExpanded] = useState(expand);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`accordion ${isExpanded ? 'expanded' : ''}`}>
      <button onClick={toggleAccordion} className="accordion-toggle" type="button" disabled={!isEnabled}>
        <div className="accordion-toggle-content">
          <span className="accordion-toggle-content-text font-h4">{title}</span>
          {
            isExpanded ? (
              <img className="accordion-toggle-content-icon" src={AccordionToClose} alt="" />
            ) : (
              <img className="accordion-toggle-content-icon" src={AccordionToOpen} alt="" />
            )
          }
        </div>
      </button>
      {
        isExpanded && (
          <div className="accordion-content">
            {children}
          </div>
        )
      }
    </div>
  );
}

export default AccordionSection;
