import './App.css';
import About from './components/About';
import Gif from './components/Gif';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Cards from './components/Cards';


function App() {
  return (
    <div className="App">
      <Gif/>
      <Nav/>
      <About/>
      <Experience/>
      <Cards/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
