import './styles.scss'

function StepCard(props) {
  const { stepNumber, title, description, hideBar, darkMode } = props;

  return (
    <>
      <div className={`stepcard${darkMode ? '-dark' : ''}`}>
        <div className={`stepcard${darkMode ? '-dark' : ''}-logo`}>
          <div className={`stepcard${darkMode ? '-dark' : ''}-logo-circle`}>
          </div>
          <div className={`stepcard${darkMode ? '-dark' : ''}-logo-line ${hideBar ? "hidden" : ""}`}>
          </div>
        </div>
        <div className={`stepcard${darkMode ? '-dark' : ''}-content`}>
          <p className="font-h1 step-number">
            {stepNumber}
          </p>
          <p className="font-h3 step-title">
            {title}
          </p>
          <p className="body-text step-description">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default StepCard;
