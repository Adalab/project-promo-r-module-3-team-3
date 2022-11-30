import Header from "./Header";
import Footer from "./Footer";
import CardDisplay from "./CardDisplay";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Card(prop) {
  return (
    <>
      <Header />
      <main className="mainCreate">
        <CardDisplay
          data={prop.data}
          handleReset={prop.handleReset}
          palette={prop.palette}
        />
        <form className="form" action="" method="post">
          <Design
            data={prop.data}
            handleInput={prop.handleInput}
            setPalette={prop.setPalette}
          />
          <Fill data={prop.data} handleInput={prop.handleInput} />
          <Share
            apiCard={prop.apiCard}
            handleClickFetch={prop.handleClickFetch}
          />
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Card;
