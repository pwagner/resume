import React from 'react';

const About = ({ summary }) => (
  <section className="about">
    <h2 className="text-uppercase"><i className="fa fa-lg fa-comment" /> About</h2>
    <p>{summary}</p>
  </section>
);

const { string } = React.PropTypes;
About.propTypes = {
  summary: string.isRequired,
};
About.defaultProps = {
  summary: 'Write a summary about yourself.',
};

export default About;
