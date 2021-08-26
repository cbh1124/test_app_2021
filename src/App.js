import React from 'react';
//import Home from './routes/Home';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component = {Home}/> 
      <Route path='/about' component={About} /> 
      <Route path='/movie-detail' component={Detail}/>
    </HashRouter>
  );  /* localhost:3000/#/about */
  /*Route 컴포넌트에 전달한 path props를 보고 component props에 지정한 About 컴포넌트를 
  그려준거임 */
}

export default App; 


/*HashRouter와 Route 컴포넌트 사용하기 
HashRouter Route 컴포너트를 임포트한 다음 HashRouter 커포넌트가 
Route컴포넌트를 감싸 반환하도록 App.js를 수정하였다. */