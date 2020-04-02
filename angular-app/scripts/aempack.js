
'use strict';
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const aemPack = require('aempack');
const paths = require('./../config/paths');

const developWithSSR = process.env.DEVELOPSSR || false;

const user = process.env.AEMUSER  || 'admin';
const password = process.env.AEMPW || 'admin';

const aemPort = process.env.AEMPORT || 4502;
const aemHost = process.env.AEMHOST || 'localhost';


const proxyHost = process.env.PROXYHOST || 'localhost';
const proxyPort = process.env.PROXYPORT || 443;

const computeProxyUrl = () => {

    const port = proxyPort === 80 ? '' : ':' + aemPort;
    return 'http://' + proxyHost + port;
};


aemPack({
    delays: {
        postCompiledDebounceDelay: 10,
        serverSpawnDelay: 500,
        folderPushDelay: 10
    },
    browserSync: {
        https: true,
        enabled: true,
        sendDispatcherHeader: true,
        proxyUrl: computeProxyUrl(),
        proxyPort: proxyPort
    },
    cliBuildCommand: 'npm',
    cliBuildCommandArgs: ["run","watch"],
    cliBuildCommandSuccessMsg: 'Hash:',
    disableServerSideRendering: !developWithSSR,
    isInClientLibRoot: false,

    aemProtocol: 'http',
    aemHost: aemHost,
    aemPort: aemPort,
    aemUser: user,
    aemPassword: password,
    assetManifestPath: paths.clientLibRoot + '/stats.json',
    clientLibRelativePath: paths.clientLibRelativePath,
    clientLibAbsolutePath: paths.clientLibRoot,
});



