import React from 'react';

import SocialProfiles from './SocialProfiles';
import Contact from './Contact';
import Info from './Info';
import About from './About';

const Basics = ({ data, isPrivate }) => {
  if (!data) {
    return <p className="error">Sorry, an error occurred. Basic data is missing in the resume.</p>;
  }

  const {
    picture,
    name,
    label,
    location,
    email,
    phone,
    website,
    profiles,
    summary,
    birthday,
    citizenship,
    children,
  } = data;

  return (
    <section>
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2 col-sm-offset-0 col-sm-4 basics-picture">
          <img className="img-circle center-block" src={picture} width="192" alt={name} />
        </div>
        <div className="col-xs-12 col-sm-8 basics-header">
          <h1 className="">{name}</h1>
          <h2 className="">{label}</h2>
          <SocialProfiles profiles={profiles} />
        </div>
        <div className="col-xs-12">
          <div className="divider" />
          <div className="row">
            <div className="col-xs-12 col-sm-4 basics-contact">
              <Contact
                isPrivate={isPrivate}
                location={location}
                email={email}
                phone={phone}
                website={website}
              />
            </div>
            <div className="col-xs-12 col-sm-8">
              <About
                summary={summary}
              />
            </div>
            <div className="col-xs-12">
              <div className="divider" />
              <Info
                birthday={birthday}
                citizenship={citizenship}
                children={children}
              />
            </div>
          </div>
          <div className="divider" />
        </div>
      </div>
    </section>
  );
};

const { arrayOf, string, shape, number, bool } = React.PropTypes;
Basics.propTypes = {
  isPrivate: bool,
  data: shape({
    picture: string,
    name: string,
    label: string,
    location: shape({
      address: string,
    }),
    email: string,
    phone: string,
    website: string,
    profiles: arrayOf(shape()),
    summary: string,
    birthday: string,
    citizenship: string,
    children: number,
  }),
};
Basics.defaultProps = {
  data: null,
  isPrivate: false,
};

export default Basics;
