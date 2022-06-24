import { ProjectConfiguration, TargetConfiguration, Tree } from '@nrwl/devkit';
import { Schema as EsLintExecutorOptions } from '@nrwl/linter/src/executors/eslint/schema';
import { PluginLintChecksGeneratorSchema } from './schema';
import { PackageJson } from 'nx/src/utils/package-json';
export default function pluginLintCheckGenerator(host: Tree, options: PluginLintChecksGeneratorSchema): Promise<() => import("@nrwl/devkit").GeneratorCallback>;
export declare function addMigrationJsonChecks(host: Tree, options: PluginLintChecksGeneratorSchema, packageJson: PackageJson): void;
export declare function getEsLintOptions(project: ProjectConfiguration): [target: string, configuration: TargetConfiguration<EsLintExecutorOptions>];
