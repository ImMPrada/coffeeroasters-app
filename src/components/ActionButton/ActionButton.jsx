import { Link } from 'react-router-dom';
import './styles.scss'

function ActionButton(props) {
  const {
    label,
    handleSubmit,
    handleAPI,
    routePath
  } = props;

  const resolveLabel = () => (
    <span className="font-h4">
      {label}
    </span>
  );

  const handleButtonClick = () => {
    if (handleSubmit) {
      return <button className="actionbutton" onClick={handleSubmit} disabled={isDisabled}> {resolveLabel()} </button>;
    } else if (handleAPI) {
      return <button className="actionbutton" type="button" onClick={handleAPI} disabled={isDisabled}> {resolveLabel()} </button>;
    } else if (routePath) {
      return <Link className="actionbutton" to={routePath}>{resolveLabel()}</Link>
    }
  };

  return (
    <>
      {handleButtonClick()}
    </>
  );
}

export default ActionButton;

