import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import PlaybarContainer from './playbar/playbar_container';
import Footer from './footer/footer';

class App extends React.Component {

  render() {
    const renderPlaybar = () => {
      if (this.props) {
        if (this.props.state.playbar.display) {
          return (
            <PlaybarContainer playbar={this.props.state.playbar} />
          );
        }
      }
    };

    return (
      <div className='app'>
        <NavbarContainer session={this.props.state.session} />

        { this.props.children }

        <Footer />
        { renderPlaybar() }
      </div>
    );
  }
}

export default App;
