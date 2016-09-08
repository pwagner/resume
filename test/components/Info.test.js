/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions, no-unused-vars */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Info from '../../src/components/Info';

describe('Info', () => {
  it('should render a section with class info', () => {
    const props = {
      birthday: '1990-01-01',
      citizenship: 'French',
      children: 1,
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Info {...props} />);
    const info = shallowRenderer.getRenderOutput();
    expect(info.type).to.equal('section');
    expect(info.props.className).to.equal('info');
  });

  it('should render a list with four entries', () => {
    const props = {
      birthday: '1990-01-01',
      citizenship: 'French',
      children: 1,
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Info {...props} />);
    const info = shallowRenderer.getRenderOutput();

    expect(info.props.children[1].type).to.equal('ul');
    expect(info.props.children[1].props.children.length).to.equal(4);
  });

  it('should render a list with three entries, when there are no children', () => {
    const props = {
      birthday: '1990-01-01',
      citizenship: 'French',
      children: 0,
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Info {...props} />);
    const info = shallowRenderer.getRenderOutput();

    expect(info.props.children[1].type).to.equal('ul');
    expect(info.props.children[1].props.children[3]).to.be.equal(false);
  });
});
