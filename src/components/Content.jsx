/*
 *
 * @ Content.jsx - v0.0.1
 *
*/


/*
 * @ Imports Components
*/
import React from 'react';

/*
 * @ Content Component
*/
class Content extends React.Component {
  render() {
    return (
      <main className="content">
        {this.props.children}
      </main>
    );
  }
}


/*
 * @ Exports Global
*/
export default Content;
