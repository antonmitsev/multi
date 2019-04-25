const Helper = require('./modules/helper');

class Main {
    constructor(helper, err = null) {
        helper.runner(err)
            .then(
                (res) => {
                    process.exit(0);
                }
            )
            .catch(
                (err = null) => {
                    console.log({ err });
                    process.exit(err.code ? err.code : 256);
                }
            );
        return void(0);
    }
}

new Main(Helper);
