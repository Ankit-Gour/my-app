
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Notification from './Components/Notification';

function App() {
  return (
    <>
    <Home jumbotronHeading="We invest in the world’s potential"/>
    <Notification/>
        <Navbar/>
    </>
  );
}

export default App;
