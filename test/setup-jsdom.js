/* eslint-disable import/no-extraneous-dependencies */
import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js',
};
