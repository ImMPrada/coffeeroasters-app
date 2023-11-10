import HomeCover from '../../assets/home-header.png'
import Template from '../../components/Template/Template.jsx'
import Cover from '../../components/Cover/Cover.jsx'
import ActionButton from '../../components/ActionButton/ActionButton.jsx'

function Home() {
  return (
    <Template>
      <Cover
        image={HomeCover}
        title="Great coffee made simple."
        content="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
      >
        <ActionButton label="Create yout plan" apiEndpoint="/"/>
      </Cover>
    </Template>
  )
}

export default Home