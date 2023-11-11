import './styles.scss'
import HomeCover from '../../assets/home-header.png'
import Template from '../../components/Template/Template.jsx'
import Cover from '../../components/Cover/Cover.jsx'
import ActionButton from '../../components/ActionButton/ActionButton.jsx'
import Collection from '../../components/Collection/Collection.jsx'
import WhyUs from '../../components/WhyUs/WhyUs.jsx'
import Steps from '../../components/Steps/Steps.jsx'

function Home() {
  return (
    <Template>
      <div className="home">
        <Cover
          image={HomeCover}
          title="Great coffee made simple."
          content="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        >
          <ActionButton label="Create yout plan" apiEndpoint="/"/>
        </Cover>
        <Collection />
        <WhyUs />
        <div className="home-steps">
          <p className="font-h4 home-steps-title">
            How it works
          </p>
          <Steps />
          <div>
            <ActionButton label="Create yout plan" apiEndpoint="/"/>
          </div>
        </div>
      </div>
    </Template>
  )
}

export default Home
