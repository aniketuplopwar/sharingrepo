import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PropTypes from 'prop-types';

const ExpandCollapseBody = ({ children }) => {
  return (
    <Panel.Body>
      {children}
    </Panel.Body>
  );
}

ExpandCollapseBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
}

export default ExpandCollapseBody;