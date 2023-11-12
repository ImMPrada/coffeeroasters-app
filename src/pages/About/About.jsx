import './styles.scss'
import Commitment from '../../assets/commitment.png'
import Quality from '../../assets/quality.png'
import WitheCupCover from '../../assets/whitecup-header.png'
import Template from '../../components/Template/Template.jsx'
import Cover from '../../components/Cover/Cover.jsx'
import HeadquartersInfo from '../../components/HeadquartersInfo/HeadquartersInfo.jsx'
import ActionButton from '../../components/ActionButton/ActionButton.jsx'
import Collection from '../../components/Collection/Collection.jsx'
import WhyUs from '../../components/WhyUs/WhyUs.jsx'
import Steps from '../../components/Steps/Steps.jsx'

function About() {
  return (
    <Template>
      <div className="about">
        <Cover
          image={WitheCupCover}
          title="About Us"
          content="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        />

        <div className="about-commitment">
          <div className="about-commitment-image">
            <img src={Commitment}/>
          </div>
          <div className="about-commitment-content">
            <p className="font-h4">
              Our commitment
            </p>
            <p className="body-text">
              We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
            </p>
          </div>
        </div>

        <div className="about-quality">
          <div className="about-quality-container">
            <div className="about-quality-container-image">
              <img src={Quality} />
            </div>
            <div className="about-quality-container-content">
              <p className="font-h4">
                Uncompromising quality
              </p>
              <p className="body-text">
                Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
          </div>
        </div>

        <div className="about-headquarters">
          <p className="font-h4 about-headquarters-title">
            Our headquarters
          </p>
          <HeadquartersInfo />
        </div>
      </div>
    </Template>
  )
}

export default About
