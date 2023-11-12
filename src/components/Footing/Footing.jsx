import { Link } from 'react-router-dom';
import './styles.scss'
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'

const links = (
  <ul>
    <li>
      <Link className="nav-menu" to="/">HOME</Link>
    </li>
    <li>
      <Link className="nav-menu" to="/about">ABOUT US</Link>
    </li>
    <li>
      <Link className="nav-menu" to="/create-plan">CREATE YOUR PLAN</Link>
    </li>
  </ul>
)

function Footing(props) {
  const { image, title } = props;

  return (
    <>
      <div className="footing">
        <div className="footing-title">

          <div className="footing-title-name">
            <img src={image} />
            <h1 className="font-h3">
              {title}
            </h1>
          </div>

          <div className="footing-title-links">
            {links}
          </div>

        </div>

        <div className="footing-social">

          <img src={Facebook} />
          <img src={Twitter} />
          <img src={Instagram} />

        </div>
      </div>
    </>
  )
}

export default Footing
