import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <header>
        <Header />
      </header> */}

      <Dashboard />

      {/* <footer>
        <Footer />
      </footer> */}
      
    </div>
  );
}

export default App;
