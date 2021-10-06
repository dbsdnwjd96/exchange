// eslint-disable-next-line
import './App.css';
import './components/css/reset.css'
import GlobalStyles from './components/layout/globalStyle';
//Connect Router
import { Route, Switch } from "react-router-dom";
//라우터 연결 Components
import Home from './components/home';
import Exchange from './components/exchange';
import Findway from './components/findway';
import Faq from './components/faq';
import Mypage from './components/mypage';
import Currency from './components/currency';

import ExchangeDetails1 from './components/exchange_inner/exc_datails1';
import ExchangeDetails2 from './components/exchange_inner/exc_details2';
import ExchangeSignup1 from './components/exchange_inner/exc_signup1';
import ExchangeSignup2 from './components/exchange_inner/exc_signup2';
import ManagerChk from './components/exchange_inner/manger_chk';




function App() {
  return (
    <div className="App">
      <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/exchange" component={Exchange} />
          <Route path="/findway" component={Findway} />
          <Route path="/faq" component={Faq} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/currency" component={Currency} />

          <Route path="/exc_datails1" component={ExchangeDetails1} />
          <Route path="/exc_datails2" component={ExchangeDetails2} />
          <Route path="/exc_signup1" component={ExchangeSignup1} />
          <Route path="/exc_signup2" component={ExchangeSignup2} />
          <Route path="/manager_chk" component={ManagerChk} />

        </Switch>

    </div>
  );
}

export default App;
