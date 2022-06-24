import { Tree } from '@nrwl/devkit';
import { Schema } from '../schema';
export interface NormalizedSchema extends Schema {
    name: string;
    fileName: string;
    libsDir: string;
    projectRoot: string;
    projectDirectory: string;
    parsedTags: string[];
    npmScope: string;
    npmPackageName: string;
}
export declare function normalizeOptions(host: Tree, options: Schema): NormalizedSchema;
