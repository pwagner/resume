import React from 'react';

const Contact = ({ isPrivate, location, email, phone, website }) => (
  <section className="contact">
    <h2 className="text-uppercase"><i className="fa fa-lg fa-home" /> Contact</h2>
      {isPrivate ? (
        <ul className="list-unstyled contact-links">
          <li>
            <i className="fa fa-lg fa-globe" />
            <a href={website}>{website}</a>
          </li>
          <li>
            <i className="fa fa-lg fa-at" />
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <i className="fa fa-lg fa-mobile" />
            {phone}
          </li>
          <li>
            <i className="fa fa-lg fa-location-arrow" />
            {location.address}<br />
            {location.postalCode} {location.city}<br />
            {location.countryName}
          </li>
        </ul>
      ) : (
        <div>
          <ul className="list-unstyled contact-links">
            <li>
              <i className="fa fa-lg fa-globe" />
              <a href={website}>{website}</a>
            </li>
            <li>
              <i className="fa fa-lg fa-location-arrow" />
              {location.city}, {location.countryName}
            </li>
          </ul>
          <p className="contact-private-hint">
            To view more of my contact data and personal information,
            please <a href={website}>go to my website</a> and request access to my private résumé.
          </p>
        </div>
      )}
  </section>
);

const { bool, shape, string } = React.PropTypes;
Contact.propTypes = {
  isPrivate: bool,
  location: shape().isRequired,
  email: string,
  phone: string,
  website: string,
};
Contact.defaultProps = {
  isPrivate: false,
  location: {},
};

export default Contact;
