import './styles.scss';

function HeadquarterCard(props) {
  const { imagePath, title, dir, city, zip, phone } = props;

  return (
    <div className="headquartercard">
      <div className="headquartercard-image">
        <img src={imagePath} alt={title} />
      </div>
      <div className="headquartercard-content">
        <p className="font-h4 country">
          {title}
        </p>
        <p className="body-text">
          {dir}
        </p>
        <p className="body-text">
          {city}
        </p>
        <p className="body-text">
          {zip}
        </p>
        <p className="body-text">
          {phone}
        </p>
      </div>
    </div>
  );
}

export default HeadquarterCard;
