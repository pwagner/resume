/* eslint-disable import/no-extraneous-dependencies, func-names, no-unused-vars */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App, { fetchResume } from '../../src/containers/App';

describe('App', () => {
  it('should show the loading div, when there is no resume in the state', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<App />);
    const app = shallowRenderer.getRenderOutput();
    expect(app.type).to.equal('div');
    expect(app.props.className).to.equal('loading');
  });

  it('should show the main container, when there is a resume in the state', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    expect(app.props.source).to.equal('/resume.json');
    app.setState({ resume: {} });
    expect(app.state.resume).to.deep.equal({});
    const container = TestUtils.findRenderedDOMComponentWithClass(app, 'paper');
    expect(container.className).to.equal('container-fluid paper');
  });

  describe('fetchResume', () => {
    it('should return a promise', () => {
      const actual = fetchResume('test');
      expect(actual).to.be.a('Promise');
    });
    it('should resolve a valid source', function (done) {
      this.timeout(5000);
      fetchResume('http://localhost:3000/dist/resume.json').then(actual => {
        expect(actual).to.be.an('object');
        done();
      }).catch(err => {
        expect(true).to.equal(false);
        done();
      });
    });
    it('should throw an error with an invalid source', (done) => {
      fetchResume('/test').then(actual => {
        expect(true).to.equal(false);
        done();
      }).catch(err => {
        expect(err).to.be.an('Error');
        done();
      });
    });
  });
});
