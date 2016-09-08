import React from 'react';
import moment from 'moment';

const ExperienceTimelineTextBody = ({ event }) => {
  if (event.extras.type === 'employment' && event.extras.employment) {
    const startDate = moment(event.extras.employment.startDate).format('MMMM YYYY');
    const endDate = event.extras.employment.endDate
      ? moment(event.extras.employment.endDate).format('MMMM YYYY')
      : 'Present';
    const { summary, highlights, website, picture } = event.extras.employment;

    return (
      <div className="work-item employment">
        <p>
          {picture && <a href={website || '#'}>
            <img src={picture} alt={website} className="thumbnail pull-left company-logo" />
          </a>}
          {summary}
        </p>
        {website && <p className="work-website pull-left">
          <a href={website || '#'}>{website}</a>
        </p>}
        <p className="work-dates">
          <span className="startdate">{startDate} - {endDate}</span>
        </p>
        <ul className="list-inline">
        {
          highlights.sort().map((item, key) => (
            <li key={key}>
              <span className="label label-default">{item}</span>
            </li>
          ))
        }
        </ul>
      </div>
    );
  }

  if (event.extras.type === 'publication' && event.extras.publication) {
    const {
      name,
      summary,
      keywords,
      picture,
      website,
      isOffline = false,
    } = event.extras.publication;

    return (
      <div className="work-item publication">
        { isOffline
            ? <img src={picture} alt={name} className="thumbnail" />
            : <a href={website || '#'}>
              <img src={picture} alt={name} className="thumbnail" />
            </a>
        }
        {!isOffline && <p className="work-website">
          <a href={website || '#'}>{website}</a>
        </p>}
        <p>{summary}</p>
        <ul className="list-inline">
        {
          keywords.sort().map((item,
            key) => (
            <li key={key}>
              <span className="label label-default">{item}</span>
            </li>
          ))
        }
        </ul>
      </div>
    );
  }

  return <div />;
};

const { shape } = React.PropTypes;
ExperienceTimelineTextBody.propTypes = {
  event: shape().isRequired,
};

ExperienceTimelineTextBody.defaultProps = {
  event: {
    extras: {},
  },
};

export default ExperienceTimelineTextBody;
