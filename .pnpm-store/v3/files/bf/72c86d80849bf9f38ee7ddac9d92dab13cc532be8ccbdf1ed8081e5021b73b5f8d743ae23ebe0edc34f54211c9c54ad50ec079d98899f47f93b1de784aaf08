"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nxPluginE2EExecutor = void 0;
const tslib_1 = require("tslib");
require("dotenv/config");
const devkit_1 = require("@nrwl/devkit");
const jest_impl_1 = require("@nrwl/jest/src/executors/jest/jest.impl");
function nxPluginE2EExecutor(options, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* nxPluginE2EExecutor_1() {
        var e_1, _a;
        let success;
        try {
            for (var _b = tslib_1.__asyncValues(runBuildTarget(options.target, context)), _c; _c = yield tslib_1.__await(_b.next()), !_c.done;) {
                const _ = _c.value;
                try {
                    success = yield tslib_1.__await(runTests(options.jestConfig, context));
                }
                catch (e) {
                    devkit_1.logger.error(e.message);
                    success = false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield tslib_1.__await(_a.call(_b));
            }
            finally { if (e_1) throw e_1.error; }
        }
        return yield tslib_1.__await({ success });
    });
}
exports.nxPluginE2EExecutor = nxPluginE2EExecutor;
function runBuildTarget(buildTarget, context) {
    return tslib_1.__asyncGenerator(this, arguments, function* runBuildTarget_1() {
        var e_2, _a;
        const { project, target, configuration } = (0, devkit_1.parseTargetString)(buildTarget);
        const buildTargetOptions = (0, devkit_1.readTargetOptions)({ project, target, configuration }, context);
        const targetSupportsWatch = Object.keys(buildTargetOptions).includes('watch');
        try {
            for (var _b = tslib_1.__asyncValues(yield tslib_1.__await((0, devkit_1.runExecutor)({ project, target, configuration }, targetSupportsWatch ? { watch: false } : {}, context))), _c; _c = yield tslib_1.__await(_b.next()), !_c.done;) {
                const output = _c.value;
                if (!output.success)
                    throw new Error('Could not compile application files.');
                yield yield tslib_1.__await(output.success);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield tslib_1.__await(_a.call(_b));
            }
            finally { if (e_2) throw e_2.error; }
        }
    });
}
function runTests(jestConfig, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { success } = yield (0, jest_impl_1.jestExecutor)({ jestConfig, watch: false }, context);
        return success;
    });
}
exports.default = nxPluginE2EExecutor;
//# sourceMappingURL=e2e.impl.js.map