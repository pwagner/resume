/* eslint-disable import/no-extraneous-dependencies, no-unused-expressions, no-unused-vars */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Basics from '../../src/components/Basics';
import About from '../../src/components/About';

xdescribe('Basics (jsdom test)', () => {
  it('should get rendered into document and receive the data prop', () => {
    /* If we want to user renderIntoDocument for stateless components
     * such as Basics, a workaround is needed: e.g. wrap the component in a div tag.
     * Alternatively switch to shallow rendering.
     */

    /*
    const basics = TestUtils.renderIntoDocument(<div>
      <Basics data={{ test: true }} />
    </div>);
    expect(basics.data).to.deep.equal({ test: true });
    */

    /*
    FIXME: findRenderedDOMComponentWithClass does not accept the wrapping
    div from the workaround mentioned above - it wants a composite component
    const header = TestUtils.findRenderedDOMComponentWithClass(basics, 'basics-header');
    */
  });

  // FIXME: Decide whether to test it with renderIntoDocument or shallowRenderer
  it('should render About, Contact, Info and SocialProfiles', () => {
    const basics = TestUtils.renderIntoDocument(<Basics data={{}} />);
    const about = TestUtils.findRenderedDOMComponentWithClass(basics, 'error');
    expect(about.type).to.equal('section');
  });
});
