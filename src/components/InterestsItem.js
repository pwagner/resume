import React from 'react';

const InterestsItem = ({ name }) => (
  <div className="interests-item">
    {name}
  </div>
);

const { string } = React.PropTypes;
InterestsItem.propTypes = {
  name: string.isRequired,
};

export default InterestsItem;
