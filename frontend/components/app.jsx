import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash';

const App = (props) => (
  <div>
    <NavbarContainer session={props.state.session} />
    <Splash />
    { props.children }
  </div>
);

export default App;
