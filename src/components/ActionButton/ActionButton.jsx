import './styles.scss'

function ActionButton(props) {
  const {
    label,
    routeTo,
    submitForm,
    apiEndpoint,
    isDisabled,
  } = props;

  const resolveLabel = () => (
    <span className="font-h4">
      {label}
    </span>
  );

  const handleButtonClick = () => {
    if (submitForm) {
      return <button className="actionbutton" onClick={submitForm} disabled={isDisabled}> {resolveLabel()} </button>;
    } else if (apiEndpoint) {
      return <button className="actionbutton" type="button" onClick={apiEndpoint} disabled={isDisabled}> {resolveLabel()} </button>;
    }
  };

  return (
    <>
      {handleButtonClick()}
    </>
  );
}

export default ActionButton;

