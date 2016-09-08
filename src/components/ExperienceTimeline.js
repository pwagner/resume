import React from 'react';
import Timeline from 'react-image-timeline';

import ExperienceTimelineTextBody from './ExperienceTimelineTextBody';
import ExperienceTimelineHeader from './ExperienceTimelineHeader';

const ExperienceTimeline = ({ work, publications }) => {
  const events = [
    ...work.map(({
      company,
      startDate,
      endDate,
      summary,
      position,
    }, key) => ({
      date: new Date(startDate),
      title: company === 'Self-Employed'
        ? `${company} ${position}`
        : company,
      imageUrl: '/dist/images/tree.png',
      text: summary,
      buttonText: endDate,
      extras: {
        type: 'employment',
        employment: work[key], // pass into custom component in Timeline
      },
    })),
    ...publications.map(({
      name,
      publisher,
      releaseDate,
      website,
      isOffline,
      summary,
      keywords,
      picture,
    }, key) => ({
      date: new Date(releaseDate),
      title: publisher,
      imageUrl: picture,
      text: summary,
      buttonText: 'Button',
      extras: {
        type: 'publication',
        publication: publications[key], // pass into custom component in Timeline
      },
    })),
  ];

  return (
    <Timeline
      events={events}
      customTextBody={ExperienceTimelineTextBody}
      customHeader={ExperienceTimelineHeader}

      customStartLabel={null}
      customEndLabel={null}
      customImageBody={null}
      customFooter={null}
    />
  );
};

export default ExperienceTimeline;
