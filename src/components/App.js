import '../styles/App.scss';
import logoAdaCards from '../images/logo-AdaCards.png';
import logoAdalab from '../images/logo-adalab.png';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setData({ ...data, [inputName]: inputValue });
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setData({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
  };
  const handleClickFetch = () => {
    fetchApi().then((responseData) => {
      setStarWarsData(responseData);
    });
  };

  return;
  //FALTA que al clickar la paleta cambie de color
  const changePalette = (ev) => {
    //   cardDisplayContainer.classList.remove ('palette1');
    //   cardDisplayContainer.classList.remove ('palette2');
    //   cardDisplayContainer.classList.remove ('palette3');
    //   cardDisplayContainer.classList.add(`palette${ev.currentTarget.value}`);
  };

  return (
    <div>
      <header className="headerCreate">
        <a href="./index.html">
          <img
            className="headerCreate__img"
            src={logoAdaCards}
            alt="logo Awesome profile cards"
            title="logo Awesome profile cards"
          />
        </a>
      </header>
      <main className="mainCreate">
        <section className="cardDisplay">
          <button
            className="js-resetBtn cardDisplay__reset"
            onClick={handleReset}
          >
            <i className="fa-solid fa-trash-can"></i> Reset
          </button>
          <div className="js-cardDisplay__card cardDisplay__card">
            <div className="js-titleWrap titleWrap titleWrapColor">
              <h1 className="nameCardColor js-nameCard cardDisplay__card--name">
                {data.name ? data.name : 'Nombre Apellido'}
              </h1>
              <h3 className="js-careerCard cardDisplay__card--profesion">
                {data.job || 'Front-end developer'}
              </h3>
            </div>
            <div className="js__profile-image cardDisplay__card--photo"></div>
            <ul className="cardDisplay__card--iconList">
              <li className="cardListElement">
                <a
                  className={
                    'iconColor cardListElement__icon telf ' +
                    (data.phone ? '' : 'not-active')
                  }
                  href={`tel:${data.phone}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-mobile-screen icon"></i>
                </a>
              </li>
              <li className="cardListElement">
                <a
                  className={
                    'iconColor cardListElement__icon email ' +
                    (data.email ? '' : 'not-active')
                  }
                  href={`mailto:${data.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </li>
              <li className="cardListElement">
                <a
                  className={
                    'iconColor cardListElement__icon linkedin ' +
                    (data.linkedin ? '' : 'not-active')
                  }
                  href={
                    !data.linkedin
                      ? ''
                      : `https://www.linkedin.com/in/${data.linkedin}`
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in icon-dots icon"></i>
                </a>
              </li>
              <li className="cardListElement">
                <a
                  className={
                    'iconColor cardListElement__icon github ' +
                    (data.github ? '' : 'not-active')
                  }
                  href={!data.github ? '' : `https://github.com/${data.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github-alt icon-dots icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <form className="form" action="" method="post">
          <fieldset className="fieldset">
            <legend className="js-containerLegend containerLegend">
              <div className="legend__tab">
                <i className="fa-solid fa-object-ungroup legend__tab--icon"></i>
                <h2 className="legend__tab--title">Diseña</h2>
              </div>
              <i className="js-upArrowArray js-upArrow fa-solid fa-chevron-up legend__tab--arrow"></i>
            </legend>
            <div className="js-container palettes js-palettes">
              <label className="palettes__text" htmlFor="color">
                Colores
              </label>
              <div className="palettes__options">
                <div className="aqua colorContainer">
                  <input
                    className="js-palette1 inputColor"
                    checked={data.palette === '1'}
                    type="radio"
                    id="color1"
                    name="palette"
                    value="1"
                    onChange={handleInput}
                  />
                  <div className="colorBox aqua-1"></div>
                  <div className="colorBox aqua-2"></div>
                  <div className="colorBox aqua-3"></div>
                </div>
                <div className="red colorContainer">
                  <input
                    className="js-palette2 inputColor"
                    checked={data.palette === '2'}
                    type="radio"
                    id="color2"
                    name="palette"
                    value="2"
                    onChange={handleInput}
                  />
                  <div className="colorBox red-1"></div>
                  <div className="colorBox red-2"></div>
                  <div className="colorBox red-3"></div>
                </div>
                <div className="blueandbeige colorContainer">
                  <input
                    className="js-palette3 inputColor"
                    checked={data.palette === '3'}
                    type="radio"
                    id="color3"
                    name="palette"
                    value="3"
                    onChange={handleInput}
                  />
                  <div className="colorBox blueandbeige-1"></div>
                  <div className="colorBox blueandbeige-2"></div>
                  <div className="colorBox blueandbeige-3"></div>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="js-fieldsetFill fieldset">
            <legend className="js-containerLegend js-containerLegendFill containerLegend">
              <div className="legend__tab">
                <i className="fa-regular fa-keyboard legend__tab--icon"></i>
                <h2 className="legend__tab--title">Rellena</h2>
              </div>
              <i className="rotate js-upArrowArray js-upArrow1 fa-solid fa-chevron-up legend__tab--arrow"></i>
            </legend>
            <div className="js-container js-form__contact form__contact {/*hide*/}">
              <label className="form__contact--label" htmlFor="name">
                Nombre completo
              </label>
              <input
                className="js-name form__contact--input"
                type="text"
                id="name"
                name="name"
                placeholder="Ej:Saily Jill"
                required
                onInput={handleInput}
                value={data.name}
              />
              <label className="form__contact--label" htmlFor="text">
                Puesto{' '}
              </label>
              <input
                className="js-career form__contact--input"
                type="text"
                id="text"
                name="job"
                placeholder="Ej: Front-end unicorn"
                required
                onInput={handleInput}
                value={data.job}
              />
              <label className="form__contact--label" htmlFor="text">
                Imagen de perfil
              </label>
              <div className="form__contact--div">
                <label className="form__contact--btn" htmlFor="photo">
                  Añadir imagen{' '}
                </label>
                <input
                  className="js__profile-upload-btn hide"
                  type="file"
                  // TODO: añadir value de la foto
                  name="photo"
                  id="photo"
                />
                <div className="js__profile-preview form__contact--square"></div>
              </div>
              <label className="form__contact--label" htmlFor="email">
                Email{' '}
              </label>
              <input
                className="js-mailInput form__contact--input"
                type="email"
                id="email"
                name="email"
                placeholder="Ej: sally.hill@gamil.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                onInput={handleInput}
                value={data.email}
              />
              <label className="form__contact--label" htmlFor="tel">
                {' '}
                Teléfono
              </label>
              <input
                className="js-telInput form__contact--input"
                type="tel"
                id="tel"
                name="phone"
                pattern="^[0-9]{9}$"
                placeholder="Ej: 555-55-55-55"
                required
                onInput={handleInput}
                value={data.phone}
              />
              <label className="form__contact--label" htmlFor="text">
                {' '}
                Linkedin
              </label>
              <input
                className="js-linkedinInput form__contact--input"
                type="text"
                id="text"
                name="linkedin"
                placeholder="Ej: sally-hill"
                required
                onInput={handleInput}
                value={data.linkedin}
              />
              <label className="form__contact--label" htmlFor="text">
                {' '}
                Github
              </label>
              <input
                className="js-githubInput form__contact--input"
                type="text"
                id="text"
                name="github"
                placeholder="Ej: sallyhill"
                required
                onInput={handleInput}
                value={data.github}
              />
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="js-containerLegend js-containerLegendShare containerLegend">
              <div className="legend__tab">
                <i className="fa-solid fa-share-nodes legend__tab--icon"></i>
                <h2 className="legend__tab--title">Comparte</h2>
              </div>
              <i className="rotate js-upArrowArray js-upArrow2 fa-solid fa-chevron-up legend__tab--arrow"></i>
            </legend>
            <div className="js-container js-containerCreate shareTwitter shareTwitter1 {/*hide*/}">
              <button
                className="js-btn-create shareTwitter__buttoncreate btnOrange"
                type="button"
                title="¡Crea tu tarjeta!"
              >
                <i className="fa-regular fa-address-card shareTwitter__buttoncreate--icon"></i>
                <span className="shareTwitter__buttoncreate--text">
                  Crear tarjeta
                </span>
              </button>
            </div>
            <div className="js-shareTwitter shareTwitter {/*hide*/} shareTwitter2">
              <h4 className="shareTwitter__text">La tarjeta ha sido creada:</h4>
              <a
                className="js-cardLink shareTwitter__link"
                title="¡Aquí tienes tu tarjeta!"
                href=""
                target="_blank"
              ></a>
              <a
                className="js-twitterBtn shareTwitter__buttonshare"
                title="Tu tarjeta en un tweet"
                href=""
                target="_blank"
              >
                <i className="fa-brands fa-twitter shareTwitter__buttonshare--icon"></i>
                <span className="shareTwitter__buttonshare--text">
                  Compartir en twitter
                </span>
              </a>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className="landingFooter">
        <a
          className="landingFooter__text"
          href="https://twitter.com/ChamaleonGirls"
          title="@ChamaleonGirls"
          target="_blank"
        >
          Chamaleon Girls @2022
        </a>
        <a href="https://adalab.es/" title="Adalab" target="_blank">
          <img
            className="landingFooter__logo"
            src={logoAdalab}
            alt="logo de adalab"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
