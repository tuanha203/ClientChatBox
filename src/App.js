import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

import './App.css'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Join}></Route>
      <Route exact path='/chat' component={Chat}></Route>
    </Router>
  );
}

export default App;
