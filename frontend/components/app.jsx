import React from 'react';
import NavbarContainer from './navbar/navbar_container';

const App = (props) => (
  <div>
    <NavbarContainer session={props.state.session} />
    { props.children }
  </div>
);

export default App;
