import './styles.scss'

function StepCard(props) {
  const { stepNumber, title, description, hideBar } = props;

  return (
    <>
      <div className="stepcard">
        <div className="stepcard-logo">
          <div className="stepcard-logo-circle">
          </div>
          <div className={`stepcard-logo-line ${hideBar ? "hidden" : ""}`}>
          </div>
        </div>
        <div className="stepcard-content">
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
