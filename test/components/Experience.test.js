/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions, no-unused-vars */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Experience from '../../src/components/Experience';

describe('Experience', () => {
  it('should render a section with class work-item', () => {
    const props = {
      employments: [{
        name: 'Example Experience',
        level: 'Example Level',
        rating: 2.5,
        keywords: [],
      }],
      publications: [{
        name: 'Website',
        publisher: 'Example',
        releaseDate: '2016-01-01',
        website: 'http://www.example.com',
        isOffline: false,
        summary: 'summary',
        keywords: [
          'test1',
          'test2',
        ],
        picture: 'http://www.example.com/example.jpg',
      }],
    };
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Experience {...props} />);
    const work = shallowRenderer.getRenderOutput();
    expect(work.type).to.equal('section');
    expect(work.props.className).to.equal('experience');
  });
});
