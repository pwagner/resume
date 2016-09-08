import React from 'react';

const Quote = (({ author, text }) => (
  <blockquote className="quote">
    <i className="fa fa-lg fa-quote-left pull-left" />
    <p>{text}</p>
    <i className="fa fa-lg fa-quote-right pull-right" />
    <footer>
      <cite>{author}</cite>
    </footer>
  </blockquote>
));

const { string } = React.PropTypes;
Quote.propTypes = {
  author: string.isRequired,
  text: string.isRequired,
};
Quote.defaultProps = {
  author: 'Author',
  text: 'Insert quote here.',
};

export default Quote;
