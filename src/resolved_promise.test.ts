import assert from 'assert';
import {resolvedPromises} from './resolved_promise'

describe('resolvedPromises', () => {
  it('Resolves various values', () => {
    resolvedPromises.void.then(v => assert.strictEqual(v, undefined));
    resolvedPromises.undefined.then(v => assert.strictEqual(v, undefined));
    resolvedPromises.true.then(v => assert.strictEqual(v, true));
    resolvedPromises.false.then(v => assert.strictEqual(v, false));
  });
});
