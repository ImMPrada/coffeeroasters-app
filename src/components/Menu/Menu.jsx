import { useState } from 'react';
import './styles.scss'
import MenuOpenIcon from '../../assets/menu-open-button.svg'
import MenuCloseIcon from '../../assets/menu-close-button.svg'

function Menu() {
  const [menuToggle, setMenuToogle] = useState(false);
  
  const toogleMenu = () => {
    setMenuToogle(!menuToggle)
  }

  const menuUl = (
    <ul>
      <li>
        <a className="nav-menu" href="/">HOME</a>
      </li>
      <li>
        <a className="nav-menu" href="/about">ABOUT US</a>
      </li>
      <li>
        <a className="nav-menu" href="/create-plan">CREATE YOUR PLAN</a>
      </li>
    </ul>
  )

  return (
    <>
      <div className="menu">
        <nav className="hidden-at-sm">
          {menuUl}
        </nav>
        <div className="show-at-sm" onClick={toogleMenu}>
          <img src={menuToggle ? MenuCloseIcon : MenuOpenIcon} alt="" />
        </div>
      </div>
      {
        menuToggle ? (
          <div className="show-at-sm menu-toogle" onClick={toogleMenu}>
            <nav>
              {menuUl}
            </nav>
          </div>
        ) : (null)
      }
    </>
  )
}

export default Menu
