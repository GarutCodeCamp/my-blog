import './App.css';
import Login from './Page/Login';
import {BrowserRouter, Route} from "react-router-dom"
import Register from './Page/Register';
import Forgot from './Page/Forgot';
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register} />
      <Route path="/forgot-pasword" component={Forgot} />
    </BrowserRouter>
  );
}

export default App;
