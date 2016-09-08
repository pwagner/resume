/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions, no-unused-vars */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Quote from '../../src/components/Quote';

describe('Quote', () => {
  it('should render a blockquote with class quote', () => {
    const props = {
      author: 'Author',
      text: 'Example quote',
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Quote {...props} />);
    const quote = shallowRenderer.getRenderOutput();
    expect(quote.type).to.equal('blockquote');
    expect(quote.props.className).to.equal('quote');
  });
});
