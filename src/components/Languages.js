import React from 'react';

const Languages = ({ languages }) => (
  <section className="languages">
    <h2 className="text-uppercase"><i className="fa fa-lg fa-language" /> Languages</h2>
    <ul className="list-inline">
    {languages.map(({ name, level }) => (
      <li>{name} {level}</li>
    ))}
    </ul>
  </section>
);

const { arrayOf, string } = React.PropTypes;
Languages.propTypes = {
  languages: arrayOf(string).isRequired,
};
Languages.defaultProps = {
  languages: [],
};

export default Languages;
