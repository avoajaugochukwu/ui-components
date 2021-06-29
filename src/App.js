import './App.css';

import HomeScreen from './screens/HomeScreen'
import Trafalgar from './screens/trafalgar/Trafalgar'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={HomeScreen}></Route>
      <Route exact path="/Trafalgar" component={Trafalgar}></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
