import "./App.css";
import Pokemons from "./components/Pokemons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "react-loader-spinner";
import ModalItem from "./components/ModalItem";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [urls, setUrls] = useState([]);
  const [moveNames, setMoveNames] = useState([]);
  const [details, setDetails] = useState({
    weight: 130,
    height: 10,
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
    name: "ivysaur",
  });

  const handleOpenModal = (moveName) => {
    setIsOpen(true);
    setMoveNames(moveName);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleDetails = (weight, height, name, imgUrl) => {
    setDetails({ weight, height, name, imgUrl });
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setNext(res.data.next);
        setPrev(res.data.prev);
        setUrls(res.data.results.map((item) => item.url));
      })
      .catch((er) => console.log(er));
  }, []);

  useEffect(() => {
    urls.map((url) =>
      axios
        .get(url)
        .then((res) => {
          setPokemon((data) => [...data, res.data]);
        })
        .catch((er) => console.log(er))
    );
  }, [urls]);

  return (
    <div
      className=" overflow-x-hidden min-h-screen bg-scroll"
      style={{
        backgroundImage: 'url("/images/bgimg.jpg")',
      }}
    >
      <div className="max-w-sm min-h-fit my-7 mx-auto  rounded  overflow-hidden shadow-lg bg-black text-white  duration-300">
        <img
          className=" w-48 h-auto mx-auto"
          src={details.imgUrl}
          alt="pokemon pic"
        />
        <p className="text-red">Height: {details.height}</p>
        <p className="text-red">Weight: {details.weight}</p>
        <p className="text-red">Name: {details.name}</p>
      </div>
      <div className=" h-[61vh] overflow-y-auto">
        <div className="md:grid grid-cols-6 gap-8 bg-center     ">
          {pokemon.length > 0 ? (
            pokemon.map((item, i) => (
              <Pokemons
                key={i}
                types={item.types}
                name={item.name}
                imgUrl={item.sprites.back_shiny}
                handleOpenModal={handleOpenModal}
                moves={item.moves}
                weight={item.weight}
                height={item.height}
                handleDetails={handleDetails}
              />
            ))
          ) : (
            <div className=" absolute top-[50%] left-[50%] ">
              <Grid color="yellow" height={80} width={80} />
            </div>
          )}
        </div>
      </div>

      <ModalItem
        moveNames={moveNames}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default App;
