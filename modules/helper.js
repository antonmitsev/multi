var packajeJson = require('../package.json');

class Helper {
    static get ver() {
        return packajeJson.version;
    }

    static runner(err = null, cbk = null) {
        return new Promise(
            function (resolve, reject) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        );
    }
}

module.exports = Helper;
