/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import InterestsItem from '../../src/components/InterestsItem';

describe('InterestsItem', () => {
  it('should render a div with class interests-item', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<InterestsItem name="test" />);
    const interestsItem = shallowRenderer.getRenderOutput();
    expect(interestsItem.type).to.equal('div');
    expect(interestsItem.props.className).to.equal('interests-item');
  });
});
