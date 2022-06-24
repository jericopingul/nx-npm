"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmpBackupProjPath = exports.tmpProjPath = void 0;
/**
 * The directory where the e2e workspace resides in.
 *
 * @param path path within the e2e directory
 * @returns `'${process.cwd()}/tmp/nx-e2e/proj/<path>'`
 */
function tmpProjPath(path) {
    return path
        ? `${process.cwd()}/tmp/nx-e2e/proj/${path}`
        : `${process.cwd()}/tmp/nx-e2e/proj`;
}
exports.tmpProjPath = tmpProjPath;
/**
 * The workspace backup directory. This is used for caching of the creation of the workspace.
 *
 * @param path path within the e2e directory
 * @returns `'${process.cwd()}/tmp/nx-e2e/proj-backup/<path>'`
 */
function tmpBackupProjPath(path) {
    return path
        ? `${process.cwd()}/tmp/nx-e2e/proj-backup/${path}`
        : `${process.cwd()}/tmp/nx-e2e/proj-backup`;
}
exports.tmpBackupProjPath = tmpBackupProjPath;
//# sourceMappingURL=paths.js.map