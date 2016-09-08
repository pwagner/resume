/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Skills from '../../src/components/Skills';

describe('Skills', () => {
  it('should render a section with class skills', () => {
    const props = {
      data: [],
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Skills {...props} />);
    const skills = shallowRenderer.getRenderOutput();
    expect(skills.type).to.equal('section');
    expect(skills.props.className).to.equal('skills');
  });
});
