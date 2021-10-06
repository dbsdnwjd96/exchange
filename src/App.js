// eslint-disable-next-line
import './App.css';
import './components/css/reset.css'
//Connect Router
import { Route, Switch } from "react-router-dom";
//라우터 연결 Components
import Home from './components/home';
import Exchange from './components/exchange';
import Findway from './components/findway';
import Faq from './components/faq';
import Mypage from './components/mypage';
import Currency from './components/currency';






function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/exchange" component={Exchange} />
          <Route path="/findway" component={Findway} />
          <Route path="/faq" component={Faq} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/currency" component={Currency} />
        </Switch>

    </div>
  );
}

export default App;
