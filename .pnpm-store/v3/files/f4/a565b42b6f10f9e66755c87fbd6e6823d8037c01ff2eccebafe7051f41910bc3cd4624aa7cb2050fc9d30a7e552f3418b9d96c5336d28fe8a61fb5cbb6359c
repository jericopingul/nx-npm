import { E2EEncryption } from './e2e-encryption';
import { ErrorReporterApi } from '../api/error-reporter.api';
export declare class FileStorage {
    private readonly encryption;
    private readonly errorReporter;
    private readonly failWhenCannotDownloadArtifact;
    constructor(encryption: E2EEncryption, errorReporter: ErrorReporterApi, failWhenCannotDownloadArtifact: boolean);
    retrieve(hash: string, url: string, cacheDirectory: string): Promise<void>;
    store(hash: string, url: string, cacheDirectory: string): Promise<any>;
    private createFileName;
    private downloadFile;
    private convertStreamIntoPromise;
    private createCommitFile;
    private createCommitFilePath;
    private createFile;
    private uploadFile;
}
