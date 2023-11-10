import InfoCard from "../InfoCard/InfoCard"
import './styles.scss'
import Bean from "../../assets/Bean.svg"
import GiftBox from "../../assets/GiftBox.svg"
import Truck from "../../assets/Truck.svg"

function WhyUs() {
  return (
    <>
      <div className="whyus">
        <div className="whyus-container">
          <div className="whyus-container-title">
            <p className="font-h2">
              Why choose us?
            </p>
            <p className="body-text">
              A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
            </p>
          </div>
          <div className="whyus-container-cards">
            <InfoCard
              imagePath = {Bean}
              title = "Best quality"
              description = "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
            />
            <InfoCard
              imagePath = {GiftBox}
              title = "Exclusive benefits"
              description = "Special offers and swag when you subscribe, including 30% off your first shipment."
            />
            <InfoCard
              imagePath = {Truck}
              title = "Free shipping"
              description = "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUs
