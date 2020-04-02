'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const clientLibRelativePath = '/apps/wknd-events/clientlibs/angular-app';

module.exports = {
    clientLibRoot: resolveApp('../ui.apps/src/main/content/jcr_root' + clientLibRelativePath),
    clientLibRelativePath: clientLibRelativePath
};