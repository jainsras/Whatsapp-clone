// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {

  // const [user, setuser] = useState(null);

  return (
    //BEM naming convention
    <div className="app">
      {/* <h1>Let's build a whatsapp clone</h1> */}
      <div className="app__body">

        <Router>
        <Sidebar/>
        <Switch>
       
        <Route path='/rooms/:roomId'>
        <Chat/>
        </Route>
        <Route path='/'>
          <Chat/>
        </Route>
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
