import logoAdaCards from '../images/logo-AdaCards.png';
function Header() {
return (<header className="headerCreate">
        <a href="./index.html">
          <img
            className="headerCreate__img"
            src={logoAdaCards}
            alt="logo Awesome profile cards"
            title="logo Awesome profile cards"
          />
        </a>
      </header>)
    }

export default Header