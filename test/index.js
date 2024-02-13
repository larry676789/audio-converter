const assert = require('assert');
const main = require('..');

describe('audio-converter', () => {
  it('returns with placeholder', () => {
    assert.equal(main(), 'audio-converter');
  });
});
