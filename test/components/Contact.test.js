/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Contact from '../../src/components/Contact';

describe('Contact', () => {
  it('should render a section with class contact', () => {
    const props = {
      location: {},
      email: 'test-email',
      phone: 'test-phone',
      website: 'test-website',
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Contact {...props} />);
    const contact = shallowRenderer.getRenderOutput();
    expect(contact.type).to.equal('section');
    expect(contact.props.className).to.equal('contact');
  });
});
