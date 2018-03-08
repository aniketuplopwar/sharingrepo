import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ExpandCollapse from './expand-collapse/ExpandCollapse';
import ExpandCollapseHeader from './expand-collapse/ExpandCollapseHeader';
import ExpandCollapseBody from  './expand-collapse/ExpandCollapseBody';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1> Expand Collapse</h1>
        <ExpandCollapse>
        
        <ExpandCollapseHeader excludeIcon={true}> 
          <div className="exp-header">heading</div>
        </ExpandCollapseHeader>
        <ExpandCollapseBody>
          footer
        </ExpandCollapseBody>
        </ExpandCollapse>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
