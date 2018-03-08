import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import ExpandCollapseHeader from './ExpandCollapseHeader';
import ExpandCollapseBody from './ExpandCollapseBody';
import './expandCollapse.css';

export default class ExpandCollapse extends React.Component{
    constructor(){
      super();
      this.state = this.getDefaultState();
    }
    
    getDefaultState(){
      return {
        isExpanded: false
      }
    }

    handleClick(){
      this.setState({
        isExpanded: !this.state.isExpanded
      })
    }

    prepareChildren(children){
      let elements = {};
      const ChildrenTypes = [ExpandCollapseHeader,ExpandCollapseBody];
      React.Children.forEach(children,  (child) =>{
        if(ChildrenTypes.indexOf(child.type) > -1){
          switch(child.type){
            case ExpandCollapseHeader: 
              elements.header = this.prepareHeader(child);
              break;
            case ExpandCollapseBody: 
              elements.footer = child;
              break;
          }

        }
      });
      return elements;
    }

    prepareHeader(child){
       return React.cloneElement(child, {
            handleClick: this.handleClick.bind(this),
            isExpanded: this.state.isExpanded,
            ...child.props
          });
    }

    render(){
      let {header,footer} = this.prepareChildren(this.props.children);
      return (
        <Panel className="exp-col">
              {header}
              { this.state.isExpanded ? footer : ""}
        </Panel>
      );
    }
}

ExpandCollapse.propTypes = {
  children:  (props, propName, componentName)=> {
    const prop = props[propName];
    const typesAllowed = [ExpandCollapseHeader, ExpandCollapseBody]

    let error = null;
    React.Children.forEach(prop, function (child) {
      console.log('type checking');
      if (typesAllowed.indexOf(child.type) === -1) {
      console.log('type check failed');
       return new Error('`' + componentName + '` children should be of type `ExpandCollapseHeader or ExpandCollapseFooter`.');
      
      }
    });
    return error
  }

}