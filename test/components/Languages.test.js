/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Languages from '../../src/components/Languages';

describe('Languages', () => {
  it('should render a section with class languages', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Languages summary="test" />);
    const about = shallowRenderer.getRenderOutput();
    expect(about.type).to.equal('section');
    expect(about.props.className).to.equal('languages');
  });
});
