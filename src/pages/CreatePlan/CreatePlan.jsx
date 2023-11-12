import './styles.scss'
import CreatePlanover from '../../assets/createplan-header.png'
import Template from '../../components/Template/Template.jsx'
import Cover from '../../components/Cover/Cover.jsx'
import Steps from '../../components/Steps/Steps.jsx'

function CreatePlan() {
  return (
    <Template>
      <div className="create-plan">
        <Cover
          image={CreatePlanover}
          title="Create a plan"
          content="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
        />
        
        <Steps
          darkMode
        />

        <div className="create-plan-form">
          TODO: form
        </div> 
      </div>
    </Template>
  )
}

export default CreatePlan
