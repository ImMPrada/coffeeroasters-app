import CollectionCard from "../CollectionCard/CollectionCard"
import './styles.scss'

function Collection() {
  return (
    <>
      <div className="collection-container">
        <div className="collection-container-title">
          
        </div>
        <div className="collection-container-cards">
          <CollectionCard
            imagePath = "src/assets/danche.png"
            title = "Gran Espresso"
            description = "Light and flavorful blend with cocoa and black pepper for an intense experience"
          />
          <CollectionCard
            imagePath = "src/assets/planalto.png"
            title = "Planalto"
            description = "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
          />
          <CollectionCard
            imagePath = "src/assets/picollo.png"
            title = "Picollo"
            description = "Mild and smooth blend featuring notes of toasted almond and dried cherry"
          />
          <CollectionCard
            imagePath = "src/assets/danche.png"
            title = "Danche"
            description = "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
          />
        </div>
      </div>
    </>
  )
}

export default Collection
