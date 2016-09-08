import React from 'react';
import Employment from './Employment';
import Publication from './Publication';

const Work = ({ data, publications }) => (
  <section className="work">
    <h2>
      Work Experience
    </h2>
    <div className="row">
      <div className="employments col-xs-6">
        <h3>
          <i className="fa fa-lg fa-building" /> Employments
        </h3>
        {
          data.map((item, key) => <Employment key={key} employment={item} />)
        }
      </div>
      <div className="projects col-xs-6">
        <h3>
          <i className="fa fa-lg fa-folder-open" /> Example Publications
        </h3>
        {
          publications.map((item, key) => <Publication key={key} publication={item} />)
        }
      </div>
    </div>
    <div className="divider" />
  </section>
);

const { string, shape, number, arrayOf } = React.PropTypes;
Work.propTypes = {
  data: arrayOf(shape({
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
Work.defaultProps = {
  data: [],
  publications: [],
};

export default Work;
