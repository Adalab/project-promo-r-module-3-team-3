import '../styles/App.scss';
import fetchApi from '../services/api';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import CardDisplay from './CardDisplay';
import Design from './Design';
import Fill from './Fill';

function App() {
  const [data, setData] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: 'https://picsum.photos/200/300',
  });

  const [palette, setPalette] = useState('palette1');

  const [apiCard, setApiCard] = useState({});

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
    setPalette('palette1');
  };

  const handleClick = (ev) => {
    setPalette(`palette${ev.currentTarget.value}`)
  };
  
  const handleClickFetch = () => {
    fetchApi(data).then((responseData) => {
      setApiCard(responseData);
    });
  };


  return (
    <div>
    <Header />
      <main className="mainCreate">
        <CardDisplay data={data} handleReset={handleReset} palette={palette}/>
        <form className="form" action="" method="post">
        <Design data={data} handleInput={handleInput} handleClick={handleClick}/>
         <Fill data={data} handleInput={handleInput}/>
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
                onClick={handleClickFetch}
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
                href={apiCard.success && apiCard.cardURL}
                target="_blank"
                rel="noreferrer"
              >{apiCard.success ? apiCard.cardURL : apiCard.error}</a>
              <a
                className="js-twitterBtn shareTwitter__buttonshare"
                title="Tu tarjeta en un tweet"
                href=""
                target="_blank"
                rel="noreferrer"
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
      <Footer />
    </div>
  );
}

export default App;
