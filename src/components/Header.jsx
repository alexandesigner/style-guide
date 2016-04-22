/*
 *
 * @ Header.jsx - v0.0.1
 *
*/


/*
 * @ Imports Components
*/
import React from 'react';

/*
 * @ Header Component
*/
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {this.props.children}
      </header>
    );
  }
}

/*
 * @ Exports Global
*/
export default Header;
