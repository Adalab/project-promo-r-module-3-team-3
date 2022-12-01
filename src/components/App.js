import "../styles/App.scss";
import fetchApi from "../services/api";
import { useState } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState({
    palette: "1",
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "https://picsum.photos/200/300",
  });

  const [palette, setPalette] = useState("palette1");

  const [apiCard, setApiCard] = useState({});
  const [isDesignOpen, setIsDesignOpen] = useState(true);
  const [isFillOpen, setIsFillOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleInput = (dataInfo) => {
    setData({ ...data, [dataInfo.name]: dataInfo.value});
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setData({
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    setPalette("palette1");
  };

  const handleClickFetch = () => {
    fetchApi(data).then((responseData) => {
      setApiCard(responseData);
    });
  };

  const handleClickSection = (ev) => {
    const clickedId = ev.currentTarget.id;
    if(clickedId === '1') {
      setIsDesignOpen(true);
      setIsFillOpen(false);
      setIsShareOpen(false);
    } else if (clickedId === '2') {
      setIsDesignOpen(false);
      setIsFillOpen(true);
      setIsShareOpen(false);
    } else if (clickedId === '3') {
      setIsDesignOpen(false);
      setIsFillOpen(false);
      setIsShareOpen(true);
    }
  }

  return (
    <div>
      <Card
        data={data}
        palette={palette}
        setPalette={setPalette}
        apiCard={apiCard}
        isDesignOpen={isDesignOpen}
        isFillOpen={isFillOpen}
        isShareOpen={isShareOpen}
        handleClickSection={handleClickSection}
        handleInput={handleInput}
        handleReset={handleReset}
        handleClickFetch={handleClickFetch}
      />
    </div>
  );
}

export default App;
