var assert = require('assert');
var expect = require('mocha');
var Helper = require('../modules/helper');
var packajeJson = require('../package.json');

describe('Helper', () => {
  describe('#ver()', () => {
    it('should return current package.json version', () => {
      assert.equal(Helper.ver, packajeJson.version);
    });
  });

  describe('#runner()', () => {
    it('should exit without error usually', (done) => {
      Helper.runner().then(
        result => {
          expect(true).to.equal(true);
          done();
        }
      ).catch(
        () => {
          expect(done()).to.equal(false);
        });
    });

    it('should exit with an error when err passed', () => {
      assert.equal(Helper.runner({ code: 333 }).then(e => e).catch(err => err), void (333));
    });
  });
});
