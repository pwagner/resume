import React from 'react';
/*
import Employment from './Employment';
import Publication from './Publication';
*/
import ExperienceTimeline from './ExperienceTimeline';

const Experience = ({ work, publications }) => (
  <section className="experience">
    <h2>
      Work Experience
    </h2>
    <div className="row">
      <div className="employments col-xs-6">
        <h3>
          <i className="fa fa-lg fa-building" /> Employments
        </h3>
        {
          // data.map((item, key) => <Employment key={key} employment={item} />)
        }
      </div>
      <div className="projects col-xs-6">
        <h3>
          Projects &nbsp;<i className="fa fa-lg fa-folder-open" />
        </h3>
        {
          // publications.map((item, key) => <Publication key={key} publication={item} />)
        }
      </div>
    </div>
    <ExperienceTimeline work={work} publications={publications} />
    <div className="divider" />
  </section>
);

const { string, shape, number, arrayOf } = React.PropTypes;
Experience.propTypes = {
  work: arrayOf(shape({
    name: string,
    level: string,
    rating: number,
    keywords: arrayOf(string),
  })).isRequired,
  publications: arrayOf(shape({
    name: string,
    level: string,
    rating: number,
    keywords: arrayOf(string),
  })).isRequired,
};
Experience.defaultProps = {
  work: [],
  publications: [],
};

export default Experience;
