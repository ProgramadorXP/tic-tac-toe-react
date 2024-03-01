import { faX, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <div className="bg-teal-950 hidden flex-col gap-4 py-8 absolute z-10 w-full top-1/3">
        <div>
          <p className="text-white font-bold tracking-wider text-center">
            YOU WON!
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center text-teal-500 font-extrabold">
          <FontAwesomeIcon icon={faX} className="text-4xl" />
          <h1 className="text-3xl">TAKES THE ROUND</h1>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-gray-300 px-2 rounded-lg py-1 font-semibold transition-all ease-out duration-300 hover:bg-gray-50">
            QUIT
          </button>
          <button className=" bg-yellow-500 px-2 rounded-lg py-1 font-semibold transition-all ease-out duration-300 hover:bg-yellow-500">
            NEXT ROUND
          </button>
        </div>
      </div>
      {/*CONTENEDOR GAME*/}
      <div>
        <header className="flex justify-between items-center">
          <div className="text-5xl flex gap-2 font-extrabold">
            <p className="text-teal-500">X</p>
            <p className="text-yellow-500">O</p>
          </div>
          <div className="flex items-center gap-2 text-gray-300 bg-teal-900 px-3 rounded-lg shadow-md shadow-gray-950">
            <p className="text-3xl font-extrabold">X</p>
            <p className="font-bold text-2xl">TURN</p>
          </div>
          <div className="flex">
            <button className="bg-gray-300 py-3 px-4 rounded-lg shadow-md shadow-gray-950 flex justify-center items-center">
              <FontAwesomeIcon icon={faRotateRight} className="text-xl" />
            </button>
          </div>
        </header>
        <main className="grid grid-cols-3 gap-4 mt-16 mb-10">
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-teal-500 font-extrabold">X</button>
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-teal-500 font-extrabold">X</button>
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-yellow-500 font-extrabold">O</button>
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-teal-500 font-extrabold">X</button>
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-yellow-500 font-extrabold">O</button>
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-teal-500 font-extrabold">X</button>
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-yellow-500 font-extrabold">O</button>
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-yellow-500 font-extrabold">O</button>
          <button className="bg-teal-900 rounded-lg w-32 h-28 shadow-md shadow-gray-950 text-6xl text-teal-500 font-extrabold">X</button>          
        </main>
        <footer className="grid grid-cols-3 gap-4">
          <div className="rounded-lg w-32 h-20 bg-teal-500 flex flex-col justify-center items-center font-semibold">
            <p>X (YOU)</p>
            <p className="font-extrabold text-2xl">14</p>
          </div>
          <div className="rounded-lg w-32 h-20 bg-gray-400 flex flex-col justify-center items-center font-semibold">
            <p>TIES</p>
            <p className="font-extrabold text-2xl">14</p>
          </div>
          <div className="rounded-lg w-32 h-20 bg-yellow-500 flex flex-col justify-center items-center font-semibold">
            <p>O (CPU)</p>
            <p className="font-extrabold text-2xl">14</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
