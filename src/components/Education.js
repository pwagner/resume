import React from 'react';
import moment from 'moment';
import EducationPie from './EducationPie';
import Quote from './Quote';

const Education = ({ data, work, quote }) => (
  <section className="education">
    <div className="divider" />
    <div className="heading">
      <h2 className="text-uppercase">
        <span className="theory"><i className="fa fa-lg fa-mortar-board" /> Theory</span>
        <span className="amp"> & </span>
        <span className="praxis">Praxis <i className="fa fa-lg fa-flask" /></span>
      </h2>
    </div>
    <EducationPie education={data} work={work} />
    <Quote text={quote.text} author={quote.author} />
    <div className="education-details row">
      {
        data.map(({
          institution,
          area,
          studyType,
          educationType,
          startDate,
          endDate,
          remark,
        }, key) => (
          <div className="col-xs-12 col-sm-6 col-md-3" key={key}>
            <h3>{institution}</h3>
            <h5>{area}</h5>
            <p className="timeframe">
              {moment(startDate).format('MMMM YYYY')} - {moment(endDate).format('MMMM YYYY')}
            </p>
            <p>{remark}</p>
          </div>
        ))
      }
    </div>
    <div className="divider" />
  </section>
);

const { string, shape, arrayOf } = React.PropTypes;
Education.propTypes = {
  data: arrayOf(shape({
    institution: string,
    area: string,
    studyType: string,
    educationType: string,
    startDate: string,
    endDate: string,
    remark: string,
  })).isRequired,
  work: arrayOf(shape({
    startDate: string,
  })).isRequired,
  quote: shape({
    text: string,
    author: string,
  }),
};
Education.defaultProps = {
  data: [],
  work: [],
  quote: {},
};

export default Education;
