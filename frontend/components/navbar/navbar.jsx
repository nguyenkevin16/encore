import React from 'react';

import NavbarRight from './navbar_right';
import NavbarLeft from './navbar_left';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(() => {
      let header = $('.navbar');

      $(window).scroll(() => {
        let scroll = $(window).scrollTop();

        if (scroll >= 200) {
          header.removeClass('noBackground').addClass('headerBackground').fadeIn();
        } else {
          header.removeClass('headerBackground').addClass('noBackground');
        }
      });
    });
  }

  render() {
    const { logout, loggedIn, currentUser, errors, clearErrors } = this.props;

    return (
      <div className='navbar'>
        <NavbarLeft/>
        <NavbarRight
          logout={ logout }
          loggedIn={ loggedIn }
          currentUser={ currentUser }
          errors={ errors }
          clearErrors={clearErrors}/>
      </div>
    )
  }
};

export default Navbar;
