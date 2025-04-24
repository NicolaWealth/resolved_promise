import assert from 'assert';
import {resolvedPromise} from './resolved_promise'

describe('resolvedPromises', () => {
  it('Resolves various values', () => {
    resolvedPromise.void.then(v => assert.strictEqual(v, undefined));
    resolvedPromise.undefined.then(v => assert.strictEqual(v, undefined));
    resolvedPromise.true.then(v => assert.strictEqual(v, true));
    resolvedPromise.false.then(v => assert.strictEqual(v, false));
  });
});
