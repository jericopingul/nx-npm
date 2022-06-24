"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const workspace_1 = require("@nrwl/workspace");
const devkit_1 = require("@nrwl/devkit");
function default_1() {
    return (0, workspace_1.visitNotIgnoredFiles)((file, host) => {
        if ((0, path_1.basename)(file) === 'schema.json') {
            const p = (0, workspace_1.readJsonInTree)(host, file);
            if (p.$schema === 'https://json-schema.org/draft-07/schema' ||
                p.$schema === 'http://json-schema.org/draft-07/schema') {
                p.$schema = 'http://json-schema.org/schema';
                delete p.$id;
            }
            host.overwrite(file, (0, devkit_1.serializeJson)(p));
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=update-schema-version-for-executors-and-generators.js.map