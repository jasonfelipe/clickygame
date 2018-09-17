import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Game from "./pages/game"


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path='/' component={Game} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
