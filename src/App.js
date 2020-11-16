import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import { Route } from 'react-router-dom';
import { Main, MyPage, Login, SignUp } from 'pages';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/mypage" component={MyPage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
