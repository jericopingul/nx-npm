"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runNxCommandAsync = exports.runCommandAsync = void 0;
const child_process_1 = require("child_process");
const paths_1 = require("./paths");
const devkit_1 = require("@nrwl/devkit");
/**
 * Run a command asynchronously inside the e2e directory.
 *
 * @param command
 * @param opts
 */
function runCommandAsync(command, opts = {
    silenceError: false,
}) {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(command, {
            cwd: (0, paths_1.tmpProjPath)(),
        }, (err, stdout, stderr) => {
            if (!opts.silenceError && err) {
                reject(err);
            }
            resolve({ stdout, stderr });
        });
    });
}
exports.runCommandAsync = runCommandAsync;
/**
 * Run a nx command asynchronously inside the e2e directory
 * @param command
 * @param opts
 */
function runNxCommandAsync(command, opts = {
    silenceError: false,
}) {
    const pmc = (0, devkit_1.getPackageManagerCommand)();
    return runCommandAsync(`${pmc.exec} nx ${command}`, opts);
}
exports.runNxCommandAsync = runNxCommandAsync;
//# sourceMappingURL=async-commands.js.map