import './App.css';
import Login from './Page/Login';
import {BrowserRouter, Route} from "react-router-dom"
import Register from './Page/Register';
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
