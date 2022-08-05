import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <News/>
      <Footer />
    </>
  );
}

export default App;
