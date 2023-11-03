import './styles.scss'

function CollectionCard(props) {
  const { imagePath, title, description } = props;

  return (
    <>
      <div className="collectioncard">
        <div className="collectioncard-image">
          <img src={imagePath} alt={title} />
        </div>
        <div className="collectioncard-content">
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

export default CollectionCard;
