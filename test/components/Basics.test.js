/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Basics from '../../src/components/Basics';
// import About from '../../src/components/About';

describe('Basics', () => {
  it('should render an error message if basics from resume are not passed', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Basics data={null} />);
    const basics = shallowRenderer.getRenderOutput();
    expect(basics.type).to.equal('p');
  });
  it('should render a section, when basics data is passed', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Basics data={{}} />);
    const basics = shallowRenderer.getRenderOutput();
    expect(basics.type).to.equal('section');
  });
  it('should render a child div', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Basics data={{}} />);
    const basics = shallowRenderer.getRenderOutput();
    // expect(basics.props.children).to.contain(<div />);
    expect(basics.props.children.type).to.equal('div');
  });
  /*
  it('should render About, Contact, Info and SocialProfiles', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Basics data={{}} />);
    const basics = shallowRenderer.getRenderOutput();

    // FIXME: Find way to find all composite components in the rendered component's children.
    const about = TestUtils.scryRenderedComponentsWithType(basics, About);
    expect(about.type).to.equal('section');
  });
  */
});
