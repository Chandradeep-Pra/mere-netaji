import "./styles.css";
import Nav from "./components/Nav.jsx";
import Title from "./components/Title.jsx";
import VoterInput from "./components/VoterInput.jsx";
import Indiamap from "./components/Indiamap.jsx";
export default function App() {
  return (
    <div>
      <Nav />
      <Title name="আমার নেতা জি" />
      <div className="grid grid-cols-12 gap-2 p-4 bg-gray-100 sm:justify-center sm:items-center">
        <Indiamap />
        <VoterInput />
        <div className="col-span-12 flex justify-center border border-2 items-center">
          <button
            type="button"
            className="m-30 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full sm:w-1/6 lg:w-2/6"
          >
            Genreate
          </button>
        </div>
      </div>
    </div>
  );
}
