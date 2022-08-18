import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './component/header/Header';
import Footer from './component/footer/Footer';

import Routed from './config/Routed';

function App() {
  return (
    <BrowserRouter>
      <Route render={props => (
          <>
              <Header {...props}/>
              <Routed/>
              <Footer/>
          </>
      )}/>
    </BrowserRouter>
  );
}

export default App;
