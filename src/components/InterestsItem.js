import React from 'react';

const InterestsItem = ({ name }) => (
  <div className="interests-item">
  {(
    () => {
      switch (name) {
        case 'Family':
          return (
            <img src="/dist/images/family.png" alt={name} />
          );
        case 'Jiu Jitsu':
          return (
            <img src="/dist/images/jiujitsu.png" alt={name} />
          );
        case 'Podcasts':
          return (
            <img src="/dist/images/podcasts.png" alt={name} />
          );
        case 'Science Fiction':
          return (
            <img src="/dist/images/scifi.png" alt={name} />
          );
        default: return <span className="hidden">No image for {name}</span>;
      }
    }
  )()}
    <div>{name}</div>
  </div>
);

const { string } = React.PropTypes;
InterestsItem.propTypes = {
  name: string.isRequired,
};

export default InterestsItem;
