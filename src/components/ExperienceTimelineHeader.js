import React from 'react';
import moment from 'moment';

const ExperienceTimelineHeader = ({ event }) => {
  let Header = <div />;

  if (event.extras.type === 'employment' && event.extras.employment) {
    const startDate = moment(event.extras.employment.startDate).format('MMMM YYYY');
    const { position, company } = event.extras.employment;
    const title = company === 'Self-Employed'
      ? `${company} ${position}`
      : company;

    Header = company === 'Self-Employed'
      ? <div>
        <h2>{title}</h2>
        <p>Founded Business in {startDate}</p>
      </div>
      : <div>
        <h2>{title}</h2>
        <p>Started Working as {position} in {startDate}</p>
      </div>;
  }

  if (event.extras.type === 'publication' && event.extras.publication) {
    const releaseDate = moment(event.extras.publication.releaseDate).format('MMMM YYYY');
    const { name, publisher } = event.extras.publication;
    Header = (<div>
      <h2>{name} for {publisher}</h2>
      <p>Published in {releaseDate}</p>
    </div>);
  }

  return Header;
};

const { shape } = React.PropTypes;
ExperienceTimelineHeader.propTypes = {
  event: shape().isRequired,
};

ExperienceTimelineHeader.defaultProps = {
  event: {
    extras: {},
  },
};

export default ExperienceTimelineHeader;
