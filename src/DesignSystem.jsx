import NavBar from "./components/NavBar/NavBar"
import Cover from "./components/Cover/Cover"
import HeadquartersInfo from "./components/HeadquartersInfo/HeadquartersInfo"
import WhyUs from './components/WhyUs/WhyUs'
import Collection from './components/Collection/Collection'
import Steps from './components/Steps/Steps'
import HomeCover from './assets/home-header.png'
import WitheCupCover from './assets/whitecup-header.png'
import CreatePlanover from './assets/createplan-header.png'
import Logo from './assets/logo.svg'

function DesignSystem() {
  return (
    <>
      <div className="main-container">
        <NavBar
          image={Logo}
          title="coffeeroasters"
        />
        <Cover
          image={HomeCover}
          title="Great coffee made simple."
          content="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        >
          <button>Holi button</button>
        </Cover>
        <Cover
          image={WitheCupCover}
          title="About Us"
          content="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        />
        <Cover
          image={CreatePlanover}
          title="Create a plan"
          content="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
        />
        <HeadquartersInfo />
        <WhyUs />
        <Collection />
        <Steps />
        <div>
        </div>
      </div>
    </>
  )
}

export default DesignSystem
