"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workspace_1 = require("@nrwl/workspace");
const devkit_1 = require("@nrwl/devkit");
function default_1() {
    return (host) => {
        const p = (0, workspace_1.readJsonInTree)(host, 'package.json');
        if (p['ng-update']) {
            p['nx-migrations'] = p['ng-update'];
            delete p['ng-update'];
        }
        host.overwrite('package.json', (0, devkit_1.serializeJson)(p));
    };
}
exports.default = default_1;
//# sourceMappingURL=rename-ng-update-into-nx-migrate.js.map