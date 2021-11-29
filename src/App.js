import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
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
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
