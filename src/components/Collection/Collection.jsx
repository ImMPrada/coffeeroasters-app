import InfoCard from "../InfoCard/InfoCard"
import './styles.scss'
import DanchePNG from "../../assets/danche.png"
import PlanaltoPNG from "../../assets/planalto.png"
import PicolloPNG from "../../assets/picollo.png"
import GranEspressoPNG from "../../assets/gran_espresso.png"

function Collection() {
  return (
    <>
      <div className="collection">
        <div className="collection-container">
          <div className="collection-container-title">
            <p className="big-title-font">
              our collection
            </p>
          </div>
          <div className="collection-container-cards">
            <InfoCard
              imagePath = {DanchePNG}
              title = "Gran Espresso"
              description = "Light and flavorful blend with cocoa and black pepper for an intense experience"
            />
            <InfoCard
              imagePath = {PlanaltoPNG}
              title = "Planalto"
              description = "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
            />
            <InfoCard
              imagePath = {PicolloPNG}
              title = "Picollo"
              description = "Mild and smooth blend featuring notes of toasted almond and dried cherry"
            />
            <InfoCard
              imagePath = {GranEspressoPNG}
              title = "Danche"
              description = "Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Collection
