"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
function removeDeprecatedJestBuilderOptions() {
    return (host) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const workspace = yield (0, workspace_1.getWorkspace)(host, (0, workspace_1.getWorkspacePath)(host));
        for (const [, projectDefinition] of workspace.projects) {
            for (const [, testTarget] of projectDefinition.targets) {
                if (testTarget.builder !== '@nrwl/nx-plugin:e2e') {
                    continue;
                }
                const updatedOptions = Object.assign({}, testTarget.options);
                delete updatedOptions.tsSpecConfig;
                testTarget.options = updatedOptions;
            }
        }
        return (0, workspace_1.updateWorkspace)(workspace);
    });
}
function update() {
    return (0, schematics_1.chain)([removeDeprecatedJestBuilderOptions(), (0, workspace_1.formatFiles)()]);
}
exports.default = update;
//# sourceMappingURL=update-10-2-0.js.map