/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Education from '../../src/components/Education';

describe('Education', () => {
  it('should render a section with class education', () => {
    const props = {
      data: [],
      work: [],
      quote: {},
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Education {...props} />);
    const education = shallowRenderer.getRenderOutput();
    expect(education.type).to.equal('section');
    expect(education.props.className).to.equal('education');
  });
});
