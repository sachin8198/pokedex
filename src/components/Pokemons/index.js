function Pokemons({
  name,
  imgUrl,
  types,
  handleOpenModal,
  moves,
  weight,
  height,
  handleDetails,
}) {
  return (
    <>
      <div className="max-w-xs mx-auto md:mx-0 my-6  rounded overflow-hidden shadow-lg transition ease-in-out delay-150 bg-black text-white hover:-translate-y-1 hover:scale-110  duration-300">
        <img className="w-full" src={imgUrl} alt={name} />
        <div className="flex justify-between items-center mx-2 ">
          <button
            className=" text-white bg-blue-800 p-1 rounded-sm"
            onClick={() => handleOpenModal(moves.map(({ move }) => move.name))}
          >
            moves
          </button>

          <button
            className=" text-white bg-blue-800 p-1 rounded-sm ml-2"
            onClick={() => handleDetails(weight, height, name, imgUrl)}
          >
            more
          </button>
        </div>

        <div className=" flex items-center gap-3 pl-3">
          <p>Type : </p>
          <div>
            {types.map(({ type }, i) => (
              <p key={i} className=" text-red-500">
                {type.name}
                <button>moves</button>
              </p>
            ))}
          </div>
        </div>
        <div className="px-6 py-4">
          <h4 className="font-bold text-xl mb-2">{name}</h4>
        </div>
      </div>
    </>
  );
}

export default Pokemons;
