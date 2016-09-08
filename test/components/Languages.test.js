/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Languages from '../../src/components/Languages';

describe('Languages', () => {
  it('should render a section with class languages', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Languages />);
    const languages = shallowRenderer.getRenderOutput();
    expect(languages.type).to.equal('section');
    expect(languages.props.className).to.equal('languages');
  });

  it('should render a list as the second tag of inside the section', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Languages languages={['test']} />);
    const languages = shallowRenderer.getRenderOutput();
    expect(languages.props.children[1].type).to.equal('ul');
  });
});
