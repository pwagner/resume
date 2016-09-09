import React from 'react';

const Interests = ({ interests }) => (
  <section className="interests">
    <h2 className="text-uppercase"><i className="fa fa-lg fa-language" /> Interests</h2>
    <ul className="list-inline">
    {interests.map(({ name }, key) => (
      <li key={key}>{name}</li>
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
