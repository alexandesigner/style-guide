/*
 *
 * @ Block.jsx - v0.0.1
 *
*/


/*
 * @ Imports Components
*/
import React from 'react';

/*
 * @ Block Component
*/
class Block extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

/*
 * @ Exports Global
*/
export default Block;
