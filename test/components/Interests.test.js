/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Interests from '../../src/components/Interests';

describe('Interests', () => {
  it('should render a section with class interests', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Interests />);
    const interests = shallowRenderer.getRenderOutput();
    expect(interests.type).to.equal('section');
    expect(interests.props.className).to.equal('interests');
  });
});
