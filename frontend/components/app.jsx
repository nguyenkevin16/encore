// import React from 'react';
// import NavbarContainer from './navbar/navbar_container';
// import PlaybarContainer from './playbar/playbar_container';
// import Footer from './footer/footer';
//
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//
// class App extends React.Component {
//
//   render() {
//     const page = this.props.location.pathname.substr(1);
//
//     return (
//       <div className='app'>
//         <NavbarContainer session={this.props.state.session} />
//
//         <ReactCSSTransitionGroup
//           transitionName="main"
//           transitionEnterTimeout={0}
//           transitionLeaveTimeout={0}>
//
//           { React.cloneElement(this.props.children, {key: page}) }
//
//         </ReactCSSTransitionGroup>
//
//         <Footer />
//         <PlaybarContainer playbar={this.props.state.playbar} />
//       </div>
//     );
//   }
// }
//
// export default App;

import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import PlaybarContainer from './playbar/playbar_container';
import Footer from './footer/footer';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <NavbarContainer session={this.props.state.session} />

        { this.props.children }

        <Footer />
        <PlaybarContainer playbar={this.props.state.playbar} />
      </div>
    );
  }
}

export default App;
