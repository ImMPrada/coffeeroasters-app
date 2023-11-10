import './styles.scss'
import Bean from '../../assets/Bean.svg'
import NavBar from '../NavBar/NavBar.jsx'

function Template(props) {
  const { children } = props;

  return (
    <>
      <NavBar
        title = "Coffeeroasters"
        image = {Bean}
      />
      {children}
    </>
  )
}

export default Template
