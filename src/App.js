import logo from './logo.svg';
import './App.css';
import Header from './Landing Page/Header/Header';
import GetStarted from './Landing Page/GetStarted/GetStarted';
import Plans from './Landing Page/Plans/Plans';
import Reviews from './Landing Page/Reviews/Reviews';
import Footer from './Landing Page/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <Plans />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
