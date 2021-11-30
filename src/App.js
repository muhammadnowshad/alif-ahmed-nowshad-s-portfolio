import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Swiper from 'swiper';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Notfound/NotFound';
import DetailProject from './Pages/Projects/DetailProject/DetailProject';
import Projects from './Pages/Projects/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import Footer from './Pages/Shared/Footer/Footer';
import Navber from './Pages/Shared/Navber/Navber';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navber></Navber>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/resume'>
            <Resume></Resume>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/swipers'>
            <Swiper></Swiper>
          </Route>
          <Route exact path='/projects'>
            <Projects></Projects>
          </Route>
          <Route exact path='/detailProject/:projectId'>
            <DetailProject></DetailProject>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
