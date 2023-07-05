import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Skills/>
        <Portfolio/>
        <Resume/>
        {/* <Testimonial/> */}
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
