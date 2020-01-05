import sinon from 'sinon';
import chai from 'chai';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

console.error = err => { throw new Error(err); };           // eslint-disable-line no-console
console.warn = warning => { throw new Error(warning); };    // eslint-disable-line no-console

sinon.assert.expose(chai.assert, {prefix: ''});

process.on('unhandledRejection', reason => {
  throw reason;
});
