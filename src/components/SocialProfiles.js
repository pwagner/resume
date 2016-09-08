import React from 'react';

const SocialProfiles = ({ profiles }) => (
  <ul className="social-profiles list-inline">
    {
      profiles.map(({ username, network, url }, key) => {
        switch (network) {
          case 'Twitter':
            return (
              <li key={key}>
                <a href={url}>
                  <i className="fa fa-twitter fa-2x" />
                  <span className="handle">{username}</span>
                </a>
              </li>
            );
          case 'Github':
            return (
              <li key={key}>
                <a href={url}>
                  <i className="fa fa-github fa-2x" />
                  <span className="handle">{username}</span>
                </a>
              </li>
            );
          case 'Stackoverflow':
            return (
              <li key={key}>
                <a href={url}>
                  <i className="fa fa-stack-overflow fa-2x" />
                  <span className="handle">{username}</span>
                </a>
              </li>
            );
          default:
            return (
              <li key={key}>
                <a href={url}>
                  <i className="fa fa-user fa-2x" />
                  <span className="handle">{username}</span>
                </a>
              </li>
            );
        }
      })
    }
  </ul>
);

const { arrayOf, shape, string } = React.PropTypes;
SocialProfiles.propTypes = {
  profiles: arrayOf(shape({
    network: string,
    username: string,
    url: string,
  })).isRequired,
};
SocialProfiles.defaultProps = {
  profiles: [],
};

export default SocialProfiles;
