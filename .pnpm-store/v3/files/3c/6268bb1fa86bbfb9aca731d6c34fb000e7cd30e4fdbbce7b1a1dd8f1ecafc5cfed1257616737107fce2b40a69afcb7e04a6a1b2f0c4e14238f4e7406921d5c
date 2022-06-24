"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommand = exports.runNxCommand = void 0;
const child_process_1 = require("child_process");
const paths_1 = require("./paths");
const devkit_1 = require("@nrwl/devkit");
/**
 * Run a nx command inside the e2e directory
 * @param command
 * @param opts
 *
 * @see tmpProjPath
 */
function runNxCommand(command, opts = {
    silenceError: false,
}) {
    try {
        const pmc = (0, devkit_1.getPackageManagerCommand)();
        return (0, child_process_1.execSync)(`${pmc.exec} nx ${command}`, {
            cwd: (0, paths_1.tmpProjPath)(),
        })
            .toString()
            .replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
    }
    catch (e) {
        if (opts.silenceError) {
            return e.stdout.toString();
        }
        else {
            console.log(e.stdout.toString(), e.stderr.toString());
            throw e;
        }
    }
}
exports.runNxCommand = runNxCommand;
function runCommand(command) {
    try {
        return (0, child_process_1.execSync)(command, {
            cwd: (0, paths_1.tmpProjPath)(),
            stdio: ['pipe', 'pipe', 'pipe'],
        }).toString();
    }
    catch (e) {
        return e.stdout.toString() + e.stderr.toString();
    }
}
exports.runCommand = runCommand;
//# sourceMappingURL=commands.js.map