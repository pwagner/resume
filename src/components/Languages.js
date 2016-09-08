import React from 'react';

const Languages = ({ languages }) => (
  <section className="languages">
    <h2 className="text-uppercase"><i className="fa fa-lg fa-comment" /> Languages</h2>
    <p>{languages.length} languages</p>
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
