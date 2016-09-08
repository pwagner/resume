/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import About from '../../src/components/About';

describe('About', () => {
  it('should render a section with class about', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<About summary="test" />);
    const about = shallowRenderer.getRenderOutput();
    expect(about.type).to.equal('section');
    expect(about.props.className).to.equal('about');
  });
});
