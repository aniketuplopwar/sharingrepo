import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PropTypes from 'prop-types';

const ExpandCollapseHeader = ({ children,
  handleClick,
  isExpanded,
  excludeIcon,
  classes }) => {
  let headerContent = (<div onClick={handleClick}>{children}</div>)
  if (!excludeIcon) {
    headerContent = (
      <div className="row">
        <div className="col-xs-10">
          {children}
        </div>
        <div className="col-xs-2" onClick={handleClick}>
          {isExpanded ? 'close' : 'open'}
        </div>
      </div>
    );
  }

  return (
    <Panel.Heading className={classes}>
      {headerContent}
    </Panel.Heading>
  );
}

ExpandCollapseHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  handleClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  excludeIcon: PropTypes.bool,
  classes: PropTypes.string
};

ExpandCollapseHeader.defaultProps = {
  excludeIcon: false,
  classes: ''
}

export default ExpandCollapseHeader;