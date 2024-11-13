import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import PropTypes from 'prop-types';
import Priceoptions from "./Components/Priceoptions/Priceoptions";

function App() {
  return (
    <>
      <h1 className="text-7xl bg-red-500">Vite + React</h1>
      <Navbar></Navbar>
      <Priceoptions></Priceoptions>
    </>
  );
}

export default App;
