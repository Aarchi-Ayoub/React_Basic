import logo from './logo.svg';
import './App.css';
import Clients from './components/clients/Clients';
import { Provider } from './components/clients/Context';
import AddClient from './components/clients/AddClient';
import Navbar from './components/clients/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Apropos from './components/clients/Apropos';
import NotFound from './components/clients/NotFound';
import EditClient from './components/clients/EditClient';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Clients} />
            <Route exact path='/Ajouter' component={AddClient} />
            <Route exact path='/Apropos' component={Apropos} />
            <Route exact path='/Editer/:id' component={EditClient} />
            <Route component={NotFound} />
          </Switch>      
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
