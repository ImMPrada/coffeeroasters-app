import './styles.scss'
import logo from '../../assets/logo.svg'
import NavBar from '../NavBar/NavBar.jsx'
import Footing from '../Footing/Footing.jsx'

const title = "Coffeeroasters";

function Template(props) {
  const { children } = props;

  return (
    <>
      <NavBar
        title = {title}
        image = {logo}
      />
      {children}
      <Footing
        image = {logo}
        title = {title}
      />
    </>
  )
}

export default Template
