import StepCard from "../StepCard/StepCard"
import './styles.scss'

function Steps(props) {
  const { darkMode } = props;

  return (
    <>
      <div className={`steps-container${darkMode ? '-dark' : ''}`}>
        <StepCard
          stepNumber = "01"
          title = "Pick your coffee"
          description = "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
          darkMode = {darkMode}
        />
        <StepCard
          stepNumber = "02"
          title = "Choose the frequency"
          description = "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
          darkMode = {darkMode}
        />
        <StepCard
          stepNumber = "03"
          title = "Receive and enjoy"
          description = "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-className coffees curated to provide a distinct tasting experience."
          hideBar = {true}
          darkMode = {darkMode}
        />
      </div>
    </>
  )
}

export default Steps
