import Menu from '../Menu/Menu'
import './styles.scss'

function NavBar(props) {
  const { image, title } = props;

  return (
    <>
      <div className="navbar">
        <div className="navbar-title">
          <img src={image} />
          <h1 className="font-h2">
            {title}
          </h1>
        </div>
        <Menu />
      </div>
    </>
  )
}

export default NavBar
