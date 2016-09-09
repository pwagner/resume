import React from 'react';
import InterestsItem from './InterestsItem';

const Interests = ({ interests }) => (
  <section className="interests">
    <h2 className="text-uppercase"><i className="fa fa-lg fa-language" /> Interests</h2>
    <ul className="list-inline">
    {interests.map(({ name }, key) => (
      <li key={key}><InterestsItem name={name} /></li>
    ))}
    </ul>
  </section>
);

const { arrayOf, string } = React.PropTypes;
Interests.propTypes = {
  interests: arrayOf(string).isRequired,
};
Interests.defaultProps = {
  interests: [],
};

export default Interests;
