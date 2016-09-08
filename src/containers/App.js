import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Basics from '../components/Basics';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Languages from '../components/Languages';

export const fetchResume = source => fetch(source, {
  credentials: 'include', // pass cookies, for authentication
})
.then(response => {
  if (response.status >= 400) {
    throw new Error('Bad response from server');
  }

  return response.json();
});

class App extends Component {

  constructor(props) {
    super(props);
    const { resume } = props;
    this.state = { resume };
  }

  componentDidMount() {
    const { source } = this.props;
    if (!this.state.resume && source) {
      fetchResume(source)
      .then(resume => {
        this.setState({ resume });
      });
    }
  }

  render() {
    if (this.state.resume) {
      const { basics, work, skills, education, publications, languages } = this.state.resume;
      const { quote } = basics || {};

      return (
        <div className="container-fluid paper">
          <div className="row">
            <main className="col-xs-12">
              <Basics
                data={basics}
              />
              <Skills
                data={skills}
              />
              <Education
                data={education}
                work={work}
                quote={quote}
              />
              <Experience
                work={work}
                publications={publications}
              />
              <Languages
                languages={languages}
              />
            </main>
          </div>
        </div>
      );
    }

    return (
      <div className="loading">
        <p>Loading résumé, please wait…</p>
        <img src="/dist/images/heart.gif" alt="Loading…" />
      </div>
    );
  }
}

const { string, shape } = React.PropTypes;
App.propTypes = {
  source: string.isRequired,
  resume: shape(),
};
App.defaultProps = {
  source: '/resume.json',
};

export default App;
