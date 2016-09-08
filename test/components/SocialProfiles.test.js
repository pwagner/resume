/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions, no-unused-vars */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import SocialProfiles from '../../src/components/SocialProfiles';

describe('SocialProfiles', () => {
  it('should render a ul with class social-profiles', () => {
    const props = {
      profiles: [],
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<SocialProfiles {...props} />);
    const socialProfiles = shallowRenderer.getRenderOutput();
    expect(socialProfiles.type).to.equal('ul');
    expect(socialProfiles.props.className).to.contain('social-profiles');
  });
});
