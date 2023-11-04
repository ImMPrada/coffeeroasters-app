import './styles.scss'

function InfoCard(props) {
  const { imagePath, title, description } = props;

  return (
    <>
      <div className="infocard">
        <div className="infocard-image">
          <img src={imagePath} alt={title} />
        </div>
        <div className="infocard-content">
          <p className="font-h4 title">
            {title}
          </p>
          <p className="body-text description">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

export default InfoCard;
