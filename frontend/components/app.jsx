import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Footer from './footer/footer';

const App = (props) => (
  <div>
    <NavbarContainer session={props.state.session} />
    { props.children }
    <Footer />
  </div>
);

export default App;
