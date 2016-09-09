import React from 'react';

const Languages = ({ languages }) => (
  <section className="languages">
    <h2 className="text-uppercase"><i className="fa fa-lg fa-language" /> Languages</h2>
    <ul className="list-inline">
    {languages.map(({ name, level }, key) => (
      <li key={key}><strong>{name}</strong><br />{level}</li>
    ))}
    </ul>
  </section>
);

const { arrayOf, shape, string } = React.PropTypes;
Languages.propTypes = {
  languages: arrayOf(shape({
    name: string,
    level: string,
  })).isRequired,
};
Languages.defaultProps = {
  languages: [],
};

export default Languages;
