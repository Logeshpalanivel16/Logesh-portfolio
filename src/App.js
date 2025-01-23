import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Nav } from './Layouts/Navbar';
import { PortfolioFooter } from './Layouts/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';

function App() {
  return (
    <div className="App">

      <>
      <Nav />
      <AllRoutes />
      <PortfolioFooter />
      <ScrollToTopButton />
      </>
    </div>
  );
}

export default App;
