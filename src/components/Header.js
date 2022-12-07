import { NavLink } from 'react-router-dom';
import logoAdaCards from '../images/logo-AdaCards.png';
function Header() {
return (<header className="headerCreate">
        <NavLink to="/">
          <img
            className="headerCreate__img"
            src={logoAdaCards}
            alt="logo Awesome profile cards"
            title="logo Awesome profile cards"
          />
        </NavLink>
      </header>)
    }

export default Header